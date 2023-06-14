CREATE TABLE public.alimento (
    idalimento integer NOT NULL,
    nomealimento text NOT NULL,
    unidade_medida text NOT NULL
);

CREATE TABLE public.cardapiodiario (
    idcardapiodiario integer NOT NULL,
    data date NOT NULL,
    turno character(1) NOT NULL,
    merendeira integer NOT NULL,
    qtdereceitas integer DEFAULT 0,
    CONSTRAINT cardapiodiarioc1 CHECK ((turno = ANY (ARRAY['M'::bpchar, 'T'::bpchar, 'N'::bpchar])))
);

CREATE TABLE public.cardapioreceita (
    cardapio integer NOT NULL,
    receita integer NOT NULL,
    quantidade integer NOT NULL
);

CREATE TABLE public.estoquediario (
    idestoque integer NOT NULL,
    data date NOT NULL,
    qtdeitens integer,
    merendeira integer NOT NULL,
    entregador text NOT NULL,
    guiaentrega integer NOT NULL
);

CREATE TABLE public.itemestoque (
    iditemestoque integer NOT NULL,
    alimento integer,
    estoque integer,
    saldoinicial real,
    entrada real NOT NULL,
    saida real NOT NULL,
    saldofinal real,
    CONSTRAINT itemestoquec2 CHECK ((saida <= (saldoinicial + entrada)))
);

CREATE TABLE public.merendeira (
    codigomerendeira integer NOT NULL,
    nomemerendeira text NOT NULL
);

CREATE TABLE public.receita (
    idreceita integer NOT NULL,
    nomereceita text NOT NULL,
    nutricionista text NOT NULL,
    nroingredientes integer DEFAULT 0
);

CREATE TABLE public.receitaalimento (
    receita integer NOT NULL,
    alimento integer NOT NULL,
    quantidade integer DEFAULT 0
);

INSERT INTO public.alimento VALUES (100, 'Alho ', 'KG');
INSERT INTO public.alimento VALUES (200, 'Leite', 'L');
INSERT INTO public.alimento VALUES (300, 'Morango', 'KG');
INSERT INTO public.alimento VALUES (400, 'Ab¢bora', 'KG');
INSERT INTO public.alimento VALUES (500, 'Farinha Trigo', 'KG');
INSERT INTO public.alimento VALUES (600, 'Fub ', 'KG');
INSERT INTO public.alimento VALUES (700, 'Repolho', 'KG');
INSERT INTO public.alimento VALUES (800, 'Amido de Milho', 'KG');
INSERT INTO public.alimento VALUES (900, 'Azeite de Oliva', 'L');
INSERT INTO public.alimento VALUES (1000, 'àleo de Soja', 'L');
INSERT INTO public.alimento VALUES (1100, 'Leite de Soja', 'L');
INSERT INTO public.alimento VALUES (1200, 'FeijÆo', 'KG');
INSERT INTO public.alimento VALUES (1300, 'MacarrÆo ', 'KG');
INSERT INTO public.alimento VALUES (1400, 'Carne bovina', 'KG');
INSERT INTO public.alimento VALUES (1500, 'Carne frango', 'KG');
INSERT INTO public.alimento VALUES (1600, 'Carne su¡na', 'KG');
INSERT INTO public.alimento VALUES (1700, 'Cacau p¢', 'KG');
INSERT INTO public.alimento VALUES (1800, 'µgua', 'L');
INSERT INTO public.alimento VALUES (1900, 'Sal', 'KG');
INSERT INTO public.alimento VALUES (2000, 'A‡£car', 'KG');
INSERT INTO public.alimento VALUES (2100, 'Leite zero Lactose', 'L');
INSERT INTO public.alimento VALUES (2200, 'Cenoura', 'KG');
INSERT INTO public.alimento VALUES (2300, 'Banana', 'UN');
INSERT INTO public.alimento VALUES (2400, 'Cebola', 'KG');
INSERT INTO public.alimento VALUES (2500, 'Tomate', 'KG');
INSERT INTO public.alimento VALUES (2600, 'Alface', 'UN');
INSERT INTO public.alimento VALUES (2700, 'Couve', 'UN');

INSERT INTO public.cardapiodiario VALUES (110, '2023-02-01', 'M', 50050, 0);
INSERT INTO public.cardapiodiario VALUES (111, '2023-02-01', 'T', 50030, 0);
INSERT INTO public.cardapiodiario VALUES (112, '2023-02-01', 'N', 49970, 0);
INSERT INTO public.cardapiodiario VALUES (113, '2023-02-02', 'M', 50030, 0);
INSERT INTO public.cardapiodiario VALUES (114, '2023-02-02', 'T', 49975, 0);
INSERT INTO public.cardapiodiario VALUES (115, '2023-02-02', 'N', 49940, 0);
INSERT INTO public.cardapiodiario VALUES (116, '2023-02-03', 'M', 49900, 0);
INSERT INTO public.cardapiodiario VALUES (117, '2023-02-03', 'T', 49910, 0);
INSERT INTO public.cardapiodiario VALUES (118, '2023-02-03', 'N', 49910, 0);
INSERT INTO public.cardapiodiario VALUES (119, '2023-02-04', 'M', 50050, 0);
INSERT INTO public.cardapiodiario VALUES (120, '2023-02-04', 'T', 50060, 0);
INSERT INTO public.cardapiodiario VALUES (121, '2023-02-04', 'N', 50010, 0);
INSERT INTO public.cardapiodiario VALUES (122, '2023-02-05', 'M', 49950, 0);
INSERT INTO public.cardapiodiario VALUES (123, '2023-02-05', 'T', 49930, 0);
INSERT INTO public.cardapiodiario VALUES (124, '2023-02-05', 'N', 49985, 0);
INSERT INTO public.cardapiodiario VALUES (125, '2023-02-06', 'M', 49925, 0);
INSERT INTO public.cardapiodiario VALUES (126, '2023-02-06', 'T', 49925, 0);
INSERT INTO public.cardapiodiario VALUES (127, '2023-02-06', 'N', 49990, 0);
INSERT INTO public.cardapiodiario VALUES (128, '2023-02-10', 'M', 50015, 0);
INSERT INTO public.cardapiodiario VALUES (129, '2023-02-10', 'T', 49945, 0);
INSERT INTO public.cardapiodiario VALUES (130, '2023-02-10', 'N', 49985, 0);

INSERT INTO public.cardapioreceita VALUES (110, 25, 3);
INSERT INTO public.cardapioreceita VALUES (110, 33, 10);
INSERT INTO public.cardapioreceita VALUES (110, 41, 5);
INSERT INTO public.cardapioreceita VALUES (110, 47, 20);
INSERT INTO public.cardapioreceita VALUES (111, 51, 20);
INSERT INTO public.cardapioreceita VALUES (111, 53, 50);
INSERT INTO public.cardapioreceita VALUES (111, 55, 50);
INSERT INTO public.cardapioreceita VALUES (112, 25, 5);
INSERT INTO public.cardapioreceita VALUES (112, 65, 5);
INSERT INTO public.cardapioreceita VALUES (112, 45, 10);
INSERT INTO public.cardapioreceita VALUES (112, 43, 8);
INSERT INTO public.cardapioreceita VALUES (112, 27, 3);
INSERT INTO public.cardapioreceita VALUES (115, 35, 20);
INSERT INTO public.cardapioreceita VALUES (115, 39, 25);
INSERT INTO public.cardapioreceita VALUES (120, 35, 15);
INSERT INTO public.cardapioreceita VALUES (120, 39, 20);
INSERT INTO public.cardapioreceita VALUES (120, 53, 20);
INSERT INTO public.cardapioreceita VALUES (125, 61, 5);
INSERT INTO public.cardapioreceita VALUES (125, 63, 5);
INSERT INTO public.cardapioreceita VALUES (125, 65, 5);
INSERT INTO public.cardapioreceita VALUES (126, 39, 10);
INSERT INTO public.cardapioreceita VALUES (126, 41, 10);
INSERT INTO public.cardapioreceita VALUES (126, 43, 10);
INSERT INTO public.cardapioreceita VALUES (126, 33, 15);
INSERT INTO public.cardapioreceita VALUES (128, 31, 30);
INSERT INTO public.cardapioreceita VALUES (114, 43, 15);
INSERT INTO public.cardapioreceita VALUES (114, 45, 15);
INSERT INTO public.cardapioreceita VALUES (130, 59, 8);
INSERT INTO public.cardapioreceita VALUES (130, 53, 10);
INSERT INTO public.cardapioreceita VALUES (130, 33, 15);
INSERT INTO public.cardapioreceita VALUES (130, 65, 10);

INSERT INTO public.estoquediario VALUES (13, '2023-02-04', 0, 49910, 'Enrico Carvalho', 12455);
INSERT INTO public.estoquediario VALUES (14, '2023-02-05', 0, 50010, 'Bruno Costela', 123456);
INSERT INTO public.estoquediario VALUES (17, '2023-02-08', 0, 49930, 'Benjamin Silveira', 114224);
INSERT INTO public.estoquediario VALUES (21, '2023-02-12', 0, 49945, 'Danilo Duarte', 652335);
INSERT INTO public.estoquediario VALUES (22, '2023-02-13', 0, 49925, 'Danilo Duarte', 477555);
INSERT INTO public.estoquediario VALUES (23, '2023-02-14', 0, 50015, 'CauÆ AragÆo', 144524);
INSERT INTO public.estoquediario VALUES (11, '2023-02-02', 2, 50030, 'CauÆ AragÆo', 114452);
INSERT INTO public.estoquediario VALUES (12, '2023-02-03', 1, 49910, 'Lucas Ribeiro', 33542);
INSERT INTO public.estoquediario VALUES (15, '2023-02-06', 2, 49990, 'Ot vio Ara£jo', 65487);
INSERT INTO public.estoquediario VALUES (16, '2023-02-07', 2, 49930, 'Ian Silva', 88821);
INSERT INTO public.estoquediario VALUES (18, '2023-02-09', 4, 49930, 'Danilo Duarte', 258855);
INSERT INTO public.estoquediario VALUES (19, '2023-02-10', 2, 49985, 'Murilo da Luz', 247458);
INSERT INTO public.estoquediario VALUES (10, '2023-02-01', 3, 50030, 'Pedro Miguel Cunha', 65521);
INSERT INTO public.estoquediario VALUES (20, '2023-02-11', 4, 49910, 'Enrico Carvalho', 41225);

INSERT INTO public.itemestoque VALUES (1, 200, 10, 10, 80, 80, 10);
INSERT INTO public.itemestoque VALUES (2, 600, 10, 0, 5, 4.5, 0.5);
INSERT INTO public.itemestoque VALUES (3, 2000, 10, 0, 10, 10, 0);
INSERT INTO public.itemestoque VALUES (4, 1000, 11, 1, 2, 3, 0);
INSERT INTO public.itemestoque VALUES (5, 1500, 11, 0, 8, 8, 0);
INSERT INTO public.itemestoque VALUES (6, 2200, 20, 5, 2, 6, 1);
INSERT INTO public.itemestoque VALUES (7, 2300, 20, 0, 36, 36, 0);
INSERT INTO public.itemestoque VALUES (8, 200, 20, 8, 2, 9, 1);
INSERT INTO public.itemestoque VALUES (9, 2100, 20, 0, 3, 3, 0);
INSERT INTO public.itemestoque VALUES (10, 1300, 15, 5, 5, 10, 0);
INSERT INTO public.itemestoque VALUES (11, 2200, 15, 4, 4, 8, 0);
INSERT INTO public.itemestoque VALUES (12, 700, 16, 2, 3, 3.5, 1.5);
INSERT INTO public.itemestoque VALUES (13, 2600, 16, 5, 5, 8, 2);
INSERT INTO public.itemestoque VALUES (14, 1900, 18, 0, 1, 0.5, 0.5);
INSERT INTO public.itemestoque VALUES (15, 800, 18, 2, 3, 3, 2);
INSERT INTO public.itemestoque VALUES (16, 900, 18, 1, 1, 1, 1);
INSERT INTO public.itemestoque VALUES (17, 1200, 18, 1, 5, 6, 0);
INSERT INTO public.itemestoque VALUES (18, 1600, 19, 1, 8, 9, 0);
INSERT INTO public.itemestoque VALUES (19, 400, 19, 0, 2, 2, 0);
INSERT INTO public.itemestoque VALUES (20, 1200, 12, 5, 1, 5, 1);

INSERT INTO public.merendeira VALUES (50060, 'Isis Melo');
INSERT INTO public.merendeira VALUES (50055, 'Eduarda Rodrigues');
INSERT INTO public.merendeira VALUES (50050, 'Nina Gomes');
INSERT INTO public.merendeira VALUES (50045, 'Catarina Fernandes');
INSERT INTO public.merendeira VALUES (50040, 'Ana L¡via Novaes');
INSERT INTO public.merendeira VALUES (50035, 'Cec¡lia Viana');
INSERT INTO public.merendeira VALUES (50030, 'Ana L¡via Jesus');
INSERT INTO public.merendeira VALUES (50025, 'Alice Ferreira');
INSERT INTO public.merendeira VALUES (50020, 'Helena Rezende');
INSERT INTO public.merendeira VALUES (50015, 'Juliana Barbosa');
INSERT INTO public.merendeira VALUES (50010, 'Ana Clara da Costa');
INSERT INTO public.merendeira VALUES (50005, 'Alana Rezende');
INSERT INTO public.merendeira VALUES (50000, 'Nina Novaes');
INSERT INTO public.merendeira VALUES (49995, 'Sra. Helena da Paz');
INSERT INTO public.merendeira VALUES (49990, 'Milena da Rocha');
INSERT INTO public.merendeira VALUES (49985, 'Ana Carolina Moura');
INSERT INTO public.merendeira VALUES (49980, 'Ana Beatriz Novaes');
INSERT INTO public.merendeira VALUES (49975, 'Marcela Rezende');
INSERT INTO public.merendeira VALUES (49970, 'Helo¡sa Barbosa');
INSERT INTO public.merendeira VALUES (49965, 'Srta. Maysa Farias');
INSERT INTO public.merendeira VALUES (49960, 'Caroline Melo');
INSERT INTO public.merendeira VALUES (49955, 'Maria Luiza Oliveira');
INSERT INTO public.merendeira VALUES (49950, 'Amanda Nunes');
INSERT INTO public.merendeira VALUES (49945, 'Luiza Moreira');
INSERT INTO public.merendeira VALUES (49940, 'Alice Oliveira');
INSERT INTO public.merendeira VALUES (49935, 'J£lia Ribeiro');
INSERT INTO public.merendeira VALUES (49930, 'Kamilly Moraes');
INSERT INTO public.merendeira VALUES (49925, 'Marina Azevedo');
INSERT INTO public.merendeira VALUES (49920, 'Gabriela da Cunha');
INSERT INTO public.merendeira VALUES (49915, 'Nina Souza');
INSERT INTO public.merendeira VALUES (49910, 'Bruna Dias');
INSERT INTO public.merendeira VALUES (49905, 'Emanuelly Ferreira');
INSERT INTO public.merendeira VALUES (49900, 'Larissa Costela');
INSERT INTO public.merendeira VALUES (49895, 'Fernanda Silveira');
INSERT INTO public.merendeira VALUES (49890, 'Sabrina Rocha');
INSERT INTO public.merendeira VALUES (49885, 'Olivia Souza');
INSERT INTO public.merendeira VALUES (49880, 'Sra. Isabel Peixoto');
INSERT INTO public.merendeira VALUES (49875, 'Maria Sophia da Cruz');
INSERT INTO public.merendeira VALUES (49870, 'L¡via Rodrigues');
INSERT INTO public.merendeira VALUES (49865, 'Maria Cec¡lia da Rocha');
INSERT INTO public.merendeira VALUES (49860, 'Maria Julia Lopes');
INSERT INTO public.merendeira VALUES (49855, 'Joana Farias');
INSERT INTO public.merendeira VALUES (49850, 'Vit¢ria Correia');
INSERT INTO public.merendeira VALUES (49845, 'Srta. Sophia Alves');
INSERT INTO public.merendeira VALUES (49840, 'Catarina Silveira');
INSERT INTO public.merendeira VALUES (49835, 'Srta. Nicole Nunes');
INSERT INTO public.merendeira VALUES (49830, 'Maysa Carvalho');
INSERT INTO public.merendeira VALUES (49825, 'Milena Moraes');
INSERT INTO public.merendeira VALUES (49820, 'Ana Laura da Concei‡Æo');
INSERT INTO public.merendeira VALUES (49815, 'Luna Cardoso');

INSERT INTO public.receita VALUES (25, 'Bolo de Arroz', 'Olivia Porto', 0);
INSERT INTO public.receita VALUES (27, 'Bolo de Cenoura', 'Camila Monteiro', 0);
INSERT INTO public.receita VALUES (29, 'Strogonoff de Carne', 'Luigi Teixeira', 0);
INSERT INTO public.receita VALUES (31, 'Arroz Silveira', 'Dr. Caio Lopes', 0);
INSERT INTO public.receita VALUES (33, 'Suco de Laranja', 'Leandro Caldeira', 0);
INSERT INTO public.receita VALUES (35, 'Chocolate quente', 'Luiza Gomes', 0);
INSERT INTO public.receita VALUES (37, 'Bolo de Fub ', 'Catarina Barbosa', 0);
INSERT INTO public.receita VALUES (39, 'Polenta Cremosa', 'Srta. Mariane Silva', 0);
INSERT INTO public.receita VALUES (41, 'Mix de Legumes', 'Alexia Cardoso', 0);
INSERT INTO public.receita VALUES (43, 'Salada Verde', 'Dr. Vinicius da Rosa', 0);
INSERT INTO public.receita VALUES (45, 'Rabanada', 'Renan Peixoto', 0);
INSERT INTO public.receita VALUES (47, 'Omelete', 'Maria Clara Barbosa', 0);
INSERT INTO public.receita VALUES (49, 'Rosquinha de laranja', 'Fernando Freitas', 0);
INSERT INTO public.receita VALUES (51, 'Muffin ', 'Isabelly Moura', 0);
INSERT INTO public.receita VALUES (53, 'PÆo de queijo', 'Davi Luiz Nascimento', 0);
INSERT INTO public.receita VALUES (55, 'Omelete de espinafre', 'Maria Clara Barbosa', 0);
INSERT INTO public.receita VALUES (57, 'Espaguete ao sugo', 'Maria Clara Barbosa', 0);
INSERT INTO public.receita VALUES (59, 'Frango assado', 'Fernando Freitas', 0);
INSERT INTO public.receita VALUES (61, 'Salada de maionese', 'Camila Monteiro', 0);
INSERT INTO public.receita VALUES (63, 'Fricassˆ de frango', 'Olivia Porto', 0);
INSERT INTO public.receita VALUES (65, 'Doce de ab¢bora', 'Olivia Porto', 0);
INSERT INTO public.receita VALUES (67, 'Arroz Doce', 'Luigi Teixeira', 0);

INSERT INTO public.receitaalimento VALUES (25, 200, 0);
INSERT INTO public.receitaalimento VALUES (25, 500, 1);
INSERT INTO public.receitaalimento VALUES (63, 2400, 1);

ALTER TABLE ONLY public.alimento
    ADD CONSTRAINT alimento_nomealimento_key UNIQUE (nomealimento);
ALTER TABLE ONLY public.alimento
    ADD CONSTRAINT alimento_pkey PRIMARY KEY (idalimento);
ALTER TABLE ONLY public.cardapiodiario
    ADD CONSTRAINT cardapiodiario_pkey PRIMARY KEY (idcardapiodiario);
ALTER TABLE ONLY public.cardapiodiario
    ADD CONSTRAINT cardapiodiarioc2 UNIQUE (data, turno);
ALTER TABLE ONLY public.cardapioreceita
    ADD CONSTRAINT cardapioreceita_pkey PRIMARY KEY (cardapio, receita);
ALTER TABLE ONLY public.estoquediario
    ADD CONSTRAINT estoquediario_data_key UNIQUE (data);
ALTER TABLE ONLY public.estoquediario
    ADD CONSTRAINT estoquediario_pkey PRIMARY KEY (idestoque);
ALTER TABLE ONLY public.itemestoque
    ADD CONSTRAINT itemestoque_pkey PRIMARY KEY (iditemestoque);
ALTER TABLE ONLY public.itemestoque
    ADD CONSTRAINT itemestoquec1 UNIQUE (alimento, estoque);
ALTER TABLE ONLY public.merendeira
    ADD CONSTRAINT merendeira_pkey PRIMARY KEY (codigomerendeira);
ALTER TABLE ONLY public.receita
    ADD CONSTRAINT receita_nomereceita_key UNIQUE (nomereceita);
ALTER TABLE ONLY public.receita
    ADD CONSTRAINT receita_pkey PRIMARY KEY (idreceita);
ALTER TABLE ONLY public.receitaalimento
    ADD CONSTRAINT receitaalimento_pkey PRIMARY KEY (receita, alimento);
	
CREATE RULE decrementa_qteitens_estoque AS
    ON DELETE TO public.itemestoque DO  UPDATE public.estoquediario SET qtdeitens = (estoquediario.qtdeitens - 1)
  WHERE (estoquediario.idestoque = old.estoque);
CREATE RULE incrementa_qteitens_estoque AS
    ON INSERT TO public.itemestoque DO  UPDATE public.estoquediario SET qtdeitens = (estoquediario.qtdeitens + 1)
  WHERE (estoquediario.idestoque = new.estoque);
CREATE TRIGGER t_estoque AFTER INSERT ON public.itemestoque FOR EACH ROW EXECUTE FUNCTION public.atualiza_estoque();
ALTER TABLE ONLY public.cardapiodiario
    ADD CONSTRAINT cardapiodiario_merendeira_fkey FOREIGN KEY (merendeira) REFERENCES public.merendeira(codigomerendeira);
ALTER TABLE ONLY public.cardapioreceita
    ADD CONSTRAINT cardapioreceita_cardapio_fkey FOREIGN KEY (cardapio) REFERENCES public.cardapiodiario(idcardapiodiario);
ALTER TABLE ONLY public.cardapioreceita
    ADD CONSTRAINT cardapioreceita_receita_fkey FOREIGN KEY (receita) REFERENCES public.receita(idreceita);
ALTER TABLE ONLY public.estoquediario
    ADD CONSTRAINT estoquediario_merendeira_fkey FOREIGN KEY (merendeira) REFERENCES public.merendeira(codigomerendeira);
ALTER TABLE ONLY public.itemestoque
    ADD CONSTRAINT itemestoque_alimento_fkey FOREIGN KEY (alimento) REFERENCES public.alimento(idalimento);
ALTER TABLE ONLY public.itemestoque
    ADD CONSTRAINT itemestoque_estoque_fkey FOREIGN KEY (estoque) REFERENCES public.estoquediario(idestoque) ON DELETE CASCADE;
ALTER TABLE ONLY public.receitaalimento
    ADD CONSTRAINT receitaalimento_alimento_fkey FOREIGN KEY (alimento) REFERENCES public.alimento(idalimento);
ALTER TABLE ONLY public.receitaalimento
    ADD CONSTRAINT receitaalimento_receita_fkey FOREIGN KEY (receita) REFERENCES public.receita(idreceita);