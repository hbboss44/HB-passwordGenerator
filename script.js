
let range=document.querySelector(".length")
let lengthValue=document.querySelector(".length-value")
let allCheckbox=document.querySelectorAll("input[type='checkbox']")
let copyButton=document.querySelector(".copy-btn")
let displayPassword=document.querySelector(".password")
let copyAddress=document.querySelector(".copied-address")


copyButton.addEventListener("click",()=>{
  let text=displayPassword.textContent
  navigator.clipboard.writeText(text)

  copyButton.textContent='Copied!'
  copyAddress.style.display='block'
  setTimeout(() => {
    copyButton.textContent='Copy'
    copyAddress.style.display='none'
  }, 4000);
    
  
})
range.addEventListener("change",()=>{
        lengthValue.innerHTML= range.value
    })



let generarte=(length,uppercase,lowercase,numbers,specialcharacter)=>{
    let character='abcdefghijklmnopqrstuvwxyz'
    if (uppercase==true) {
      character+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    
    if (numbers==true) {
      character+='0123456789'
    }
    if (specialcharacter==true) {
      character+=')(*)&^%$#@!~`+_-={}|/.,[]'
    }
    let password=''
    for (let i = 0; i < length; i++) {
      password+=character.charAt(Math.floor(Math.random()*character.length))
    }
    return password
}

// let password=generarte(12,false,true,true,true)
// console.log(password);



let generatePassword=document.querySelector(".generate-btn")
generatePassword.addEventListener("click",()=>{
  console.log(allCheckbox);
  if ((allCheckbox[0].checked==true)&&(allCheckbox[1].checked==true)&&(allCheckbox[2].checked==true)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,true,true,true,true)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==false)&&(allCheckbox[1].checked==false)&&(allCheckbox[2].checked==false)&&(allCheckbox[3].checked==false)) {
    alert("You have to include atleast lowercase to generate a password")
  }
  if ((allCheckbox[0].checked==false)&&(allCheckbox[1].checked==false)&&(allCheckbox[2].checked==false)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,false,true,false,false)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==true)&&(allCheckbox[1].checked==false)&&(allCheckbox[2].checked==false)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,false,true,true,false)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==false)&&(allCheckbox[1].checked==true)&&(allCheckbox[2].checked==false)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,false,true,false,true)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==false)&&(allCheckbox[1].checked==false)&&(allCheckbox[2].checked==true)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,true,true,false,false)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==false)&&(allCheckbox[1].checked==true)&&(allCheckbox[2].checked==true)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,true,true,false,true)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==true)&&(allCheckbox[1].checked==false)&&(allCheckbox[2].checked==true)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,true,true,true,false)
      displayPassword.textContent=password
  }
  if ((allCheckbox[0].checked==true)&&(allCheckbox[1].checked==true)&&(allCheckbox[2].checked==false)&&(allCheckbox[3].checked==true)) {
    let password=generarte(range.value,false,true,true,true)
      displayPassword.textContent=password
  }
})

