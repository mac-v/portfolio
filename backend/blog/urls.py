# example/urls.py
from django.urls import path

from blog.views import submit_form, get_posts

from api import api

urlpatterns = [

    path('form', submit_form),
    path('posts', get_posts),

]
