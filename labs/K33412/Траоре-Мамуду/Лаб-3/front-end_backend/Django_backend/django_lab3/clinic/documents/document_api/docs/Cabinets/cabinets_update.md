#  Изменение приема у врача


**URL** : `/api/appointments/<int:id>/update`

**Method** : `PUT`

**Content-Type** : application/json

**Request data** :
```json
{
    "number": 123,
    "phone_number": "89112223333"
}
```

**Response data** :
```json
{
    "id": 1,
    "number": 123,
    "phone_number": "123",
    "patients": [],
    "doctors": []
}
```
