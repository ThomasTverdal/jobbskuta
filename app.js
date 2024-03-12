const headerCont = document.querySelector('header');
const loginButton = document.querySelector('.login-img');
const blackscreen = document.querySelector('#bb')

const loggedIn = document.querySelector('.loggedinn-cont')
const notLoggedIn = document.querySelector('.user-cont')
let inLoginScreen = false
let loggedInFailed = false

const popupCont = document.querySelector('.popupMsg')
let closePopupCont = document.querySelector('.closeCont')

const vennerCont = document.querySelector('.venner-cont')
const vennerClose = document.querySelector('.venner-close')
const mineJobberCont = document.querySelector('.minejobber-cont')
const mineJobberClose = document.querySelector('.minejobber-close')
let popupIsOpen = false

let userDatabase = []
userDatabase[0] = [
  {name: "admin"},
  {password: "1234"}
]
userDatabase[1] = [
  {name: "Thomas"},
  {password: "Samoht"}
]
userDatabase[2] = [
  {name: "Jørgen"},
  {password: "1"}
]

window.onload = function () {
  if (localStorage.getItem('loggedIn') == "true"){
    login()
  }
}

loginButton.addEventListener('click', function loginpopup() {
  let cont = document.createElement('div')
  cont.style.position = "absolute";
  cont.style.right = "50%";
  cont.style.bottom = "50%";
  cont.style.width = "65vw";
  cont.style.height = "60vh",

  cont.style.zIndex = "2";

  cont.style.backgroundColor = "white";
  cont.style.boxShadow = "0px 2px 8px 0px"
  cont.className += "popupMsg"


  let closeCont = document.createElement('div')
  closeCont.innerHTML = "X";

  closeCont.style.position = "absolute";
  closeCont.style.right = "0"
  closeCont.style.top = "0"
  closeCont.style.margin = "1rem"

  closeCont.className += "closeCont";
  closeCont.onclick  = function () {
    document.body.removeChild(document.querySelector('.popupMsg'))
    inLoginScreen = false
  };
  
  let title = document.createElement('div')
  let username = document.createElement('div')
  let usernameInput = document.createElement('input')

  let password = document.createElement('div')
  let passwordInput = document.createElement('input')

  let button = document.createElement('button')
  let newUser = document.createElement('button')  

  title.innerHTML = "Log inn"
  title.style.width = "100%"
  title.style.textAlign = "center"
  title.style.fontSize = "2rem"

  usernameInput.style.display = "block"
  passwordInput.style.display = "block"

  usernameInput.style.width = "50%"
  usernameInput.style.height = "5vh"
  passwordInput.style.width = "50%"
  passwordInput.style.height = "5vh"

  usernameInput.style.marginLeft = "50%";
  usernameInput.style.transform = "translate(-50%)"
  usernameInput.style.marginBottom = "2vh"
  passwordInput.style.marginLeft = "50%";
  passwordInput.style.transform = "translate(-50%)"
  passwordInput.style.marginBottom = "2vh"

  usernameInput.className += "usernameAuth"
  passwordInput.className += "passwordAuth"

  username.style.marginTop = "4vh"
  username.innerHTML = "Email: "
  password.innerHTML = "Passord: "
  username.style.fontSize = "1.5rem"
  password.style.fontSize = "1.5rem"
  username.style.textAlign = "center"
  password.style.textAlign = "center"

  button.style.width = '20%'
  button.style.height = "5vh"
  button.style.marginLeft = "50%"
  button.style.transform = "translate(-50%)"
  button.innerHTML = "Confirm";

  button.onclick = function () {
    loginauth()
  }



  newUser.innerHTML = "Lag en bruker"
  newUser.style.transform = "translate(-50%)"
  newUser.style.marginRight = "50%"
  newUser.style.marginLeft = "50%"
  newUser.style.marginTop = "1vh"
  newUser.style.width = "20%"
  newUser.style.height = "5vh"

  newUser.onclick = function () {
    document.body.removeChild(document.querySelector('.popupMsg'))
    lagBruker()
  }

  if (inLoginScreen == false){
    document.body.appendChild(cont)
    document.querySelector('.popupMsg').appendChild(closeCont)
    document.querySelector('.popupMsg').appendChild(title)
    document.querySelector('.popupMsg').appendChild(username)
    document.querySelector('.popupMsg').appendChild(usernameInput)
    document.querySelector('.popupMsg').appendChild(password)
    document.querySelector('.popupMsg').appendChild(passwordInput)
    document.querySelector('.popupMsg').appendChild(button)
    if (localStorage.getItem('email') == null){
      document.querySelector('.popupMsg').appendChild(newUser) 
    }
    
  }
  inLoginScreen = true
})

// function that authenticates the user
function loginauth() {
  const validUsername = document.querySelector('.usernameAuth').value
  const validPassword = document.querySelector('.passwordAuth').value

  for (let i = 0; i < userDatabase.length; i++){    
    if (validUsername == userDatabase[i][0].name && validPassword == userDatabase[i][1].password){
      document.body.removeChild(document.querySelector('.popupMsg'))
      inLoginScreen = false
      login()
    }
  }

  if (validPassword == localStorage.getItem('passord') && validUsername == localStorage.getItem('email')){
    document.body.removeChild(document.querySelector('.popupMsg'))
    inLoginScreen = false
    login()
  }

  if((validPassword != localStorage.getItem('passord') && validUsername != localStorage.getItem('email'))){
    let loginFailed = document.createElement('div')

    loginFailed.innerHTML = "Login Failed"
    loginFailed.style.marginTop = "2vh"
    loginFailed.style.color = "red"
    loginFailed.style.width = "100%"
    loginFailed.style.textAlign = "center"
    
    document.querySelector('.popupMsg').appendChild(loginFailed)
  }
}

function login() {
  localStorage.setItem('loggedIn', true)
  loggedIn.style.display = "flex"
  notLoggedIn.style.display = "none"
}

function logout() {
  localStorage.setItem('loggedIn', false)
  loggedIn.style.display = "none"
  notLoggedIn.style.display = "flex"
}

function lagBruker(){
  let cont = document.createElement('div')
  cont.style.position = "absolute";
  cont.style.right = "50%";
  cont.style.bottom = "50%";
  cont.style.width = "65vw";
  cont.style.height = "50vh",

  cont.style.zIndex = "2";

  cont.style.backgroundColor = "white";
  cont.style.boxShadow = "0px 2px 8px 0px"
  cont.className += "popupMsg"


  let closeCont = document.createElement('div')
  closeCont.innerHTML = "X";

  closeCont.style.position = "absolute";
  closeCont.style.right = "0"
  closeCont.style.top = "0"
  closeCont.style.margin = "1rem"

  closeCont.className += "closeCont";
  closeCont.onclick  = function () {
    document.body.removeChild(document.querySelector('.popupMsg'))
    inLoginScreen = false
  };

  let title = document.createElement('div')
  let username = document.createElement('div')
  let usernameInput = document.createElement('input')

  let password = document.createElement('div')
  let passwordInput = document.createElement('input')

  let button = document.createElement('button')
  let newUser = document.createElement('button')

  title.innerHTML = "Lag en bruker"
  title.style.marginLeft = "50%"
  title.style.width = "20vw"
  title.style.fontSize = "2rem"

  usernameInput.style.display = "block"
  passwordInput.style.display = "block"

  usernameInput.style.width = "50%"
  usernameInput.style.height = "5vh"
  passwordInput.style.width = "50%"
  passwordInput.style.height = "5vh"

  usernameInput.style.marginLeft = "50%";
  usernameInput.style.transform = "translate(-50%)"
  usernameInput.style.marginBottom = "2vh"
  passwordInput.style.marginLeft = "50%";
  passwordInput.style.transform = "translate(-50%)"
  passwordInput.style.marginBottom = "2vh"

  usernameInput.className += "usernameAuth"
  passwordInput.className += "passwordAuth"

  username.style.marginTop = "4vh"
  username.innerHTML = "Email: "
  password.innerHTML = "Passord: "
  username.style.fontSize = "1.5rem"
  password.style.fontSize = "1.5rem"
  username.style.textAlign = "center"
  password.style.textAlign = "center"

  button.style.width = '20%'
  button.style.height = "5vh"
  button.style.marginLeft = "50%"
  button.style.transform = "translate(-50%)"
  button.innerHTML = "Confirm";

  button.onclick = function () {
    lagBrukerAuth()
  }

  document.body.appendChild(cont)
  document.querySelector('.popupMsg').appendChild(closeCont)
  document.querySelector('.popupMsg').appendChild(title)
  document.querySelector('.popupMsg').appendChild(username)
  document.querySelector('.popupMsg').appendChild(usernameInput)
  document.querySelector('.popupMsg').appendChild(password)
  document.querySelector('.popupMsg').appendChild(passwordInput)
  document.querySelector('.popupMsg').appendChild(button)
}

function lagBrukerAuth(){
  let emailAuth = document.querySelector('.usernameAuth').value
  let passordAuth = document.querySelector('.passwordAuth').value

  localStorage.setItem('email', emailAuth)
  localStorage.setItem('passord', passordAuth)
  inLoginScreen = false
  document.body.removeChild(document.querySelector('.popupMsg'))
}

function open_venner() {
  if (mineJobberCont.style.display != "block"){
    vennerCont.style.display = "block"
  } else{
    vennerCont.style.display = "block"
    mineJobberCont.style.display = "none"
  }
  popupIsOpen = true
}

function close_venner() {
  vennerCont.style.display = "none"
  popupIsOpen = false
}

function open_mineJobber() {
  if(vennerCont.style.display != "block"){
    mineJobberCont.style.display = "block"
  } else {
    mineJobberCont.style.display = "block"
    vennerCont.style.display = "none"
  }
  popupIsOpen = true
}

function close_minejobber () {
  mineJobberCont.style.display = "none"
  popupIsOpen = false
}

const jobbData = [
  {title: "jobb 1", pris: "200kr", desk: "her kommer beskrivelsen", lat: "", lng: ""},
  {title: "jobb 2", pris: "100kr", desk: "her kommer beskrivelsen", lat: "", lng: ""},
  {title: "jobb 3", pris: "300kr", desk: "her kommer beskrivelsen", lat: "", lng: ""},
  {title: "jobb 4", pris: "100kr", desk: "her kommer beskrivelsen", lat: "", lng: ""},
  {title: "jobb 5", pris: "500kr", desk: "her kommer beskrivelsen", lat: "", lng: ""}
]

function view_info(lc){ 
  let cont = document.createElement('div')
  cont.style.position = "absolute";
  cont.style.right = "50%";
  cont.style.bottom = "50%";
  cont.style.width = "65vw";
  cont.style.height = "60vh",

  cont.style.zIndex = "2";

  cont.style.backgroundColor = "white";
  cont.className += "popupMsg"


  let closeCont = document.createElement('div')
  closeCont.innerHTML = "X";

  closeCont.style.position = "absolute";
  closeCont.style.right = "0"
  closeCont.style.top = "0"
  closeCont.style.margin = "1rem"

  closeCont.className += "closeCont";
  closeCont.onclick  = function () {
    document.body.removeChild(document.querySelector('.popupMsg'))
    document.querySelector('#bb').style.display = "none"
  };

  let title = document.createElement('div')

  let pdCont = document.createElement('div')
  let pris = document.createElement('div')
  let desc = document.createElement('div')

  let mapCont = document.createElement('div')

  title.innerHTML = jobbData[lc].title
  title.style.width = "100%"
  title.style.textAlign = "center"
  title.style.fontSize = "2rem"
  title.style.textTransform = "Capitalize"
  title.style.height = "4vh"
  
  pdCont.style.position = "absolute"
  pdCont.style.right = "0"
  pdCont.style.height = "56vh"
  pdCont.style.width = "32.5vw"
  pdCont.id = "pdCont"

  pdCont.style.display = "grid"
  pdCont.style.gridTemplateRows = "5vh 51vh" 

  pris.innerHTML = jobbData[lc].pris
  pris.style.textAlign = "center"

  desc.innerHTML = jobbData[lc].desk
  desc.style.textAlign = "left"

  mapCont.style.position = "absolute"
  mapCont.style.left = "0"
  mapCont.style.height = "56vh"
  mapCont.style.width = "32.5vw"
  mapCont.id = "jobMapCont"

  if (inLoginScreen == false && popupIsOpen == false){
    blackscreen.style.display = "block"
    document.body.appendChild(cont)
    document.querySelector('.popupMsg').appendChild(closeCont)
    document.querySelector('.popupMsg').appendChild(title)
    document.querySelector('.popupMsg').appendChild(pdCont)

    document.querySelector('#pdCont').appendChild(pris)
    document.querySelector('#pdCont').appendChild(desc)

    document.querySelector('.popupMsg').appendChild(mapCont)
  }
}