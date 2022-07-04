import requests
import json

url = "https://api-instrumentos.herokuapp.com/api/v1/instrumentos"

payload = json.dumps({
  "serieProducto": "EC-256",
  "marca": "LTD",
  "codigo": "LTD-4943",
  "nombre": "LTD-EC 256",
  "serie": [
    {
      "fecha": "2020-12-09T03:00:00.000Z",
      "valor": 290890.98
    }
  ],
  "stock": 10
})
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)