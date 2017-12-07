from django.db import models


class Direction(models.Model):
    position_x = models.IntegerField()
    position_y = models.IntegerField()
    direction_x = models.CharField(max_length=10)
    direction_y = models.CharField(max_length=10)
    direction_angle = models.CharField(max_length=10)
    server_timestamp = models.DateTimeField(auto_now_add=True)
