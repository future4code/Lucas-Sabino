import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import { getFilter } from "./endpoints/getFilter"
import { getUsersType } from "./endpoints/getUsersType"
import { getUsersFilters } from "./endpoints/getUsersfilters"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getAllRecipes)
app.get("/users", getFilter)
app.get("/users/:type", getUsersType)
app.get("/users/types", getUsersFilters)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})