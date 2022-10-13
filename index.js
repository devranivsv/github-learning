require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get(
  '/greet',
  async (req, res, next) => {
    const { name } = req.query;
    const response = `Hello, ${name}`
    return res.status(200).send({
      hasError: false,
      data: response,
    });
  }
)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App Started: http://localhost:${port}`));
