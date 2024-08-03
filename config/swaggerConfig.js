const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Example',
      version: '1.0.0',
      description: 'Example REST API with CRUD operations for "items" resource',
    },
    servers: [
      {
        url: `http://localhost:3000`,
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
