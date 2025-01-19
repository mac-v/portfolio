
import os
from dotenv import load_dotenv
import django

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../blog_app/.env'))

username = os.getenv('DJANGO_SUPERUSER_USERNAME')
email = os.getenv('DJANGO_SUPERUSER_EMAIL')
password = os.getenv('DJANGO_SUPERUSER_PASSWORD')



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blog_project.settings')

django.setup()

from django.contrib.auth.models import User


if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print(f"Superuser '{username}' created.")
else:
    print(f"Superuser '{username}' already exists.")
