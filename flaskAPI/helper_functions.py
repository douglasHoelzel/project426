import pandas as np
import json

#This script contains helper functions that will be used in the Flask API

#TODO
#Add error checking to make sure the object being passed in is a pandas dataframe
#Continue building out functions to calculate stats for flask
#Potentially refactor to convert to percent once instead of doing it in every method

#Takes in a pandas dateframe of returns, outputs cumulative return as float
def total_return(x):
    #Calculate series of cumulative returns
    cum_returns = x.cumsum()
    
    #Select the last value of the cumulative returns, convert to float 
    value = float(cum_returns.iloc[-1][0])
    return '%.3f' % round(value, 3) #Round to 3 decimal places

#Takes in a pandas dataframe of returns, outputs average daily return  as float
def daily_avg_return(x):
    avg = x.mean()
    return '%.6f' % round(avg, 6) 

#Takes in a pandas dataframe of returns, outputs daily standard deviation a
def daily_std(x):
    std = x.std()
    return '%.4f' % round(std, 4) 





