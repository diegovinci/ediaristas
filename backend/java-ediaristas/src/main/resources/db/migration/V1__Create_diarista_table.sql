CREATE TABLE diarista (
    id BIGINT NOT NULL auto_increment,
    bairro VARCHAR(255) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    codigo_ibge VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    foto VARCHAR(255) NOT NULL,
    logradouro VARCHAR(255) NOT NULL,
    nome_completo VARCHAR(100) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    PRIMARY KEY (id)
)