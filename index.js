const express = require('express');
const app = express();

const PORT = process.env.PORT || 6060;

app.get('/', (req, res, next) => {
  res.json({
    message: "master: first server commit"
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})