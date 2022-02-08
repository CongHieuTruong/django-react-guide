from django.urls import path

from . import views

urlpatterns = [
    path('view/', views.AddSpell.as_view()),
    path('create/', views.GetSpell.as_view()),
]