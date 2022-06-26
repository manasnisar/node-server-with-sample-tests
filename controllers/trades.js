const Trade = require("../models/trades");

const createTrade = async (req, res) => {
    const trade = await Trade.create(req.body);
    res.status(201).send(trade)
};

const getTrades = async (req, res) => {
    let query = {}
    if(req.query.type) query.type = req.query.type
    if(req.query.user_id) query.user_id = req.query.user_id
    const trades = await Trade.findAll({ where: query });
    res.status(200).send(trades)
};

const getTradeById = async (req, res) => {
    const trade = await Trade.findAll({ where: {id: req.params.id} });
    if(trade.length){
        res.status(200).send(trade[0])
        return
    } 
    res.status(404).send('ID not found')
};

const notAllowed = (req, res) => {
    res.sendStatus(405)
}
  

module.exports = {
    createTrade,
    getTrades,
    getTradeById,
    notAllowed
};