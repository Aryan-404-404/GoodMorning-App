const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
require("dotenv").config();

const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API Running...')
})

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});