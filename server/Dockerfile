FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
libgl1-mesa-glx \
&& rm -rf /var/lib/apt/lists/*

COPY ..

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]