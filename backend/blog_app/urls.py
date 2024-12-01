from django.urls import path

from .views import submit_form

urlpatterns = [
    path('form', submit_form, name="submit-form"),
]
