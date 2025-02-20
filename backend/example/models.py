from django.db import models

class Form(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
    test = models.TextField(default='test')

    def __str__(self):
        return self.message

