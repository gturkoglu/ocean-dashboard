import gspread
from flask import Flask

app = Flask(__name__)

gc = gspread.service_account(filename='service_account.json')
sh = gc.open_by_key("")
worksheet = sh.sheet1
app_ids = worksheet.col_values(1)
app_names = worksheet.col_values(2)
app_pages = worksheet.col_values(3)
print(app_ids, app_names, app_pages)

x = [item for item in worksheet.col_values(1)]
for item in x:
    if item == 'App Id':
        pass
    else:
        print(item)

@app.route('/')
def home():
    return 'a'


if __name__ == "__main__":
   app.run()