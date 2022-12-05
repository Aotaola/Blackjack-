const cardContainer = document.getElementById("card-container")

fetch("")
.then(request =>request.json())
.then(cards=>{
    cards.forEach(card=>{
        const cardImage = document.createElement("cardImage")
        cardContainer.append(card)
        cardImage.src = card.image
    })
})