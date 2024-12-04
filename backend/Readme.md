# Project Setup: Running with Docker and Docker Compose

## Prerequisites

Make sure you have the following installed on your local machine:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Steps to Run Containers Locally

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name

2. **Set .env**
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=db
DB_PORT=5432
SECRET_KEY=your_secret_key
DEBUG=False

3. **Build and start**
docker-compose up --build