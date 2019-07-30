const express = require('express');

module.exports = (db, _app) => {
  const router = express.Router();

  router.get('/', (req, res) => {});
  router.get('/:venueId', (req, res) => {});
  router.get('/:venueId/guests', (req, res) => {});
  router.post('/:venueId/guests', (req, res) => {});
  router.put('/:venueId/guests', (req, res) => {});

  return router;
}
