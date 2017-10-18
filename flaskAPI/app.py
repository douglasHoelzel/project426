from flask import Flask, jsonify
import random
import datetime
import quandl as q 
import numpy as np
import pandas as pd
from flask_cors import CORS
from helper_functions import *

#Key to connect to the Quandl API
q.ApiConfig.api_key = "xaFxr9SP6Wd5sKFHdEax"

app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET', 'POST'])

@app.route("/<stock>/<start_date>/<end_date>")
def return_data(stock, start_date, end_date):
    
	#Pull daily data from Quandl
	daily_data = q.get("EOD/{0}.4".format(stock), #Only pull closing price
				start_date="{0}".format(start_date), 
				end_date="{0}".format(end_date))

	#Pull weekly data from Quandl
	weekly_data = q.get("EOD/{0}.4".format(stock), #Only pull closing price
				collapse="weekly",
				start_date="{0}".format(start_date), 
				end_date="{0}".format(end_date))

	#Pull monthly data from Quandl
	monthly_data = q.get("EOD/{0}.4".format(stock), #Only pull closing price
				collapse="monthly",
				start_date="{0}".format(start_date), 
				end_date="{0}".format(end_date))

	#Calculate returns for all frequencies
	daily_returns = daily_data.pct_change().dropna()
	weekly_returns = weekly_data.pct_change().dropna()
	monthly_returns = monthly_data.pct_change().dropna()

	#Assign current date to return
	current_date = datetime.date.today().strftime('%m/%d/%Y')

	#Assign cumulative returns
	cumulative_returns = total_return(daily_returns)

	#Assign daily average returns
	daily_average_return = daily_avg_return(daily_returns)

	#Assign daily standard deviation 
	daily_standard_deviation = daily_std(daily_returns)

	#Assign skewness of daily returns
	daily_skewness = daily_skew(daily_returns)

	#Assign kurtosis of daily returns
	daily_kurtosis = daily_kurt(daily_returns)

	#Assign minimum daily return
	minimum_ret = min_ret(daily_returns)
	
	#Assign maximum daily return
	maximum_ret = max_ret(daily_returns)

	#Assign quartile 5%
	quartile_05 = calculate_quartile(daily_returns,.05)

	#Assign quartile 25%
	quartile_25 = calculate_quartile(daily_returns,.25)

	#Assign quartile 50%
	quartile_50 = calculate_quartile(daily_returns,.50)

	#Assign quartile 75%
	quartile_75 = calculate_quartile(daily_returns,.75)

	#Assign quartile 95%
	quartile_95 = calculate_quartile(daily_returns,.95)

	#Create a data set to build a histogram of daily returns
	daily_histogram_data = make_histogram(daily_returns)
	
	#Create a data set to build a histogram of weekly returns
	weekly_histogram_data = make_histogram(weekly_returns)

	#Create a data set to build a histogram of monthly returns
	monthly_histogram_data = make_histogram(monthly_returns)

	return jsonify({"cumulative_returns": cumulative_returns,
					"current_date": current_date,
					"daily_average_return": daily_average_return,
					"daily_standard_deviation": daily_standard_deviation,
					"daily_skewness": daily_skewness,
					"daily_kurtosis": daily_kurtosis,
					"minimum_return": minimum_ret,
					"maximum_return": maximum_ret,
					"daily_histogram_data": daily_histogram_data,
					"weekly_histogram_data": weekly_histogram_data,
					"monthly_histogram_data": monthly_histogram_data,
					"quartile_05": quartile_05,
					"quartile_25": quartile_25,
					"quartile_50": quartile_50,
					"quartile_75": quartile_75,
					"quartile_95": quartile_95
					
})

if __name__ == "__main__":
	app.run(debug=True)
