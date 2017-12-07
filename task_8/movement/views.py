from rest_framework import viewsets
from rest_framework import mixins

from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny

from movement import models
from movement.serializers import DirectionSerializer


class DirectionView(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = models.Direction.objects.all()
    serializer_class = DirectionSerializer
    authentication_classes = ()
    permission_classes = (AllowAny,)
