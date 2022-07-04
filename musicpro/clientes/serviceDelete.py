import requests

url = "https://api-instrumentos.herokuapp.com/api/v1/instrumentos/62b628fd2f9c8a390aa86278"

payload = ""
headers = {}

response = requests.request("DELETE", url, headers=headers, data=payload)

print(response.text)
