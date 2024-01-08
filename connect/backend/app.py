from flask import Flask, request
from flask import jsonify
import json
from flask_cors import CORS

from db_control import crud, mymodels

import requests
import openai

# REST APIでありCRUDを持っている
app = Flask(__name__)
CORS(app)

# アクセスの為のキーをopenai.api_keyに代入し、設定
openai.api_key = "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"


@app.route("/")
def index():
    return "<p>Flask top page!</p>"

# /customers エンドポイントへのPOSTリクエストを処理
@app.route("/customers", methods=['POST'])
def create_customer():
    values = request.get_json()
    tmp = crud.myinsert(mymodels.Customers, values)
    result = crud.myselect(mymodels.Customers, values.get("customer_id"))
    return result, 200

@app.route("/skills", methods=['GET', 'POST'])
def run_gpt():
    # リクエスト内容を決める
    try:
        values = request.get_json()
        customer_id = values["customer_id"]
        career_l1 = values["career_l1"]
        career_s1 = values["career_s1"]
        career_length1 = values["career_length1"]
        career_l2 = values["career_l2"]
        career_s2 = values["career_s2"]
        career_length2 = values["career_length2"]
        qualification_1 = values["qualification_1"]
        qualification_2= values["qualification_2"]
        request_to_gpt = "私の職歴は"+  career_l1 + "・" + career_s1 + "を" +  str(career_length1) + "年と" +  career_l2 + "・" + career_s2 + "を" +  str(career_length2) +"年経験しています。保有資格は"+ qualification_1 + "・" + qualification_2 + "です。まず、【現状のあなたのスキル】と題して役職や職歴・資格から推察されるスキルをMECEに因数分解して、理由とともに具体的に出力してください。次に【お勧めの掛け合わせスキル】と題して、現在の職歴や提示してもらったスキルからは大きく逸脱するが、掛け合わせることで新たな視点やアプローチをもたらす可能性のある異分野のスキルをなるべく数多く示してください。まずは500文字以内でお願いします。"
    except Exception as e:
        print(f"Error in run_gpt: {e}")
        return jsonify({"error": str(e)}), 500

    # 決めた内容を元にopenai.ChatCompletion.createでchatGPTにリクエスト。オプションとしてmodelにAIモデル、messagesに内容を指定
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": request_to_gpt },
        ],
    )

    # 返って来たレスポンスの内容はresponse.choices[0]["message"]["content"].strip()に格納されているので、これをoutput_contentに代入
    gpt_response_skill = response.choices[0]["message"]["content"].strip()

    return gpt_response_skill  # 返って来たレスポンスの内容を返す

@app.route("/customers", methods=['PUT'])
def update_customer():
    print("I'm in")
    values = request.get_json()
    values_original = values.copy()
    model = mymodels.Customers
    # values = {  "customer_id": "C004",
    #             "customer_name": "鈴木C子",
    #             "age": 44,
    #             "gender": "男"}
    tmp = crud.myupdate(model, values)
    result = crud.myselect(mymodels.Customers, values_original.get("customer_id"))
    return result, 200


if __name__ == '__main__':
    app.run(debug=True)