function cardCreate(name, product, originalPrice, newPrice) {
    return`
        <div class="swiper-slide">
            <div class="card">
            <p>${name}</p><img class="imgproduct" src="./img/dayProducts/img-${product}.jfif" alt=""><span>De ${originalPrice}</span><span>Por ${newPrice}<span>
            </div>
        </div>
    `
}

document.querySelector(".swiper-wrapper").innerHTML = `            
    
    ${cardCreate("Pastél", "pastel", "R$7,99", "R$4,99")}
    ${cardCreate("Pão", "bread", "R$4,99", "R$2,99")}
    ${cardCreate("Bolo de chocolate", "chocolateCake", "R$29,99", "R$15,99")}
    ${cardCreate("Risóles de Frango", "risólesFrango", "R$10,99", "R$7,99")}  
`