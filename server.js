const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./wares/contactsMiddleWare');
const connectDB = require('./db/Connection');
const port = process.env.PORT || 8000;
const app = express();
connectDB();

swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'CSE341 Contacts API',
      version: '1.0.0',
      description: 'This is my first sample swagger documentation'
    },
    servers: [
      {
        url: 'http://localhost:3000/'
      }
    ]
  },
  apis: [`./routes/index.js`]
};

const swaggerdocs = swaggerJsDoc(swaggerOptions);

app.use(express.json());

app.use('/', require('./routes'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerdocs));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is now running on port: ${port}`);
});
