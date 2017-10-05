import quandl as q
import pandas
import numpy
import json
import datetime

#Assign api key
q.ApiConfig.api_key = "xaFxr9SP6Wd5sKFHdEax"

#Data pull, could make so that it accepts inputs for ticker, dates
data = q.get("EOD/IVV.4", returns="numpy", start_date="1/1/2010", end_date="1/1/2017")

print(data)

#Testing date conversion
time = data[0][0]
time_string = time.strftime('%m/%d/%Y')
time_string

#Testing closing price
price = numpy.array([x[1] for x in data])
price

#Testing calculating mean
numpy.mean(price)

