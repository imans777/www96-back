from . import views
from django.conf.urls import url

urlpatterns = [
	url(r'^api/test', views.temp.as_views(), name='temp')
    url(r'^', views.home.as_view(), name='home')
]