const input = document.getElementById('input-filter')
let jobList = document.getElementsByClassName('l-title')
let cardList = document.getElementsByClassName('l-card')

function filter(){
  // a is the input variable
  let filter = input.value.toUpperCase()
  for (i = 0; i < jobList.length; i++){
    let a = jobList[i].innerHTML.toUpperCase()
    if (a.indexOf(filter) > -1){
      cardList[i].style.display = "flex"
    } else {
      cardList[i].style.display = "none"
    }

    if (filter == ""){
      cardList[i].style.display = "flex"
    }
  } 

}