# example/views.py
from datetime import datetime

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Form
from .serializer import FormSerializer

def index(request):
    now = datetime.now()
    html = f'''
    <html>
        <body>
            <h1>Hello from Vercel!</h1>
            <p>The current time is {now}.</p>
        </body>
    </html>
    '''
    return HttpResponse(html)


@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello, World!"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_form(request):
    forms = Form.objects.all()
    serializer = FormSerializer(forms, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)