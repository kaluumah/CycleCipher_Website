from rest_framework.generics import CreateAPIView
from .models import Waitlist
from .serializers import WaitlistSerializer

# Create your views here.
class WaitlistCreateView(CreateAPIView):
    queryset = Waitlist.objects.all()
    serializer_class = WaitlistSerializer
