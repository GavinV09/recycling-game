from rest_framework import serializers
from .models import RecyclableItem, Bin, GameSession

class BinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bin
        fields = '__all__'

class RecyclableItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecyclableItem
        fields = '__all__'

class GameSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameSession
        fields = '__all__'
