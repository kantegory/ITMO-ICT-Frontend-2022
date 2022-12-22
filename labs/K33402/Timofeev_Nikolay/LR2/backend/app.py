import random
from fastapi import FastAPI, Header, HTTPException, Depends
from pydantic import BaseModel, parse_obj_as
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# my personal postgres clickhouse mongo redis db O(1) runtime speed 100% no cap
users = defaultdict(lambda: defaultdict(lambda: '***'))
crypto = defaultdict(lambda: defaultdict(lambda: 0))


@app.get('/users')
async def get_all_users() -> dict:
    return users


class NewUser(BaseModel):
    username: str
    email: str | None = None
    password: str
    user_id: int = random.choice(range(1, 100001))



@app.post('/users')
async def create_new_user(user: NewUser) -> dict:
    """Создание нового пользователя."""
    if users.get(user.username):
        raise HTTPException(status_code=500, detail='User already exist')
    users[user.username] = user.dict()  # type: ignore
    return users[user.username]


@app.get('/token')
async def auth(username: str, password: str) -> str:
    """Получение токена авторизации"""
    if user := users.get(username):
        if user['password'] == password:
            return f'{username}+{password}'
    raise HTTPException(status_code=500, detail='User not found!')


async def get_user(token: str = Header()) -> NewUser:
    """Депенденси для авторизации"""
    if user := users.get(token.split('+')[0]):
        return parse_obj_as(NewUser, user)
    raise HTTPException(status_code=500, detail='User not found!')


@app.get('/me')
async def get_my_data(user = Depends(get_user)) -> NewUser:
    """Получение данных пользователя по токену"""
    return user


@app.post('/crypto')
async def buy_crypto(currency: str, amount: float, user: NewUser = Depends(get_user)) -> int:
    """Записать транзакцию о покупке криптовалюты"""
    crypto[user.user_id][currency] += int(amount)
    return crypto[user.user_id][currency]


@app.get('/crypto')
async def get_portfolio(user: NewUser = Depends(get_user)) -> dict:
    return crypto[user.user_id]


@app.on_event('startup')
async def startup():
    users['admin'] = NewUser(user_id=1, username='admin', email='amogus', password='admin').dict() # type: ignore
    crypto[1]['BTC'] = 123
    crypto[1]['ETH'] = 300
    crypto[1]['DOGE'] = 12312
