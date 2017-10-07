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
    
	#Pull data from Quandl
	data = q.get("EOD/{0}.4".format(stock), #Only pull closing price
				start_date="{0}".format(start_date), 
				end_date="{0}".format(end_date))

	#Assign current date to return
	current_date = datetime.date.today().strftime('%m/%d/%Y')

	#Assign cumulative returns
	cumulative_returns = total_return(data)
	
	return jsonify({"cumulative_returns": cumulative_returns,
					"current_date": current_date
})

if __name__ == "__main__":
	app.run(debug=True)
