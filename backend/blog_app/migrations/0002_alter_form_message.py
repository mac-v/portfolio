# Generated by Django 5.1.3 on 2024-12-01 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog_app", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="form",
            name="message",
            field=models.TextField(),
        ),
    ]