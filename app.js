const express = require('express');
const { swaggerUi, specs } = require('./config/swaggerConfig');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const itemsRoutes = require('./routes/items');
app.use('/items', itemsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our REST API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
