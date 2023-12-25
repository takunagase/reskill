from flask import Flask
import requests

app = Flask(__name__)

@app.route("/fetchtest")
def fetchtest():
    response = requests.get("https://jsonplaceholder.typicode.com/users")
    return response.json(), 200

