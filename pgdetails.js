let id=new URLSearchParams(location.search).get("id")
let pg

async function load(){
let res=await fetch("../js/pgs.json")
let data=await res.json()
pg=data.find(x=>x.id==id)

pgName.innerText=pg.name
pgPrice.innerText="₹"+pg.price
pgDesc.innerText=pg.description
hero.style.background=`url(${pg.image}) center/cover`

pg.amenities.forEach(a=>{
amenities.innerHTML+=`<div>${a}</div>`
})

loadReviews()
}

function loadReviews(){
let stored=JSON.parse(localStorage.getItem("reviews_"+id))||[]
reviewContainer.innerHTML=""
let total=0

stored.forEach(r=>{
total+=r.rating
reviewContainer.innerHTML+=`
<div>
<h4>${r.name}</h4>
<p>${r.text}</p>
</div>`
})

let newRating=((pg.rating*pg.reviews)+total)/(pg.reviews+stored.length)
ratingBox.innerText="⭐ "+newRating.toFixed(1)
}

function addReview(){
let arr=JSON.parse(localStorage.getItem("reviews_"+id))||[]
arr.push({
name:revName.value,
text:revText.value,
rating:parseInt(revRating.value)
})
localStorage.setItem("reviews_"+id,JSON.stringify(arr))
loadReviews()
}

window.onload=load
