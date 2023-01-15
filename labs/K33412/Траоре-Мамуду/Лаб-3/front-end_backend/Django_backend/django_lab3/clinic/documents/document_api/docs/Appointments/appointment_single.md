#  Просмотр приема у врача


**URL** : `/api/appointments/<int:id>`

**Method** : `GET`

**Content-Type** : application/json

**Response data** :
```json
{
    "id": 1,
    "doctor": {
        "first_name": "",
        "middle_name": "",
        "last_name": "",
        "specialty": ""
    },
    "cabinet": {
        "id": 5,
        "number": 1
    },
    "patient": 3,
    "finish_time": "2022-12-11T13:30:30Z",
    "start_time": "2022-12-11T12:39:26Z",
    "type": "Консультация - 1500p",
    "diagnosis": null,
    "health_status": "",
    "recommendations": "",
    "payed": false,
    "form_of_payment": "Банковская карта"
}
```
