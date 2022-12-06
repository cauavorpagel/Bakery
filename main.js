function cardCreate(name, product, originalPrice, newPrice) {
    return`
        <div class="swiper-slide">
            <div class="card">
            <p>${name}</p><img class="imgproduct" src="./img/${product}.jfif" alt=""><span>De ${originalPrice}</span><span>Por ${newPrice}<span>
            </div>
        </div>
    `
}

document.querySelector(".swiper-wrapper").innerHTML = `            
    
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}  
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}  
    ${cardCreate("Pão", "paoteste", "R$4,99", "R$2,99")}               
                
`