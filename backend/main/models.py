from django.db import models

from django.contrib.auth.models import User

class Place(models.Model):
    name = models.CharField(max_length=255, unique=True)
    country = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    visited = models.BooleanField(default=False)

    def __str__(self):
        return self.name + '-' + self.country
