#  Просмотр одного врача


**URL** : `/api/doctors/<int:id>/`

**Method** : `GET`

**Content-Type** : application/json

**Response data** :
```json
{
    "Doctor": {
        "id": 1,
        "first_name": "Fanta",
        "middle_name": "",
        "last_name": "Traore",
        "specialty": "medecin",
        "education": "itmo",
        "date_of_birth": "2000-01-01",
        "start_work_date": "2022-12-06",
        "finish_work_date": null,
        "contract_number": 1234
    },
    "Timetable": {
        "пн": {
            "cabinet": {
                "id": 1,
                "number": 122345
            }
        },
        "вт": {
            "cabinet": {
                "number": null
            }
        },
        "ср": {
            "cabinet": {
                "number": null
            }
        },
        "чт": {
            "cabinet": {
                "id": 2,
                "number": 34
            }
        },
        "пт": {
            "cabinet": {
                "number": null
            }
        },
        "сб": {
            "cabinet": {
                "number": null
            }
        },
        "вс": {
            "cabinet": {
                "number": null
            }
        }
    }
}
```
