const Token = artifacts.require("Token");

module.exports = async function (deployer) {
  await deployer.deploy(Token, "Tamagotchi game", "TAMAG");
  let tokenInstance = await Token.deployed();
  await tokenInstance.create_jeton(100, 200, 100000); ///Token id 0
  let animal = await tokenInstance.getTokenDetails(0);
  console.log(animal);
};

