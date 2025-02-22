from django.db import models

# Create your models here.
class RecyclableItem(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='recyclable_items/')
    bin_type = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
    class Bin(models.Model):
        name = models.CharField(max_length=100)
        color = models.CharField(max_length=50)

        def __str__(self):
            return self.name