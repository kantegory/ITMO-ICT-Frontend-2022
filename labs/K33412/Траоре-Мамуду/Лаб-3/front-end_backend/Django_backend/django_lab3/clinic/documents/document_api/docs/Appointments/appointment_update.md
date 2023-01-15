#  Изменение приема у врача


**URL** : `/api/appointments/<int:id>/update`

**Method** : `PUT`

**Content-Type** : application/json

**Request data** :
```json
{
    "finish_time": "2022-04-04T14:00:00Z",
    "start_time": "2022-04-04T15:00:00Z",
    "diagnosis": "Some diagnosis",
    "health_status": "Some health status",
    "recommendations": "Some recommendations",
    "payed": false,
    "form_of_payment": "Наличные",
    "cabinet": 2,
    "patient": 3,
    "type": 2
}
```

**Response data** :
```json
{
    "id": 1,
    "finish_time": "2021-04-04T14:00:00Z",
    "start_time": "2021-04-04T15:00:00Z",
    "diagnosis": "Some diagnosis",
    "health_status": "Some health status",
    "recommendations": "Some recommendations",
    "payed": false,
    "form_of_payment": "Наличные",
    "cabinet": 2,
    "patient": 3,
    "type": 2
}
```
