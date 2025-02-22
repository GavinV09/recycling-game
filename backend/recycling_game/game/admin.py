from django.contrib import admin
from .models import RecyclableItem, Bin

# Register your models here.
admin.site.register(RecyclableItem)
admin.site.register(Bin)