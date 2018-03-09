from django.db import models

# Create your models here.


class Person(models.Model):
    username=models.CharField(max_length=30)
    email=models.EmailField()
    password=models.CharField(max_length=40)
    usernumber=models.BigIntegerField(max_length=9)