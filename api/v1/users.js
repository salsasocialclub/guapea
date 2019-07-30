const express = require('express');

module.exports = (db, _app) => {
  const router = express.Router();

  router.post('/', (req, res) => {});
  router.get('/:userId', (req, res) => {});
  router.put('/:userId', (req, res) => {});
  // router.get('/:userId/visits', (req, res) => {});

  return router;
}
