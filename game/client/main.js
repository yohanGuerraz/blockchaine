/** Connect to Moralis server */
Moralis.serverUrl = "https://k8xonp9zdso2.usemoralis.com:2053/server";
Moralis.appId = "FUBmCsmgmAV5tekbqguBb3lfpQxkhLiXlg3pXa5G";
const CONTRACT_ADDRESS = "0xab1EdA7fd6bEDECc28E48Fbc03c07249a672Ff6c";
const appIdref = Moralis.appId;
const serverUrlref = Moralis.serverUrl;
Moralis.start({serverUrlref, appIdref});

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.Web3.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

//verifie si l'utilisateur est deja connecter
async function init() {
   try {
      let user = Moralis.User.current();
      if (!user) {
        $("#btn-login").click( async () => {
            user = await Moralis.Web3.authenticate()
        })
      }
    renderGame();
   }catch(error) {
    console.log(error)
  }
}

init();


async function renderGame() {
  $("#btn-login").hide();

  //get and Render properties from smart contracts
  let animalId = 0;
  window.web3 = await Moralis.enableWeb3();
  let abi = await getabi();
  let contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
  let data = await contract.methods.getTokenDetails(animalId).call({from: ethereum.selectedAddress});
  console.log(data);
  renderPet(0, data);
  $("#game").show();
}

function renderPet(id, data) {
$("#pet_id").html(id);
$("#pet_degats").html(data.degats);
$("#pet_magie").html(data.magie);
$("#pet_endurance").html(date.endurance);

let deathTime = new Date(parsInt(data.lastMeal) + parseInt(data.endurance) * 1000);


$("#pet_famine").html(deathTime);


}




function getabi() {
  return new Promise( (res) => {
    $.getJSON("Token.json", ( (json) => {
      res(json.abi);
    }))

  })

}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/