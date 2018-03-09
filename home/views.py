from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from ..models import Person
import json
from django.http import HttpResponse
from django.http import  JsonResponse
from .models import FIELDS



