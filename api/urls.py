from django.urls import path
from .views import TodoListView
from django.contrib import admin

urlpatterns = [
    path('todo', TodoListView.as_view()),
    # path('', index, name='index'),
    path('admin/', admin.site.urls),
]
