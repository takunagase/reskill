# uname() error回避
import platform
print("platform", platform.uname())

from sqlalchemy import create_engine, insert, delete, update, select
import sqlalchemy
from sqlalchemy.orm import sessionmaker
import json
import pandas as pd

from db_control.connect import engine
from db_control.mymodels import Customers

def myinsert(model, values):
    Session = sessionmaker(bind=engine)
    session = Session()

    query = insert(model).values(values)
    try:
        with session.begin():
            result = session.execute(query)
    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")
        session.rollback()

    session.close()
    return "inserted"

def myselect(mymodel, customer_id):
    # session構築
    Session = sessionmaker(bind=engine)
    session = Session()
    query = session.query(mymodel).filter(mymodel.customer_id == customer_id)
    try:
        # トランザクションを開始
        with session.begin():
            result = query.all()
        # 結果をオブジェクトから辞書に変換し、リストに追加
        result_dict_list = []
        for customer_info in result:
            result_dict_list.append({
                "customer_id": customer_info.customer_id,
                "customer_name": customer_info.customer_name,
                "age": customer_info.age,
                "gender": customer_info.gender,
                "career_l1": customer_info.career_l1,
                "career_s1": customer_info.career_s1,
                "career_length1": customer_info.career_length1,
                "career_l2": customer_info.career_l2,
                "career_s2": customer_info.career_s2,
                "career_length2": customer_info.career_length2,
                "career_l3": customer_info.career_l3,
                "career_s3": customer_info.career_s3,
                "career_length3": customer_info.career_length3,
                "qualification_1": customer_info.qualification_1,
                "qualification_2": customer_info.qualification_2,
                "qualification_3": customer_info.qualification_3,
                "skill_l1": customer_info.skill_l1,
                "skill_s1": customer_info.skill_s1,
                "skill_l2": customer_info.skill_l2,
                "skill_s2": customer_info.skill_s2,
                "skill_l3": customer_info.skill_l3,
                "skill_s3": customer_info.skill_s3,
            })
        # リストをJSONに変換
        result_json = json.dumps(result_dict_list, ensure_ascii=False)
    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")

    # セッションを閉じる
    session.close()
    return result_json

def myselectAll_customers():
    Session = sessionmaker(bind=engine)
    session = Session()

    query = select(Customers)
    try:
        with session.begin():
            df = pd.read_sql_query(query, con=engine)
            result_json = df.to_json(orient='records', force_ascii=False)

    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")
        result_json = None

    session.close()
    return result_json

def myupdate(mymodel, values):
    # session構築
    Session = sessionmaker(bind=engine)
    session = Session()

    customer_id = values.pop("customer_id")
 
    # query = update(Customers).where(Customers.customer_id=="C004").values(customer_name="鈴木C子", age=44)
    query = update(mymodel).where(mymodel.customer_id==customer_id).values(**values)
    try:
        # トランザクションを開始
        with session.begin():
            result = session.execute(query)
    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")
        session.rollback()
    # セッションを閉じる
    session.close()
    return "put"

def mydelete(mymodel, customer_id):
    # session構築
    Session = sessionmaker(bind=engine)
    session = Session()
    query = delete(mymodel).where(mymodel.customer_id==customer_id)
    try:
        # トランザクションを開始
        with session.begin():
            result = session.execute(query)
    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")
        session.rollback()
 
    # セッションを閉じる
    session.close()
    return customer_id + " is deleted"