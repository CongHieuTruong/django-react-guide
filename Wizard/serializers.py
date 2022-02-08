from rest_framework import serializers
from .models import Spell

class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        fields =(
            'id',
            'name',
            'description',
        )
        model = Spell