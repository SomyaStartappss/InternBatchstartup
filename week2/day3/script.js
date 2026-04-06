const toggleBtn = document.querySelector(".toggle-btn")
const body = document.body

let savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
    body.classList.add("dark")
    toggleBtn.classList.add("active")
}

toggleBtn.addEventListener("click",()=>{
    body.classList.toggle("dark")
    toggleBtn.classList.toggle("active")


if(body.classList.contains("dark")){
    localStorage.setItem("theme","dark")
}else{
    localStorage.setItem("theme","light")
}
})