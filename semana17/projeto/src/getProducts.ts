import { Request, Response } from "express";
import { connection } from "./connection";
import { Product } from "./types";

export const getProducts = async (req: Request, res: Response) => {
    try {
 
       const product: Product[] = await connection("labecommerce_products")
 
       res.status(200).send(product)
       
    } catch (error:any) {
       res.status(400).send({message: error.message})
    }
 }