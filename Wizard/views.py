from django.shortcuts import render
from .models import Spell
from .serializers import SpellSerializer
from rest_framework.generics import ListAPIView,CreateAPIView
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os

# Create your views here.

class AddSpell(ListAPIView):
    queryset=Spell.objects.all()
    serializer_class = SpellSerializer

class GetSpell(CreateAPIView):
    queryset=Spell.objects.all()
    serializer_class = SpellSerializer

class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()