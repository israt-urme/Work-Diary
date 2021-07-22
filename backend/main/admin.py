#need only to access from admin site

from django.contrib import admin
from .models import Place

admin.site.register(Place)
