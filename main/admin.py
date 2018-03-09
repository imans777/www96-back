from django.contrib import admin
from .models import Person, post, report
# Register your models here.

# class PersonAdminPage(admin.ModelAdmin)



admin.site.register(Person)
admin.site.register(post)
admin.site.register(report)