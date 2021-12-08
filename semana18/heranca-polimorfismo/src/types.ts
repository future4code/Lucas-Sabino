export enum GENDER {
   MALE = "MALE",
   FEMALE = "FEMALE",
   OTHER = "OTHER"
}

export type character = {
   name: string,
   gender: GENDER,
   id?: number,
   description?: string
}


export class Character {

   private name: string;
   private gender: GENDER;
   private id?: number;
   private description?: string;

   constructor(
      name: string,
      gender: GENDER,
      id?: number,
      description?: string
   ) {
      this.name = name;
      this.gender = gender;
      this.id = id;
      this.description = description;
      console.log("Consegui criar "+this.name+" com sucesso!");
   }

   getName(): string{
      return this.name;
   }

   getGender(): GENDER{
      return this.gender;
   }

   getId(): number | undefined{
      return this.id;
   }

   getDescription(): string | undefined {
      return this.description;
   }

}

const wolverine = new Character("Logan", GENDER.MALE, 11, "Se cura rápido e tem garra de adamantium");






export class Dog {
   name: string;
   weight: number;

   constructor(name: string, weight: number) {
      this.name = name;
      this.weight = weight;

   }

   bark(): void {
      console.log(this.name)

   }

   eat(quantity: number): void {

   }

}

const cyclops: character = {
   name: "Scott Summers",
   gender: GENDER.MALE,
   description: "Solta raio vermelho",
   id: 10
}

class User {
   private id: string;
   private email: string;
   private name: string;
   private password: string;
 
   constructor(
       id: string,
       email: string,
       name: string,
       password: string
    ){
       console.log("Chamando o construtor da classe User")
       this.id = id
       this.email = email
       this.name = name 
       this.password = password
    }
 
    public getId(): string {
       return this.id
    }
 
    public getEmail(): string {
       return this.email
    }
 
    public getName(): string {
       return this.name
    }

    public introduceYourself(): string{
       return `Olá, sou ${this.name}. Bom dia!`
    }
 }

const usuario = new User("123abc", "asdf@asdf.com", "asdf", "123456");

console.log(usuario)

class Customer extends User {
   public purchaseTotal: number = 0;
   private creditCard: string;
 
   constructor(
     id: string,
     email: string,
     name: string,
     password: string,
     creditCard: string
   ) {
     super(id, email, name, password);
     console.log("Chamando o construtor da classe Customer");
     this.creditCard = creditCard;
   }
 
   public getCreditCard(): string {
     return this.creditCard;
   }
 }

 const customer = new Customer("123asd", "lucas@email.com", "lucas", "123456", "123456789" )
 
 console.log(customer, customer.introduceYourself())

 //##########################################################################3

 export interface Client {
   name: string;
   // Refere-se ao nome do cliente
 
   registrationNumber: number;
   // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id
 
   consumedEnergy: number;
   // Refere-se à energia consumida pelo cliente no mês
 
   calculateBill(): number;
   // Retorna o valor da conta em reais
 }

 const client: Client = {
    name: "Lucas",
    registrationNumber: 123,
    consumedEnergy: 10,

   calculateBill: () => {
      return 2
   }
 }

 console.log(client)

 export abstract class Place {
   constructor(protected cep: string) {}
 
    public getCep(): string {
       return this.cep;
   }
 }

//  class ResidentialClient extends Residence implements Client {
//    constructor(
//      public name: string,
//      public registrationNumber: number,
//      public consumedEnergy: number,
//      private cpf: string,
//      residentsQuantity: number,
//      cep: string
//    ) {
//      super(residentsQuantity, cep);
//    }
 
//    public getCpf(): string {
//      return this.cpf;
//    }
 
//    public calculateBill(): number {
//      return this.consumedEnergy * 0.75;
//    }
//  }