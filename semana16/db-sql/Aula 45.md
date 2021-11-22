```
# Questão 1
```sh
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

### a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

| Comando | Resposta |
| ------- | -------- |
| VARCHAR | Tipo variável de caracteres, alocando apenas o espaço necessário |
| PRIMARY KEY | Chave única, utilizada para referenciar tabelas |
| NOT NULL | Não aceita valor nulo |
| DATE | Tipo de entrada de data |

### b. O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.

```sh
SHOW TABLES
```
Retorna todas as tabelas que o DB possui.

### c. O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

Retorna os detalhes da tabela Actor.

# Questão 2

### a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
)
```

### b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(
    "002",
    "Lucas",
    12000000,
    "1994-03-22",
    "male"
)
```

> R: Message: Duplicate entry '002' for key 'PRIMARY'

> RT: Mensagem: Entrada '002' duplicada para chave 'PRIMARY'

Chaves primárias são unicas e não podem ser repetidas.

### c.
```sh
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

> R: Message : Column count doesn't match value count at row 1

> RT: Mensagem : A contagem de colunas não corresponde à contagem de valores na linha 1

O comando não passa as tuplas corretas.

> Correção: 
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

### d.
```sh
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```

> R: Message: Field 'name' doesn't have a default value

> RT: Mensagem: O campo 'nome' não tem um valor padrão

Valor de nome não declarado e não pode ser null.

> Correção: 
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Outro nome",
  400000,
  "1949-04-18", 
  "male"
);
```

### e.
```sh 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```

> R: Message: Incorrect date value: '1950' for column 'birth_date' at row 1

> RT: Mensagem: Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1

o tipo data deve ser declarado entre parentesis.
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

# Questão 3

### a. Escreva uma query que retorne todas as informações das atrizes

```sh
SELECT * from Actor WHERE gender = "female";
```

### b. Escreva uma query que retorne o salário do ator com o nome Tony Ramos

```sh
SELECT salary FROM Actor WHERE name = Tony Ramos;
```

### c. Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

```sh
SELECT * FROM Actor WHERE gender = "invalid";
```
>R: Retorna uma tabela em branco. Pois o campo gender não pode ser nulo.

### *d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

```sh
SELECT id, name, salary FROM Actor WHERE salary = 500000;
```


### e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
```sh
SELECT id, nome from Actor WHERE id = "002"
```

> R: Message: Unknown column 'nome' in 'field list'

> RT: Mensagem: Coluna desconhecida 'nome' na 'lista de campos'

O campo nome não existe, pois está cadastrado na tabela como name.

# Questão 4

```sh
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

### a. Explique com as suas palavras a query acima

> R: Seleciona todos os dados onde o nome começa com "a" ou "j" e o salário é maior que 300000

### b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

```sh
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
```

### c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.

```sh
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

### d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

```sh
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```

# Questão 5

### a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

> R: 
```sh
CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

### b.
```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

### c.
```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
```

### d.
```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

### e. 
```sh
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
    "004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-10",
    9
);
```

# Questão 6

### a. Retorne o id, título e avaliação a partir de um id específico;

```sh
SELECT id, title, rating FROM Movie WHERE id = 004;
```

### b. Retorne um filme a partir de um nome específico;

```sh
SELECT * FROM Movie WHERE title = "se eu fosse voce";
```

### c. Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

```sh
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

# Questão 7

### a. Retorna um filme cujo título contenha a palavra vida

```sh
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

### b. Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

```sh
SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```

### c. Procure por todos os filmes que já tenham lançado.

```sh
SELECT * FROM Movie WHERE release_date < "2021-11-22";
```

### d. Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

```sh
SELECT * FROM Movie WHERE release_date < "2021-11-22" AND (title LIKE "%teste%" OR synopsis LIKE "%teste%") AND rating > 7;
```

```