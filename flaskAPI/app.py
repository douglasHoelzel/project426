from flask import Flask, jsonify
import random
import quandl as q 
import numpy as np
from flask_cors import CORS

from quotes import funny_quotes

q.ApiConfig.api_key = "xaFxr9SP6Wd5sKFHdEax"

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET', 'POST'])


@app.route("/api/funny")
def serve_funny_quote():
	quotes = funny_quotes()
	nr_of_quotes = len(quotes)
	selected_quote = quotes[random.randint(0, nr_of_quotes - 1)]
	return jsonify(selected_quote)

@app.route("/api/<stock>")
def display_avg_price(stock):
    #Pull data from 
	data = q.get("EOD/{0}.4".format(stock), returns="numpy", start_date="1/1/2010", end_date="1/1/2017")
	
	data_values = np.array([x[1] for x in data])
	data = data_values.mean()
	return jsonify({"data": data})

if __name__ == "__main__":
	app.run(debug=True)
