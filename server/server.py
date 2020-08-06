import gspread
from flask import Flask, jsonify

app = Flask(__name__)

gc = gspread.service_account(filename='service_account.json')
sh = gc.open_by_key("")
worksheet = sh.sheet1
list_of_lists = worksheet.get_all_records()

@app.after_request
def apply_caching(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "*"
    return response


@app.route('/')
def home():
    return jsonify(list_of_lists)


if __name__ == "__main__":
   app.run()