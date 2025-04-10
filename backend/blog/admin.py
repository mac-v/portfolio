from django.contrib import admin

# Register your models here.
from .models import Form, Post, Tag

admin.site.register(Form)
admin.site.register(Post)
admin.site.register(Tag)