import pandas as np
import json

#This script contains helper functions that will be used in the Flask API

#TODO
#Add error checking to make sure the object being passed in is a pandas dataframe
#Continue building out functions to calculate stats for flask

#Takes in a pandas dateframe of price, outputs cumulative return
def total_return(x):
    #Convert to pcts
    pct_returns = x.pct_change()

    #Calculate series of cumulative returns
    cum_returns = pct_returns.cumsum()

    #Select the last value of the cumulative returns, convert to float 
    value = float(cum_returns.iloc[-1][0])
    
    return '%.3f' % round(value, 3)

def daily_avg_return(x)

