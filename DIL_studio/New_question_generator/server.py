# py -3 -m pip install Flask  (install libraries in python 3.9 syntax)

from distutils.log import error
import re
from flask import Flask, render_template, jsonify, request,redirect
#from flask_cors import CORS 
from flask import *
import json
from flask_cors import CORS, cross_origin
import mysql.connector
import random
from woocommerce import API
import datetime 
from datetime import date, timedelta
import os


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
server_reponse={
	'ack':"",
	'data':""
}

@app.route("/")
@cross_origin()
def home():
    return render_template("index.html")

def write_into_json_file(data_to_write):
	# Serializing json
	print(type(data_to_write))
	json_object = json.dumps(data_to_write['content'], indent=4)
	#print("------------------",json_object)
	print(type(json_object))
	#x=(datetime.datetime.now())
	#datim=str(x);	datim=datim.replace(" ","_");	datim=datim.replace(":","-");	#print(datim)
	# Writing to sample.json
	with open("question_papers/"+data_to_write['name']+".json", "w") as outfile:
		outfile.write(json_object)

@app.route('/collect_data',methods=['POST'])
def collection():
    response={"ack": ""}
    #try:
    data = request.data  
    print(">>",data)        
    j_req_data = json.loads(data)
    write_into_json_file(j_req_data)
    server_reponse['ack']="successfull"
    return jsonify(server_reponse)
    
@app.route('/listfiles', methods=['POST'])
def listfiles():
	basepath = './question_papers'
	flist=""
	first=0
	for entry in os.scandir(basepath):
		if entry.is_dir():    # skip directories
			continue
		else:
			if first==0:
				first=1
				flist=entry.name
			else:
				flist=flist+","+entry.name
	print("files=", flist) # use entry.path to get the full path of this entry, or use entry.name for the base filename
	if (len(flist)>0):
		server_reponse['ack']="List of files found"; server_reponse['data']=flist
	else:
		server_reponse['ack']="no files found"
	return jsonify(server_reponse)

@app.route('/getfile', methods=['POST'])
def getfile():
	data = request.data    
	print(">>",data)  
	y = json.loads(data)
	print(y)
	print(y['file'])
	import os.path
	file_path='./question_papers/'+y['file']
	file_exists = os.path.exists(file_path)
	if(file_exists==True):
		f = open(file_path)
		file_data = json.load(f)
		server_reponse['ack']="file found successfully"
		server_reponse['data']=file_data
	else:
		server_reponse['ack']="file not found"
		server_reponse['data']="no data"
	
	return jsonify(server_reponse)

@app.route('/qb1', methods=['POST'])
def qb1():
	file_path='question_bank.json'
	file_exists = os.path.exists(file_path)
	if(file_exists==True):
		f = open(file_path)
		file_data = json.load(f)
		server_reponse['ack']="file found successfully"
		server_reponse['data']=file_data
	else:
		server_reponse['ack']="file not found"
		server_reponse['data']="no data"
	
	return jsonify(server_reponse)

@app.route('/writeToQB', methods=['POST'])
def writeToQB():
	file_to_operate="question_bank.json"
	ques = request.data  
	print(">>",ques)  
	json_val= json.loads(ques)
	print(">>>",json_val)
	with open(file_to_operate) as f:
		data = json.load(f)
		json_val['question']['qid']=len(data)+1
		data.append(json_val['question'])
		
		json_object = json.dumps(data, indent=4)
		# Writing to json file
		with open(file_to_operate, "w") as outfile:
			outfile.write(json_object)
			print(data[0])
			server_reponse['ack']="file updated successfully"
	
	return jsonify(server_reponse)




if __name__ == '__main__':
   app.run()