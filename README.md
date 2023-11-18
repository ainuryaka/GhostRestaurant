сначала в консоль

```sh
pip install -r requirements.txt
```

потом открываешь pgAdmin и создаешь там базу данных с любым названием, например, "restaraunt".
создаешь файлик .env в корне папки и пишешь туда

```
POSTGRESQL_URL=postgresql+psycopg2://postgres:postgres@localhost:5432/restaraunt
```

чтобы запустить локально в консоль

```sh
uvicorn main:app --reload
```

у тебя захостится сервер на http://localhost:8000
можешь открыть документацию на http://localhost:8000/docs
