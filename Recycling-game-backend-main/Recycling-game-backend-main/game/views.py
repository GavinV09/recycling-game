from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import RecyclableItem, GameSession, Bin, Leaderboard
from .serializers import RecyclableItemSerializer, GameSessionSerializer
import randomy
from game import views

@api_view(['GET'])
def get_recyclable_items(request):
    """Fetch 5 random items for the game round."""
    items = RecyclableItem.objects.order_by('?')[:5]
    serializer = RecyclableItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def check_item(request):
    """Check if the item was placed in the correct bin and update score."""
    item_id = request.data.get('item_id')
    bin_id = request.data.get('bin_id')
    player_id = request.data.get('player_id')
    difficulty = request.data.get('difficulty', 'Medium')

    try:
        item = RecyclableItem.objects.get(id=item_id)
        game_session, _ = GameSession.objects.get_or_create(player_id=player_id, difficulty=difficulty)

        if item.bin.id == bin_id:
            game_session.score += 10
            game_session.speed_level += 1 if game_session.score % 50 == 0 else 0
        else:
            game_session.mistakes += 1

        if game_session.mistakes >= get_mistake_limit(difficulty):
            return Response({"message": "Game Over!", "score": game_session.score}, status=400)

        game_session.save()
        return Response({"message": "Correct!" if item.bin.id == bin_id else "Wrong!", "score": game_session.score, "speed": game_session.speed_level}, status=200)

    except RecyclableItem.DoesNotExist:
        return Response({"error": "Item not found"}, status=404)

def get_mistake_limit(difficulty):
    """Define the maximum mistakes allowed before game over."""
    limits = {'Easy': 5, 'Medium': 3, 'Hard': 2}
    return limits.get(difficulty, 3)

@api_view(['GET'])
def get_game_session(request, player_id):
    """Fetch the current game session for a player."""
    session = GameSession.objects.filter(player_id=player_id).first()
    if session:
        serializer = GameSessionSerializer(session)
        return Response(serializer.data)
    return Response({"error": "Session not found"}, status=404)

@api_view(['POST'])
def update_leaderboard(request):
    """Save the highest score in the leaderboard."""
    player_id = request.data.get('player_id')
    score = request.data.get('score')

    leaderboard_entry, created = Leaderboard.objects.get_or_create(player_id=player_id)
    
    if score > leaderboard_entry.high_score:
        leaderboard_entry.high_score = score
        leaderboard_entry.save()

    return Response({"message": "Leaderboard updated!", "high_score": leaderboard_entry.high_score})

@api_view(['GET'])
def get_leaderboard(request):
    """Get the top 10 players."""
    top_players = Leaderboard.objects.order_by('-high_score')[:10]
    data = [{"player": entry.player_id, "high_score": entry.high_score} for entry in top_players]
    return Response(data)
