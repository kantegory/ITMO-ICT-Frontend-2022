#  Создание нового кабинета


**URL** : `/api/appointments/create`

**Method** : `POST`

**Content-Type** : application/json

**Request data** :
```json
{
    "number": 444,
    "phone_number": "89444444444"
}
```

**Response data** :
```json
{
    "id": 4,
    "number": 444,
    "phone_number": "89444444444",
    "patients": [],
    "doctors": []
}
```
