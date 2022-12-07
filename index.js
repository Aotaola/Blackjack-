const cardContainer = document.getElementById("card-container")
const theGreeting = document.getElementById("greeting")
const userName = document.getElementById("user-name")
const displayName = document.getElementById("display-name")
const giveCards = document.getElementById("give-cards")
const dealerCards = document.getElementById("dealer-cards")
const playerCards = document.getElementById("player-cards")
const hitCards = document.getElementById("hit-card")
const dealerScore = document.getElementById("dealer-score")
const playerScore = document.getElementById("player-score")
let cardCount = 0;
let DEALER_SCORE = 0;

theGreeting.addEventListener("submit", (e)=>{
    e.preventDefault()
    var nameContainer = document.createElement("id");
    nameContainer.innerText = userName.value + "'s Cards:";
    displayName.append(nameContainer);
})

fetch("http://localhost:3000/cards")
    .then((response) => response.json())
    .then((cards) => {
        let myArr = cards
        let cardValue = cards.value
        cards.forEach((cardObj) => {
        const cardImg = document.createElement('img');
        cardImg.src = cardObj.image;
        cardContainer.append(cardImg);
        cardImg.addEventListener("mouseover", (event)=>{
                cardImg.title = cardObj.value;         
           })
        })
        giveCards.addEventListener("click", (e)=>{
            e.preventDefault()
            var index =  Math.floor(Math.random() * myArr.length);
            var index2 =  Math.floor(Math.random() * myArr.length);
            var img = document.createElement("img")
            var img2 = document.createElement("img")
            //var num = document.createElement("id")
            //var num2 = document.createElement("id")
            
            dealerCards.append(img)
            playerCards.append(img2)
            img.src = myArr[index].image  
            img2.src = myArr[index2].image 
            //num.innerText = myArr[index].value
            //num2.innerText = myArr[index2].value
            //var scoreDealer = document.createElement("id")
            //dealerScore.count = 0
            //var dscore = document.createElement("id")
            // console.log(dealerScore)
            // console.log(myArr[index])
            DEALER_SCORE += +myArr[index].value
            // dealerScore.value = myArr[index].value
            let dealerTotal = +myArr[index].value + cardCount
            dealerScore.innerText = dealerTotal
            console.log(DEALER_SCORE)
            // DEALER_SCORE.append(dscore)
            dealerScore.append(DEALER_SCORE)

            //scoreDealer.append("id")


            // giveCards.forEach(() =>{
            // console.log(cardValue)
            // })
         })


        //  votesForm.addEventListener("submit", (e)=>{
        //     e.preventDefault();
        //     voteCount.innerText = parseInt(votes.value)+ parseInt(voteCount.innerText)
         

        hitCards.addEventListener("click",(e)=>{
            e.preventDefault()
            var index2 =  Math.floor(Math.random() * myArr.length);
            var img2 = document.createElement("img")
            playerCards.append(img2)
            img2.src = myArr[index2].image 

        })
      }
    )

