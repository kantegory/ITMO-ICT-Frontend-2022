# Generated by Django 4.1.5 on 2023-01-13 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="event",
            name="description",
            field=models.CharField(blank=True, max_length=100),
        ),
    ]