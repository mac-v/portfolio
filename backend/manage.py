#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from dotenv import load_dotenv

def main():

    # is_vercel = os.getenv('VERCEL') is not None
    #
    # if not is_vercel:
    #     env_file = '.env.prod' if os.getenv('ENV') == 'production' else '.env.local'
    #     print(f"⚡ Loading env file: {env_file}")
    #     load_dotenv(env_file, override=True)
    #
    # print(f"🔹 ENV={os.getenv('ENV')}")
    # print(f"🔹 DATABASE_URL={os.getenv('DATABASE_URL')}")

    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
