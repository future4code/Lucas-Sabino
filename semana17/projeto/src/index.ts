import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { postUser } from "./postUser";
import { getUsers } from "./getUsers";
import { postProduct } from "./postProduct";
import { getProducts } from "./getProducts";
import { postPurchases } from "./postPurchases";
import { getPurchasesHistoryUser } from "./getPurchasesHistory";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", postUser)
app.get("/users", getUsers)

app.post("/products", postProduct)
app.get("/products", getProducts)

app.post("/purchases", postPurchases)
app.get("/users/:user_id/purchases", getPurchasesHistoryUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});