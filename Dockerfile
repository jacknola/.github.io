FROM python:3.11-slim

WORKDIR /app

# Install system dependencies required by scientific Python stack
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source
COPY . .

EXPOSE 3000

CMD ["python", "server.py"]
