from . import views
from django.conf.urls import url

urlpatterns = [
	url(r'^api/register', views.loginPage, name='temp'),
    url(r'^api/fields', views.getType, name='temp'),
    # url(r'^getUser', views.getUser, name='temp'),
    url(r'^api/profile/(?P<userName>.+)', views.getUserSerializer.as_view(), name='temp'),
    url(r'^api/addPost/', views.addPost, name='temp'),
    url(r'^api/login/', views.checkUser, name='temp'),
    url(r'^api/update/', views.update, name= 'temp'),
    url(r'^api/like', views.like, name= 'temp'),
    url(r'^', views.home.as_view(), name='home'),



    # url(r'^', views.home.as_view(), name='home')
]