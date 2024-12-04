# Project Setup: Running with Docker and Docker Compose

## Steps to Run Containers Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Set .env in root and in blog_app**
    ```
    root

    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    DB_HOST=db
    DB_PORT=5432
    SECRET_KEY=your_secret_key
    DEBUG=False

    blog_app
    
    DJANGO_SUPERUSER_USERNAME=your_username
    DJANGO_SUPERUSER_EMAIL=your_email
    DJANGO_SUPERUSER_PASSWORD=your_password
    ```

    3. **Build and start**
    ```bash
    docker-compose up --build
    ```