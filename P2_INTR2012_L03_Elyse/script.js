const listEl=document.getElementById("list-products")
const resultEl=document.getElementById("list-result")
const inputEl=document.getElementById("search-box")
console.log(inputEl)
inputEl.addEventListener("input",searchProducts)


const products=[
"iPhone",
"Xbox",
"mac",
"mouse",
  "laptop",
  "speaker",
  "Keyboard",
  "PC",
  "PS5",
  "headphones"
]


for(let i=0;i<products.length;i++){
  let productName=products[i];
  const liEl=document.createElement("li")
  liEl.innerHTML=productName
  listEl.appendChild(liEl)
}

function searchProducts(event){
  let query=event.target.value
  const result=[]
  for(let i=0;i<products.length;i++){
    let product=products[i]
    if(query.length>0 && product.indexOf(query)>-1){
      result.push(product)
    }
  }
resultEl.innerHTML="";//clear previous result

for(let i=0;i<result.length;i++){
  let productName=result[i];
  const liEl=document.createElement("li")
  liEl.innerHTML=productName
  resultEl.appendChild(liEl)
}

  
  return result
}