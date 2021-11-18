import express from 'express'
import cors from 'cors'
import {countries} from './data'
import { country } from './types'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/countries", (req,res) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
      }))
      
      res.status(200).send(result)
})

app.get('/countries/search', (req,res) => {
    let result: country[] = countries

    if (req.query.name) {
    result = result.filter(
        country => country.name.includes(req.query.name as string)
    )}

    if (req.query.capital) {
    result = result.filter(
        country => country.capital.includes(req.query.capital as string)
    )}

    if (req.query.continent) {
    result = result.filter(
        country => country.continent.includes(req.query.continent as string)
    )}
    res.status(200).send(result)
})

app.get('/countries/:id', (req,res) => {
    const id = req.params.id

    const result = countries.find((country) => {
        return country.id === Number(id)
    })
    if(result)
        res.send(result)
    else
        res.status(404).send("Not found")
})

app.put('/countries/:id', (req,res) => {
    const id = req.params.id

    const result = countries.find((country) => {
        return country.id === Number(id)
    })


})

app.listen(3003, () => {
    console.log("Servidor pronto!")
})