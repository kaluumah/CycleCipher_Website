from django.urls import path
from .views import WaitlistCreateView
from django.http import JsonResponse

def home_view(request):
    return JsonResponse({"message": "Welcome to CycleCipher API!"})

urlpatterns = [
    path('waitlist/', WaitlistCreateView.as_view(), name='waitlist'),
]