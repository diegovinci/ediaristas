from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .services.cidades_atendimento_service import listar_diaristas_cidade
from .serializers import diaristas_cidade_serializer
from .paginations import diaristas_cidade_pagination


# Create your views here.

class DiaristasCidadeList(APIView, diaristas_cidade_pagination.DiaristasCidadePagination):
    def get(self, request):
        cep = self.request.query_params.get('cep', None)
        diaristas = listar_diaristas_cidade(cep)
        resultado = self.paginate_queryset(diaristas, request)
        serializer = diaristas_cidade_serializer.DiaristaCidadeSerializer(resultado, many=True,
                                                                          context={'request': request})
        return self.get_paginated_response(serializer.data)
