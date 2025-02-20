from django.urls import path

from .views import submit_form
from .views import hello_world
urlpatterns = [
    path('form', submit_form, name="submit-form"),
    path('hello',hello_world, name="hello-world"),
]
