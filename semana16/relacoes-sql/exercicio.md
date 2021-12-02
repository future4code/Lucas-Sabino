# Questão 1

### a. Explique o que é uma chave estrangeira.

> R: Uma chave que referencia e linka uma tabela a outra.

### b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes.

```sh
INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
  "001",
  "Show de bola",
  7.5,
  "001"
);
```

### c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

```sh
INSERT INTO Rating (id, comment, rate, movie_id) VALUES (
  "001",
  "Show de bola",
  7.5,
  "010"
);
```

> Message: Cannot add or update a child row: a foreign key constraint fails

> Não pode ser adicionado ao Banco por não possuir link real com outra tabela pela Foreign Key

### d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```sh
ALTER TABLE Movie DROP COLUMN rating;
```

### e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

> Message: Cannot delete or update a parent row: a foreign key constraint fails

> Não é possível apagar um dado que está sendo referenciado por chave estrangeira.


# Questão 2 

### a. Explique, com as suas palavras, essa tabela

> Essa tabela referencia atores com os filmes.

### b. Crie, ao menos, 6 relações nessa tabela.

```sh
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "004"
);
```

### c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query.

> Message: Cannot add or update a child row: a foreign key constraint fails

> Fallha por não encontrar a chave estrangeira.

### d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.

> Message: Cannot delete or update a parent row: a foreign key constraint fails

> Não é possível apagar um dado que está sendo referenciado como chave estrangeira.

### a. Explique, com suas palavras, a query acima. O que é o operador ON?

> R: União dos resultados solicitados em uma unica tabela.

### b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```sh
SELECT title, Movie.id, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```