import pandas as pd
import _json

cam_details =  pd.read_csv('outputs.txt', sep=r'(?:,\s*|^)(?:\d+: \d+x\d+|Done[^)]+\)\s*)',
                 header=None, engine='python', names=(None, 'cam1', 'cam2', 'date')).iloc[:, 1:]

# Splits the date part and the status part into two columns (your status is being dragged into the date column)
cam_details[['date', 'status']] = cam_details['date'].map(lambda x: x.split('status')).tolist()

# Clean up the status column which still has the colons and extra whitespaces
cam_details['status'] = cam_details['status'].map(lambda x: x.replace(':', '').strip())

cam_details.to_json('file1.json', orient = "records", date_format = "epoch", double_precision = 10, 
                        force_ascii = True, date_unit = "ms", default_handler = None)

