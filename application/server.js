import express from 'express';
import ZipsService from '../domain/zips-service.js'
import ZipsClient from '../data-access/zips-client.js';

const zipsService = new ZipsService(ZipsClient)
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    zipsService.getZips()
    .then(data => res.status(200).send(data))
    .catch(e => res.send(400).send(e));
});

app.get('/:zip', (req, res) => {
    zipsService.getZip(parseInt(req.param.zip))
    .then(data => res.status(200).send(data))
    .catch(e => res.send(400).send(e));
});

app.post('/', (req, res) => {
    zipsService.addZip(parseInt(req.body.zip))
    .then(data => res.status(201).send(data))
    .catch(e => res.send(400).send(e))
});

app.delete('/', (req, res) => {
    zipsService.deleteZip(parseInt(req.body.zip))
    .then(data => res.status(200).send(data))
    .catch(e => res.send(400).send(e));
});

export { app, PORT };