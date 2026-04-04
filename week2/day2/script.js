const products = [
  {
    name: "Men T-Shirt",
    category: "Men",
    price: 499,
    image: "img1.jpeg"
  },
  {
    name: "Men Jeans",
    category: "Men",
    price: 999,
    image: "img2.jpeg"
  },

  {
    name: "Women Dress",
    category: "Women",
    price: 1200,
    image: "img3.jpeg"
  },
  {
    name: "Women Top",
    category: "Women",
    price: 700,
    image: "img4.jpeg"
  },

  {
    name: "Kids Shirt",
    category: "kids",
    price: 300,
    image: "img5.jpeg"
  },
  {
    name: "Kids Shorts",
    category: "kids",
    price: 400,
    image: "img6.jpeg"
  },


  {
    name: "Oversized Hoodie",
    category: "genz",
    price: 1500,
    image: "img7.jpeg"
  },
  {
    name: "Baggy Pants",
    category: "genz",
    price: 1300,
    image: "img8.jpeg"
  }
];

const container = document.getElementById("product-container")

function renderProducts(data){
  container.innerHTML = ""

  data.forEach((p)=>{
    const div = document.createElement("div")
    div.className ="product-card"

   div.innerHTML = `
   <img src ="${p.image}" alt="${p.name}">
   <h3>${p.name}</h3>
   <p>Category: ${p.category}</p>
   <p>Price: ₹${p.price}</p>
   `
   container.appendChild(div)
  })
   
}

renderProducts(products)
const searchInput = document.getElementById("search")
const categorySelect = document.getElementById("category")
const priceSelect = document.getElementById("price")
const sortSelect = document.getElementById("sort")
const toggleBtn = document.getElementById("toggleView");


function applyFilters(){
  let filtered = [...products]

  const searchValue = searchInput.value.toLowerCase()
  const categoryValue = categorySelect.value
  const priceValue = priceSelect.value
  const sortValue = sortSelect.value

  if(searchValue){
    filtered = filtered.filter((p)=>p.name.toLowerCase().includes(searchValue))
  }

  if(categoryValue !== "all"){
     filtered = filtered.filter((p) => p.category === categoryValue)  
  }

  if(priceValue =="low"){
    filtered = filtered.filter((p)=>p.price <500)
  } 


  if(priceValue === "mid"){
    filtered = filtered.filter((p) => p.price >= 500 && p.price <= 1000)
  }

  if(priceValue === "high"){
    filtered = filtered.filter((p) => p.price > 1000)
  }

  if(sortValue === "low-high"){
    filtered.sort((a,b)=>a.price-b.price)
  }

  if(sortValue === "high-low"){
    filtered.sort((a,b)=> b.price - a.price)
  }

  renderProducts(filtered)
}

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("grid-view");
  container.classList.toggle("list-view");

  toggleBtn.textContent = container.classList.contains("list-view") ? "Switch to Grid" : "Switch to List";
});


searchInput.addEventListener("input",applyFilters)
categorySelect.addEventListener("change",applyFilters)
priceSelect.addEventListener("change",applyFilters)
sortSelect.addEventListener("change",applyFilters)


