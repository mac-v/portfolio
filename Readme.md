# Vercel deployment backend - https://portfolio-qly6.vercel.app/



## Project Setup: Running with Docker and Docker Compose

## Steps to Run Containers Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Set backend and frontend .env**

    backend .env.local and .env.prod (prod envs are stored also in Vercel)
    
        ```
        SECRET_KEY=your_secret_key
        DATABASE_URL=your_db_url
        DB_USER=your_db_user
        DB_PASSWORD=your_db_password
        DB_NAME=your_db_name
        DB_HOST=your_db_host
        DB_PORT=your_db_port
        DB_ENGINE=your_engine
        DEBUG=youroption
        ```
        
    frontend .env.local and .env.prod (prod envs are stored in Vercel - the same variable is stored on verel site)
    
        ```
        VITE_API_URL=your_url
        ```



3. **Build and start LOCALLY WITH CONTAINERS**
    ```bash
    docker-compose --env-file ./backend/.env.local up --build
    ```
   
4. **Build and start LOCALLY**
    ```bash
    ENV=production python3 manage.py runserver

    ```


5. **Deploy**
   Deploy is on push to master, before pushing migration should be applied/
    ```bash
    ENV=production python3 manage.py makemigrations
    ENV=production python3 manage.py migrate
    git push

    ```