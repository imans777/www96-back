from django.db import models

# Create your models here.
FIELDS = (
    # ('dataBase value, Human readable value)
    ('EC','EC'),
    ('CE', 'CE'),
    ('EE', 'EE'),
)



class Person(models.Model):
    username=models.CharField(max_length=30, unique=True, blank=False)
    email=models.EmailField(blank=False)
    password=models.CharField(max_length=40, blank=False)
    usernumber=models.BigIntegerField(max_length=9, blank=False)
    field = models.CharField(max_length= 10, choices=FIELDS, blank=False)
    avatar = models.ImageField(upload_to= 'image', blank=True)





class post(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField()
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    PersonId = models.ForeignKey(Person, on_delete=models.CASCADE, default=None, blank=True)