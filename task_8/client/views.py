from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class IndexView(TemplateView):
    # template_name = 'react_back/index.html'
    template_name = 'client/index.html'
