from rest_framework import serializers

from movement.models import Direction


class DirectionSerializer(serializers.ModelSerializer):
    server_timestamp = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Direction
        fields = '__all__'
