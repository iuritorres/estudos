# imports
from django.urls import path, include
from . import views
from django.contrib import admin

# urls
urlpatterns = [
    path('polls', include('polls.urls')),
    path('', views.index, name='index')
]