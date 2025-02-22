from django.db import models

# Create your models here.
from django.db import models

class Bin(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class RecyclableItem(models.Model):
    name = models.CharField(max_length=100, unique=True)
    bin = models.ForeignKey(Bin, on_delete=models.CASCADE, related_name="items")

    def __str__(self):
        return self.name

class GameSession(models.Model):
    DIFFICULTY_LEVELS = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    ]

    player_id = models.CharField(max_length=255)
    score = models.IntegerField(default=0)
    speed_level = models.IntegerField(default=1)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_LEVELS, default='Medium')
    mistakes = models.IntegerField(default=0)  # Track wrong attempts
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Session {self.id} - Score: {self.score}"

class Leaderboard(models.Model):
    player_id = models.CharField(max_length=255)
    high_score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.player_id} - {self.high_score}"
