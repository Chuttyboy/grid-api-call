# importing pandas library
import pandas as pd
  
# reading the given csv file 
# and creating dataframe
account = pd.read_csv("output_test.txt",
                      delimiter = '480x640')
  
# store dataframe into csv file
account.to_csv('txttocsv.csv',
               index = None)