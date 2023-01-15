#  Создание нового приема у врача


**URL** : `/api/appointments/create`

**Method** : `POST`

**Content-Type** : application/json

**Request data** :
```json
{
    "finish_time": "2021-04-04T15:00:00Z",
    "start_time": "2021-04-04T16:00:00Z",
    "diagnosis": "Some diagnosis",
    "health_status": "Some health status",
    "recommendations": "Some recommendations",
    "payed": false,
    "form_of_payment": "Банковская карта",
    "cabinet": 1,
    "patient": 2,
    "type": 1
}
```

**Response data** :
```json
{
    "id": 2,
    "finish_time": "2021-04-04T15:00:00Z",
    "start_time": "2021-04-04T16:00:00Z",
    "diagnosis": "Some diagnosis",
    "health_status": "Some health status",
    "recommendations": "Some recommendations",
    "payed": false,
    "form_of_payment": "Банковская карта",
    "cabinet": 1,
    "patient": 2,
    "type": 1
}
```
