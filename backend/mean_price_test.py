import quandl as q
import pandas
import numpy as np
import json
import datetime
import json

def mean_price():

    #Assign api key
    q.ApiConfig.api_key = "xaFxr9SP6Wd5sKFHdEax"

    #Data pull, could make so that it accepts inputs for ticker, dates
    data = q.get("EOD/IVV.4", returns="numpy", start_date="1/1/2010", end_date="1/1/2017")

    closing_price = np.array([x[1] for x in data])

    closing_price_avg = {"mean_closing_price": closing_price.mean()}

    
    print(json.dumps(closing_price_avg))
    return json.dumps(closing_price_avg)

mean_price()