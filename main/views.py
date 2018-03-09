from rest_framework import generics, views
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from .serializers import PersonSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Person, post
import json
from django.http import HttpResponse
from django.http import  JsonResponse
from .models import FIELDS

# Create your views here.

class home(APIView):
    def get(self, request):
        return render(request, 'index.html')


        
@csrf_exempt
def loginPage(request):
    if request.method == 'GET':
        pass
        return HttpResponse('Fuck you')



    if request.method == 'POST':
        # return  HttpResponse(request.body)
        try:
            print(type(request.body.decode('utf-8')), "Fuck this shittttttttttttttttttttttttttttttttttttttttttttttttttt")

            data = (json.loads(request.body.decode('utf-8')))
            username = data['username']
            password = data['password']
            field = data['field']
            print(field, "Fuck yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
            email = data['email']
            stdNumber = data['student_id']
            pers = "fuck"

            if stdNumber>1000000000 or stdNumber<100000000 or type(stdNumber)!=int:
                raise (Exception("the number is invalid"))
            if not (field in [x for x, y in FIELDS]):
                raise (Exception("the field is invalid"))
            pers = Person(username=username, password=password, field=field, email=email,usernumber=stdNumber )
            print(pers.field, "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
            pers.save()
        except Exception as e:
            return HttpResponse("error:", e)
        else:
            return HttpResponse("user Added")


def getType(request):
    print(FIELDS, "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    # somedict = {[{"item": x[0], "name": x[1]}] for x in FIELDS}
    somedict = {"fields": [(y) for x, y in FIELDS]}
    print(somedict, "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    return HttpResponse(json.dumps(somedict))


class getUserSerializer(generics.ListAPIView):
    # permission_classes = (AllowAny,)
    serializer_class = PersonSerializer

    def get_queryset(self):
        userName= self.kwargs['userName']
        print(userName, "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        # user = Person.objects.get(userName=userName)
        queryset = Person.objects.filter(username = userName)
        return queryset



# def getUser(request, userName):
#     user = Person.objects.get(userName=userName)
#     return HttpResponse({""})

@csrf_exempt
def addPost(request):
    if request.method == 'POST':
        # return  HttpResponse(request.body)
        try:
            print(type(request.body.decode('utf-8')), "Fuck this shittttttttttttttttttttttttttttttttttttttttttttttttttt")

            data = (json.loads(request.body.decode('utf-8')))
            text = data['text']
            print(text, "ffffffffffffffffffffffffffffffffffffffffff")
            npost = post(text=text, PersonId= Person.objects.All()[0], likes= 0, dislikes=0, comments=0)
            npost.save()    
        except Exception as e:
            return HttpResponse( e)
        else:
            return HttpResponse("user Added")
    return HttpResponse("invalid request")

@csrf_exempt
def checkUser(request):
    if request.method == 'POST':
        try:
            print(type(request.body.decode('utf-8')), "Fuck this shittttttttttttttttttttttttttttttttttttttttttttttttttt")

            data = (json.loads(request.body.decode('utf-8')))
            username = data['username']
            password = data['password']
            pers = Person.objects.get(username=username, password=password)
            if pers is None:
                raise Exception("invalid user")
            print(pers.field, "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
            pers.save()
        except Exception as e:
            return HttpResponse( e, status=500)
        else:
            return HttpResponse("user was valid", status=200)

def update(request):
    if request.method == 'POST':
        try:
            print(type(request.body.decode('utf-8')), "Fuck this shittttttttttttttttttttttttttttttttttttttttttttttttttt")

            data = (json.loads(request.body.decode('utf-8')))
            username = data['username']
            password = data['password']
            field = data['field']
            print(field, "Fuck yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
            email = data['email']
            stdNumber = data['student_id']
            pers = Person.objects.get(email = email)
            if pers is None:
                raise Exception("invalid user")
            pers.username = username
            pers.password = password
            pers.field = field
            pers.stdNumber = stdNumber
            pers.save()
            # print(pers.field, "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
        except Exception as e:
            return HttpResponse( e, status=500)
        else:
            return HttpResponse("user was valid", status=200)