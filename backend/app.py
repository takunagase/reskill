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
openai.api_key = "●"


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

@app.route("/customers", methods=['GET'])
def read_one_customer():
    model = mymodels.Customers
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.myselect(mymodels.Customers, target_id)
    return result, 200

# /skills エンドポイントへのGETリクエストを処理
@app.route("/skills", methods=['GET'])
def run_gpt():
    try:
        model = mymodels.Customers
        target_id = request.args.get('customer_id') #クエリパラメータ
        values_json = crud.myselect(model, target_id)
        values_list = json.loads(values_json)  # JSON文字列を辞書に変換
        values = values_list[0]  # リストから最初の要素を取得
        customer_id = values["customer_id"]
        career_l1 = values["career_l1"]
        career_s1 = values["career_s1"]
        career_length1 = values["career_length1"]
        career_l2 = values["career_l2"]
        career_s2 = values["career_s2"]
        career_length2 = values["career_length2"]
        qualification_1 = values["qualification_1"]
        qualification_2= values["qualification_2"]
        request_to_gpt = customer_id+"の私の職歴は"+  career_l1 + "・" + career_s1 + "を" +  str(career_length1) + "年と" +  career_l2 + "・" + career_s2 + "を" +  str(career_length2) +"年経験しています。保有資格は"+ qualification_1 + "・" + qualification_2 + "です。まず、【現状のあなたのスキル】と題して現在保有していると思われるスキルを①②③をつけた箇条書きで３つ挙げ、理由も添えて出力してください。次に【お勧めの掛け合わせスキル】と題して、現在の職歴や提示してもらったスキルからは大きく逸脱するが、掛け合わせることで新たな視点やアプローチをもたらす可能性のある異分野のスキルを①②③をつけた箇条書きで３つ理由とともに出力してください。文字数は500文字以内でお願いします。"
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
    try:
        target_id = request.args.get('customer_id')  # クエリパラメータからcustomer_idを取得
        if not target_id:
            return jsonify({"error": "Missing 'customer_id' in query parameters"}), 400

        values = request.get_json()
        if not values:
            return jsonify({"error": "Invalid or missing JSON data"}), 400

        model = mymodels.Customers
        tmp = crud.myupdate(model, target_id, values)

        # 関連する教材を取得
        materials = crud.fetch_materials(values)

        return jsonify({"message": "好みが正常に更新されました", "materials": materials}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route("/learnings", methods=['POST'])
def get_learning_materials():
    try:
        learning_params = request.get_json()
        if not learning_params:
            return jsonify({"error": "無効または不足しているJSONデータ"}), 400

        # 顧客のスキルを更新
        # ここで myupdate を呼ぶ必要がある場合は呼ぶ

        # 学習教材を取得
        materials = crud.myselect_learnings(learning_params)
        response = jsonify(materials)
        #response.headers['Content-Type'] = 'application/json; charset=utf-8'  # 文字セットを設定
        return response, 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)