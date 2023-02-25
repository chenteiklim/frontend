/* getMethod */
const API_URL = "https://swapi.dev/api/people/63 "
fetch(API_URL)
.then((response) => response.json())
  .then((data) => {
    let {name,skin_color,eye_color,birth_year}=data;
    console.log(`name:${name}, skin color: ${skin_color}, eye color: ${eye_color}, birthyear: ${birth_year}`)
  })

const API_URL2="https://swapi.dev/api/starships/58"
fetch(API_URL2)
.then((response)=>response.json())
.then((data)=>{
    let {hyperdrive_rating,cost_in_credits,manufacturer}=data
    console.log(`hyperdrive_rating: ${hyperdrive_rating}, cost in credits: ${cost_in_credits}, manufacturer: ${manufacturer}`)
})


const API_URL3="https://swapi.dev/api/planets/11"
fetch(API_URL3)
.then((response)=>response.json())
.then((data)=>{
    let {climate,terrain,orbital_period}=data
    console.log(`climate: ${climate}, terrain: ${terrain}, orbital period: ${orbital_period}`)
})

fetch("https://swapi.dev/api/people/11")
.then((response)=>response.json())
.then((data)=>{
    let {starships}=data
    starships.map((obj)=>{
        fetch(obj)
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    })
})