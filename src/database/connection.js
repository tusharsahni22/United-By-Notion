const mongoose = require("mongoose")

const Url ="mongodb+srv://admin:admin@unitedbynotion.0u62uh5.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(Url).then(
    console.log("Connected to Database")
)
