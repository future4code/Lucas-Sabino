 # Herança

 ## Exercício 1
 > a. Não é possível imprimir só a senha, pois trata-se de um atributo privado e a classe não possui um getter de password.
 
 > b. 1 vez, pois a classe só foi chamada uma vez.

 ## Exercício 2
 > a. Uma vez, pois só foi criado uma instancia da classe.

 > b. Duas vezes, pois o código ainda apresentava a instancia da questão anterior, criando um user depois um consumer.

 ## Exercício 3
 > a. Sim, pois ao imprimir a instancia inteira, os atributos privados também são mostrados.


 # Polimorfismo

 ## Exercício 1
 > a. as propriedades: name, registrationNumber e consumedEnergy foram impressas mas a calculateBill por se tratar de uma função, não retornou o esperado.

 ## Exercício 2 
 > a. Cannot create an instance of an abstract class.

 > b. Criar uma instancia que não seja de classe abstract. 

 ## Exercício 3
 > a. precisaria ser criada uma classe filha e uma instancia para a mesma.

 > b. Place é uma classe, pois possui acesso restrito a um de seus atributos.

 > c. porque não há uma situação onde será necessária criar uma instancia dessa classe.

 ## Exercício 4 
 > a. Possui todos os atributos e metodos herdados da classe Residence e tambemm de Place, e da interface Client.
 
 ## EXERCÍCIO 5

> a. Herda todos os métodos e atributos da classe Commerce e Place, assim como a interface Client.

> b. A diferença é que cada classe tem um atributo original privado, como no caso CPF e CNPJ.

## EXERCÍCIO 6

> a. Ela é filha da classe Industry, porque precisa herdar todos os atributos dela.

> b. Ela implementa o Client, pois é uma interface própria para pegar todas os atributos da industria.

> c. Pois os dados fornecidos atraves da interface client, e da classe Industry são valores qu enão precisam ser mutáveis.