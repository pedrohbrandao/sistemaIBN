require('dotenv').config()
//CONFIGURANDO BANCO DE DADOS
const Seq = require("sequelize").Sequelize
const seq = new Seq(process.env.TABLE_DB_AMAZON, process.env.USER_DB_AMAZON, process.env.AMAZON_PASS, {
    host: process.env.DBAMAZON,
    dialect: "mysql",
    port: "3306"
});
(async () => {
    try {
        await seq.authenticate();
        console.log('database  OK');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


module.exports = {
    Seq: Seq,
    seq: seq
}