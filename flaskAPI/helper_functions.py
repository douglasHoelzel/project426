import pandas as pd
import json
import numpy as np

#This script contains helper functions that will be used in the Flask API

#TODO
#Continue building out functions to calculate stats for flask
#Potentially standardize the decimal point rounding

#Takes in a pandas dateframe of returns, outputs cumulative return as float
def total_return(daily_ret):
    #Type checking
    if isinstance(daily_ret, pd.DataFrame):
        #Calculate series of cumulative returns
        cum_returns = daily_ret.cumsum()
    
    #Select the last value of the cumulative returns, convert to float 
        value = float(cum_returns.iloc[-1][0])
        return '%.5f' % round(value, 5) #Round to 3 decimal places
    else:
        raise ValueError('Expected a dataframe for total return')

#Takes in a pandas dataframe of returns, outputs average daily return  as float
def daily_avg_return(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        avg = daily_ret.mean()
        return '%.5f' % round(avg, 5) 
    else:
        raise ValueError('Expected a dataframe for daily average return')

#Takes in a pandas dataframe of returns, outputs daily standard deviation 
def daily_std(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        std = daily_ret.std()
        return '%.5f' % round(std, 5) 
    else:
        raise ValueError('Expected a dataframe for daily standard deviation')

#Takes in a pandas dataframe, returns skewness of daily returns
def daily_skew(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        return '%.5f' % round(daily_ret.skew(),5)
    else:
        raise ValueError('Expected a dataframe for daily skew')

#Takes in a pandas dataframe, returns the kurtosis of daily returns
def daily_kurt(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        return '%.5f' % round(daily_ret.kurtosis(),5)
    else:
        raise ValueError('Expected a dataframe for daily kurtosis')  

def min_ret(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        return '%.5f' % round(daily_ret.min(),5)
    else:
        raise ValueError('Expected a dataframe for daily minimum')  

def max_ret(daily_ret):
    if isinstance(daily_ret, pd.DataFrame):
        return '%.5f' % round(daily_ret.max(),5)
    else:
        raise ValueError('Expected a dataframe for daily maximum')  

#This can handle monthly, weekly, and daily returns
def make_histogram(ret):
    if isinstance(ret, pd.DataFrame):
        #Use Numpy histogram functionality
        count, division = np.histogram(ret)

        #Convert to python native datatypes
        native_count = [np.asscalar(c) for c in count]
        str_division = [str(d) for d in division]

        #Form bin/count pairs 
        histogram_dict = dict(zip(str_division,native_count))

        return json.dumps(histogram_dict)
    else:
        raise ValueError('Expected a dataframe for histogram calculations')  

