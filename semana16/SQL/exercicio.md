# Exercício 1

### a. ALTER TABLE Actor DROP COLUMN salary;

> R: Apaga toda a coluna, com todos os dados de salario.

### b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

> R: Altera a coluna gender para sex que recebe até 6 caracteres.

### c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

> R: Altera o tamanho do campo gender para 255 caracteres.

### d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Questão 2

### a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

```sh
UPDATE Actor 
SET name = "Leozitos", birth_date = "1994-03-22" 
WHERE id = "003"
```

### b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

```sh
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
```

```sh
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

### c. Escreva uma query que atualize todas as informações do ator com o id 005

```sh
UPDATE Actor SET name = "Mumuzinho Rei Delas", salary = "250000", birth_date = "0001-04-22", gender = "male" WHERE id = "005";
```

### d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.

```sh
UPDATE Actor SET name = "asd", salary = "250000", birth_date = "0001-04-22", gender = "male" WHERE id = "010";
```

> R: Apesar de dar sucesso, não modifica nada na tabela, pois o ID não existe.

# Questão 3 

### a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`

```sh
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

```sh
DELETE FROM Actor WHERE gender = "male" AND salary > "1000000"
```

# Questão 4

### a. Escreva uma query que pegue o maior salário de todos os atores e atrizes

```sh
SELECT MAX(salary) FROM Actor;
```

### b. Escreva uma query que pegue o menor salário das atrizes

```sh
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### c. Escreva uma query que pegue a quantidade de atrizes

```sh
SELECT COUNT(gender) FROM Actor WHERE gender = "female";
```

### d. Escreva uma query que pegue a soma de todos os salários

```sh
SELECT SUM(salary) FROM Actor;
```

# Questão 5

### a. Releia a última query. Teste-a. Explique o resultado com as suas palavras

> R: Realiza a contagem de elementos de acordo com os generos.

### b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

```sh
SELECT id, name FROM Actor ORDER BY name ASC;
```

### c. Faça uma query que retorne todos os atores ordenados pelo salário

```sh
SELECT * FROM Actor ORDER BY salary ASC;
```

### d. Faça uma query que retorne os atores com os três maiores salarios

```sh
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

### e. Faça uma query que retorne a média de salário por gênero

```sh
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

# Questão 6

### a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

```sh
ALTER TABLE Movie ADD playing_limit_date DATE;
```

### b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

```sh
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

### c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

```sh
UPDATE Movie SET playing_limit_date = "2021-12-31" WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2020-01-01"  WHERE id = "002";
```

### d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

```sh
DELETE FROM Movie WHERE id = "003";
```

# Questão 7 

### a. Quantos filmes em cartaz possuem avaliações maiores do que 7.5?

```sh
SELECT COUNT(rating) FROM Movie WHERE rating > "7.5";
```

### b. Qual a média das avaliações dos filmes?

```sh
SELECT AVG(rating) FROM Movie;
```

### c. Qual a quantidade de filmes em cartaz?

```sh
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > "2021-11-23";
```

### d. Qual a quantidade de filmes que ainda irão lançar?

```sh
SELECT COUNT(*) FROM Movie WHERE release_Date > "2021-11-23";
```

### e. Qual a maior nota dos filmes?

```sh
SELECT MAX(rating) FROM Movie;
```

### f. Qual a menor nota dos filmes?

```sh
SELECT MIN(rating) FROM Movie;
```

# Questão 8

### a. Retorne todos os filmes em ordem alfabética

```sh
SELECT * FROM Movie ORDER BY title ASC;
```

### b. Retorne os 5 primerios filmes em ordem descrente alfabética 

```sh
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

### c. Retorne os 3 filmes mais recentes em cartaz

```sh 
SELECT * FROM Movie ORDER BY release_date LIMIT 3;
```

### d. Retorne os 3 filmes melhor avalidos

```sh
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```