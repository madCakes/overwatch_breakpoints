import app from "./app.js";

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on ${PORT}...`);
});
