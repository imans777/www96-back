from . import views
from django.conf.urls import url

urlpatterns = [
    url(r'^getUser', views.getUser, name='temp'),

    # url(r'^', views.home.as_view(), name='home')
]