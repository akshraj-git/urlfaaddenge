const API="http://localhost:5500"
let allPGs=[]

function scrollToStays(){
document.getElementById("stays").scrollIntoView({behavior:"smooth"})
}

function openAuth(){authModal.style.display="flex"}
function closeAuth(){authModal.style.display="none"}

function showSignup(){
loginForm.classList.add("hidden")
signupForm.classList.remove("hidden")
}
function showLogin(){
signupForm.classList.add("hidden")
loginForm.classList.remove("hidden")
}

function signupUser(){
if(signupPassword.value!==signupConfirm.value){
alert("Passwords mismatch");return
}
fetch(API+"/signup",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name:signupName.value,
email:signupEmail.value,
password:signupPassword.value,
phone:signupPhone.value
})
}).then(r=>r.json()).then(d=>alert(d.message))
}

function loginUser(){
fetch(API+"/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
email:loginEmail.value,
password:loginPassword.value
})
}).then(r=>r.json()).then(d=>alert(d.message))
}

async function loadPGs(){
let res=await fetch("../js/pgs.json")
allPGs=await res.json()
renderPGs(allPGs)
}

function renderPGs(pgs){
pgContainer.innerHTML=""
pgs.forEach(pg=>{
let card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${pg.image}">
<h4>${pg.name}</h4>
<p>₹${pg.price}</p>
<p>⭐ ${pg.rating} (${pg.reviews})</p>
`

card.onclick=()=>location.href="pgdetails.html?id="+pg.id
pgContainer.appendChild(card)
})
}

window.onload=loadPGs
function applyFilters(){

let search = document.getElementById("searchBar").value.toLowerCase()
let price = document.getElementById("priceFilter").value
let location = document.getElementById("locationFilter").value
let type = document.getElementById("typeFilter").value
let amenity = document.getElementById("amenityFilter").value

let filtered = allPGs.filter(pg=>{

// SEARCH
if(search && !pg.name.toLowerCase().includes(search))
return false

// LOCATION (distance)
if(location !== "all" && pg.location !== location)
return false

// TYPE
if(type !== "all" && pg.type !== type)
return false

// AMENITY
if(amenity !== "all" && !pg.amenities.includes(amenity))
return false

// PRICE
if(price !== "all"){
let [min,max] = price.split("-")
if(pg.price < min || pg.price > max)
return false
}

return true

})

renderPGs(filtered)

}
