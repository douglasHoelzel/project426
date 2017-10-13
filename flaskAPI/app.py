from flask import Flask, jsonify
import random
import datetime
import quandl as q 
import numpy as np
import pandas as pd
from flask_cors import CORS
from helper_functions import *

<<<<<<< HEAD
#Key to connect to the Quandl API
q.ApiConfig.api_key = "xaFxr9SP6Wd5sKFHdEax"

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET', 'POST'])
=======
from quotes import funny_quotes
from flask import Flask, render_template

app = Flask(__name__)
>>>>>>> master

@app.route("/<stock>/<start_date>/<end_date>")
def return_data(stock, start_date, end_date):
    
	#Pull data from Quandl
	data = q.get("EOD/{0}.4".format(stock), #Only pull closing price
				start_date="{0}".format(start_date), 
				end_date="{0}".format(end_date))

<<<<<<< HEAD
	#Calculate daily returns from price
	daily_returns = data.pct_change()
=======
# Routes
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/doug")
def doug():
    return 'doug'

@app.route("/api/funny")
def serve_funny_quote():
	quotes = funny_quotes()
	nr_of_quotes = len(quotes)
	selected_quote = quotes[random.randint(0, nr_of_quotes - 1)]
	return jsonify(selected_quote)
>>>>>>> master

	#Assign current date to return
	current_date = datetime.date.today().strftime('%m/%d/%Y')

	#Assign cumulative returns
	cumulative_returns = total_return(daily_returns)

	#Assign daily average returns
	daily_average_return = daily_avg_return(daily_returns)

	#Assign daily standard deviation 
	daily_standard_deviation = daily_std(daily_returns)
	
	return jsonify({"cumulative_returns": cumulative_returns,
					"current_date": current_date,
					"daily_average_return": daily_average_return,
					"daily_standard_deviation": daily_standard_deviation
})

if __name__ == "__main__":
	app.run(debug=True)
