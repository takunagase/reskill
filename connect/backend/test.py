from flask import Flask, jsonify
import openai

app = Flask(__name__)

# アクセスの為のキーをopenai.api_keyに代入し、設定
openai.api_key = "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"

@app.route('/test')
def run_gpt():
    # リクエスト内容を決める
    request_to_gpt = "アニメ・ワンピースの魅力を一言で述べてください。50文字以内です。"
    
    # 決めた内容を元にopenai.ChatCompletion.createでchatGPTにリクエスト。オプションとしてmodelにAIモデル、messagesに内容を指定
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": request_to_gpt },
        ],
    )

    # 返って来たレスポンスの内容はresponse.choices[0]["message"]["content"].strip()に格納されているので、これをoutput_contentに代入
    output_content = response.choices[0]["message"]["content"].strip()
    return output_content # 返って来たレスポンスの内容を返す

if __name__ == '__main__':
    # 代入された文字を表示
    app.run(debug=True)




#@app.route("/skill")
# アクセスの為のキーをopenai.api_keyに代入し、設定
#openai.api_key = "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"