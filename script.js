
const formEl=document.getElementById("form")

/*target of the event*/
formEl.addEventListener("submit",formValidation)

function formValidation(event){
  event.preventDefault()

let username=event.target.uname.value;
let email=event.target.email.value;
let password=event.target.password.value;

if(validatePassword(password) && validateEmail(email) && validateUsername(username)){
  console.log("Form submitted successefully")
}else{
  console.log("Form submission failed")
}
  
}
function validateUsername(username){
  if(username.length==0){
    return false
  }

  for(let char of username){
   if(/[0-9a-zA-Z]/.test(char)==false){
     return false
   }
  }
 return true
}

function validatePassword(password){
  if(password.length<8) {
    return false
  }
  return true
}


function validateEmail(email){
  if(email.length==0){
    return false
  }

   let foundAt=false /*At=@ */
  for(let char of email){
    if(char=="@"){
      foundAt=true
    }
  }
 return foundAt
}

