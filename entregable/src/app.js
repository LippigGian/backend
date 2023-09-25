import express from "express";
import ProductManager from "./ProductManager.js";

const app = express();

//instancia de la clase
const manager = new ProductManager("../files/products.json");

//Mostrar todos los productos con la opcion de agregar un limit
app.get("/products", async (req, res) => {
  const limit = Number(req.query.limit);
  const products = await manager.getProducts(limit);
  res.send(products); //Con express se sobreenteinde que en esta respuesta estamos retornando un codigo 200
});

//Mostrar producto filtrado por id
app.get("/products/:id", async (req, res) => {
  const id = Number(req.params.id);
  const products = await manager.getproductById(id);
  res.send(products);
});

//Mostrar
app.listen(8080, () => console.log("Listening on 8080"));
