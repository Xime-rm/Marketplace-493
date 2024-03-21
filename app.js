


function createProducts (product) {
    const cardProduct = document.createElement ('buton')
    cardProduct.classList.add('card-products')

    const containerCard = document.createElement ('div')
    containerCard.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = product.image
    imgCard.alt = product.tittle

    const tittleCard = document.createElement('h2')
    tittleCard.textContent = product.tittle

    cardProduct.appendChild(containerCard)
    containerCard.appendChi(imgCard)
    containerCard.appendChild(tittleCard)

    document.querySelector('.container-products').appendChild(cardProduct)

