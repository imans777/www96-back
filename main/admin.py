from django.contrib import admin
from .models import Person
# Register your models here.

# class PersonAdminPage(admin.ModelAdmin)



admin.site.register(Person)