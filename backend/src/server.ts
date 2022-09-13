import express from "express";

const app = express();

app.get("/", (resquest, response) => {
    return response.send("Otto Neto")
})

app.listen(3333)