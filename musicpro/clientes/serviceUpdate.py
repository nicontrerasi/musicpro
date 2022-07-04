import requests
import json

url = "https://api-instrumentos.herokuapp.com/api/v1/instrumentos/62b6296053824eaf91ab04dd"

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

response = requests.request("PATCH", url, headers=headers, data=payload)

print(response.text)
