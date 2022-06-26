const express = require('express');
const router = express.Router();
const {createTrade, getTrades, getTradeById, notAllowed} = require('../controllers/trades')


router
  .route('/')
  .post(createTrade)
  .get(getTrades);

router
  .route('/:id')
  .get(getTradeById)
  .delete(notAllowed)
  .put(notAllowed)
  .patch(notAllowed);

module.exports = router;
