import requests


def buscar_cidade_cep(cep):
    return requests.get(
        f"https://viacep.com.br/ws/{cep}/json/"
    )
