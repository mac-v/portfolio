# example/urls.py
from django.urls import path

from example.views import index
from example.views import hello_world
from example.views import get_form

urlpatterns = [
    path('', index),
    path('hello', hello_world),
    path('forms', get_form),
]