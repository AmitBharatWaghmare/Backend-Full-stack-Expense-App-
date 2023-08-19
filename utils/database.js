
const Sequelize =require(`sequelize`);
const sequelize= new Sequelize(`expensesapp`,`root`,`@mIT1995`,{
    dialect:`mysql`,
    host:`localhost`
  
});
module.exports=sequelize;