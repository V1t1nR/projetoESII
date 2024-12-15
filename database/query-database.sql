-- Tabela de Usuários
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    status_confirmado BOOLEAN DEFAULT FALSE
);

-- Tabela de Tipos de Eventos
CREATE TABLE tipoEventos (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

-- Tabela de Responsáveis
CREATE TABLE responsaveis (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Tabela de Eventos
CREATE TABLE eventos (
    id SERIAL PRIMARY KEY,
    id_tipo_evento INTEGER NOT NULL,
    nome VARCHAR(255) NOT NULL,
    local VARCHAR(255),
    data_inicio DATE NOT NULL,
    data_termino DATE NOT NULL,
    vagas_disponiveis INTEGER NOT NULL,
    valor_inscricao NUMERIC(10, 2),
    FOREIGN KEY (id_tipo_evento) REFERENCES tipoEventos (id)
);

-- Tabela de Tipos de Ações
CREATE TABLE tipoAcoes (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

-- Tabela de Ações
CREATE TABLE acoes (
    id SERIAL PRIMARY KEY,
    id_evento INTEGER NOT NULL,
    id_tipo_acao INTEGER NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    data_inicio DATE NOT NULL,
    data_termino DATE NOT NULL,
    valor NUMERIC(10, 2),
    vagas_disponiveis INTEGER NOT NULL,
    id_responsavel INTEGER,
    FOREIGN KEY (id_evento) REFERENCES eventos (id),
    FOREIGN KEY (id_tipo_acao) REFERENCES tipoAcoes (id),
    FOREIGN KEY (id_responsavel) REFERENCES responsaveis (id)
);

-- Tabela de Emails dos Participantes
CREATE TABLE emailParticipantes (
    email VARCHAR(255) PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

-- Tabela de Emails dos Responsáveis
CREATE TABLE emailResponsaveis (
    email VARCHAR(255) PRIMARY KEY,
    id_responsavel INTEGER NOT NULL,
    FOREIGN KEY (id_responsavel) REFERENCES responsaveis (id)
);

-- Tabela de Telefones dos Responsáveis
CREATE TABLE telefoneResponsaveis (
    telefone VARCHAR(20) PRIMARY KEY,
    id_responsavel INTEGER NOT NULL,
    FOREIGN KEY (id_responsavel) REFERENCES responsaveis (id)
);

-- Tabela de Inscrições
CREATE TABLE inscricoes (
    id SERIAL PRIMARY KEY,
    id_usuario INTEGER NOT NULL,
    id_evento INTEGER,
    id_acao INTEGER,
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    FOREIGN KEY (id_evento) REFERENCES eventos (id),
    FOREIGN KEY (id_acao) REFERENCES acoes (id)
);
