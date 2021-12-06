import { Request, Response } from "express";
import { connection } from "./connection";
import { Product } from "./types";

export const postProduct = async (req: Request, res: Response) => {
    try {
       const {name, price, image_url} = req.body
 
       if(!name || !price || !image_url){
          throw new Error("Parâmetros faltando")
       }
 
       const product: Product = {
          id: Date.now().toString(),
          name,
          price,
          image_url
       }
 
       await connection("labecommerce_products")
       .insert(product)
 
       res.status(200).send({message: "Produto criado"})
       
    } catch (error:any) {
       res.status(400).send({message: error.message})
    }
 }