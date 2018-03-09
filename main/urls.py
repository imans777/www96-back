from . import views
from django.conf.urls import url

urlpatterns = [
	url(r'^login', views.loginPage, name='temp'),
    url(r'^fields', views.getType, name='temp'),
    # url(r'^getUser', views.getUser, name='temp'),
    url(r'^profile/(?P<userName>.+)', views.getUserSerializer.as_view(), name='temp'),
    url(r'^addPost/', views.addPost, name='temp'),



    # url(r'^', views.home.as_view(), name='home')
]