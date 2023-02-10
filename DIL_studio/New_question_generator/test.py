import json

with open('test1.json') as f:
   data = json.load(f)
   data[0]['extra_val']="123456789"
print(data[0])





# Data to be written
dictionary = {
    "name": "sathiyajith",
    "rollno": 56,
    "cgpa": 8.6,
    "phonenumber": "9976770500"
}
data=[]
data.append(dictionary)
 
# Serializing json
json_object = json.dumps(data, indent=4)
 
# Writing to sample.json
with open("sample.json", "w") as outfile:
    outfile.write(json_object)