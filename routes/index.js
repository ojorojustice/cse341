const express = require('express');
const routes = express.Router();
const Contacts = require('../models/getcontacts');
const connectDB = require('../db/Connection');
connectDB();

const {
  getContacts,
  getOneContacts,
  putContacts,
  deleteContacts,
  postContacts
} = require('../controllers/ContactControllers');

/**
 * @openapi
 * /contacts:
 *  get:
 *    summary: This tests my API settings
 *    responses:
 *      '200':
 *        description: A list of users.
 */
routes.get('/contacts', (req, res) => {
  res.status(200).json({
    name: 'Ojo RUFUS Olajide',
    age: 34
  });
});

/**
 * @swagger
 * /:
 *  get:
 *    summary: This fetches all contacts
 *    responses:
 *      '200':
 *        description: A list of all my contacts.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *                favoriteColor:
 *                  type: string
 *                birthday:
 *                  type: string
 */
routes.get('/', getContacts);

/**
 * @swagger
 * paths:
 *  /getone/{id}:
 *    get:
 *      summary: This fetches only one contacts
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the contact id
 *      responses:
 *        '200':
 *          description: A list of only one of my contacts.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *              items:
 *                type: object
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *                favoriteColor:
 *                  type: string
 *                birthday:
 *                  type: string
 *        404:
 *          description: not found
 */
routes.get('/getone/:id', getOneContacts);

/**
 * @swagger
 * /put/{id}:
 *  put:
 *    summary: This updates specific contacts
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the contacts id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              favoriteColor:
 *                type: string
 *              birthday:
 *                type: string
 *    responses:
 *      200:
 *        description: Updated Contacts
 *      400:
 *        description: The contact cannot be found
 *      500:
 *        description: server error
 */
routes.put('/put/:id', putContacts);

/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *    summary: This deletes specific contacts
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the contacts id
 *    responses:
 *      200:
 *        description: The contact has been deleted
 *      400:
 *        description: The contact cannot be found
 */
routes.delete('/delete/:id', deleteContacts);

/**
 * @swagger
 * paths:
 *  /post:
 *    post:
 *      summary: This adds new contacts
 *      consumes:
 *        - application/json:
 *      parameters:
 *        - in: body
 *          name: Contacts
 *          description: creating new contact
 *          schema:
 *            type: object
 *            required:
 *              -firstName
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              favoriteColor:
 *                type: string
 *              birthday:
 *                type: string
 *    responses:
 *      200:
 *        description: Add more contacts.
 *      500:
 *        description: Server Error.
 */
routes.post('/post', postContacts);

module.exports = routes;
