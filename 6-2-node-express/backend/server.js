import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

{/*write code for cors*/} 
const app = express();
app.use(cors()); 
app.use(express.json()); 


{/*write code to define routes*/} 
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


{/*write code to create server*/}  
