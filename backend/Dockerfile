FROM python:3.12

ENV PYTHONPATH=/app

WORKDIR /app

RUN apt-get update && apt-get install -y libpq-dev

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PYTHONUNBUFFERED 1

EXPOSE 8000

CMD bash -c "pip install -r requirements.txt && python manage.py makemigrations && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py runserver 0.0.0.0:8000"