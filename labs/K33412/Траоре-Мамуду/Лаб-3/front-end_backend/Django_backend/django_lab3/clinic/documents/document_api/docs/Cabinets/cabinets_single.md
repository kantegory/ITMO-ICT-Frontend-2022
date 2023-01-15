#  Просмотр кабинета


**URL** : `/api/cabinets/<int:id>`

**Method** : `GET`

**Content-Type** : application/json

**Response data** :
```json
{
    "Cabinet": {
        "id": 1,
        "number": 111,
        "phone_number": "89111111111",
        "patients": [
            2
        ],
        "doctors": [
            2,
            2,
            2,
            2
        ]
    },
    "Timetable": {
        "пн": {
            "id": 12,
            "doctor": {
                "id": 2,
                "first_name": "Сергей",
                "middle_name": null,
                "last_name": "Поляков",
                "specialty": "Терапевт"
            },
            "cabinet": "111",
            "week_day": "пн"
        },
        "вт": {
            "id": 4,
            "doctor": {
                "id": 2,
                "first_name": "Сергей",
                "middle_name": null,
                "last_name": "Поляков",
                "specialty": "Терапевт"
            },
            "cabinet": "111",
            "week_day": "вт"
        },
        "ср": {
            "doctor": {
                "first_name": "",
                "middle_name": "",
                "last_name": "",
                "specialty": ""
            },
            "week_day": null
        },
        "чт": {
            "id": 5,
            "doctor": {
                "id": 2,
                "first_name": "Сергей",
                "middle_name": null,
                "last_name": "Поляков",
                "specialty": "Терапевт"
            },
            "cabinet": "111",
            "week_day": "чт"
        },
        "пт": {
            "doctor": {
                "first_name": "",
                "middle_name": "",
                "last_name": "",
                "specialty": ""
            },
            "week_day": null
        },
        "сб": {
            "id": 6,
            "doctor": {
                "id": 2,
                "first_name": "Сергей",
                "middle_name": null,
                "last_name": "Поляков",
                "specialty": "Терапевт"
            },
            "cabinet": "111",
            "week_day": "сб"
        },
        "вс": {
            "doctor": {
                "first_name": "",
                "middle_name": "",
                "last_name": "",
                "specialty": ""
            },
            "week_day": null
        }
    }
}
```
