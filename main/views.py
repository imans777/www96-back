from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render

# Create your views here.
class home(APIView):
    def get(self, request):
        return render(request, 'index.html')

class temp(APIView):
    def get(self, request):
    	return Response({"data": "hi"})
        # return Response()

