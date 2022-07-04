import requests

url = "https://api-instrumentos.herokuapp.com/api/v1/instrumentos"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
