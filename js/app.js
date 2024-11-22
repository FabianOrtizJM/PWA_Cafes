const container = document.querySelector(".container")
const coUees = [
 { name: "Perspiciatis", image: "img/cafe1.jpg" },
 { name: "Voluptatem", image: "img/cafe2.JPG" },
 { name: "Explicabo", image: "img/cafe3.jpeg" },
 { name: "Rchitecto", image: "img/cafe4.jpeg" },
 { name: " Beatae", image: "img/cafe5.jpeg" },
 { name: " Vitae", image: "img/cafe6.jpeg" },
 { name: "Inventore", image: "img/cafe7.jpeg" },
 { name: "Veritatis", image: "img/cafe8.jpg" },
 { name: "Accusantium", image: "img/cafe9.jpg" },
]

const showCoUees = () => {
 let output = ""
 coUees.forEach(
 ({ name, image }) =>
 (output += `
 <div class="card">
 <img class="card--avatar" src=${image} />
 <h1 class="card--title">${name}</h1>
 <a class="card--link" href="#">Taste</a>
 </div>
 `)
 )
 container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCoUees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
    })
   }