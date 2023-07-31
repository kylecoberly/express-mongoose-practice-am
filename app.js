const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/pets")

const Dog = mongoose.model("Dog", {
	name: String,
});

app.get("/dogs", async (request, response) => {
	const dogs = await Dog.find({})
	response.json({ dogs })
})

app.post("/dogs", async (request, response) => {
	const { dog } = request.body
	const newDog = await Dog.create({
		...dog
	})
	response.json({ dog: newDog })
})

module.exports = app
