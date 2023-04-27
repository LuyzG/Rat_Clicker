const cheeseImage = document.getElementById('cheeseImage')

/* variaveis (queijo, queijo por segundo, construções, as divs deles) */
// queijo
let cheeseAmount = 0
const cheeseAmountDiv = document.getElementById('cheeseAmount')
let cheesePerSecond = 0
let cheesePerClick = 1

// pata de rato
const pawOfRatButton = document.getElementById('pawOfRatButton')
let pawOfRatAmount = 0
const pawOfRatPriceSpan = document.getElementById('pawOfRatPrice')
let pawOfRatPrice = 10

// rato
const ratButton = document.getElementById('ratButton')
let ratAmount = 0
const ratPriceSpan = document.getElementById('ratPrice')
let ratPrice = 50

// GABIRU
const gabiruButton = document.getElementById('gabiruButton')
let gabiruAmount = 0
const gabiruPriceSpan = document.getElementById('gabiruPrice')
let gabiruPrice = 1000

/* funções */
// função pra desabilitar todos os botões
function disableButtons(){
    if(cheeseAmount<pawOfRatPrice){
        pawOfRatButton.disabled=true
    }
    if(cheeseAmount<ratPrice){
        ratButton.disabled=true
    }
    if(cheeseAmount<gabiruPrice){
        gabiruButton.disabled=true
    }
}
disableButtons()

// reativar os botões
function enableButtons(){
    if(cheeseAmount>=ratPrice){
        ratButton.disabled=false
    }
    if(cheeseAmount>=pawOfRatPrice){
        pawOfRatButton.disabled=false
    }
    if(cheeseAmount>=gabiruPrice){
        gabiruButton.disabled=false
    }
}
enableButtons()

// clica         CLICA            CLICAAAAA
cheeseImage.onclick = function() {
    cheeseAmount+=cheesePerClick
    enableButtons()
    cheeseAmountDiv.textContent = `Queijo: ${cheeseAmount.toFixed(1)}`
}

/* comprar construções */
// comprar pata de rato
pawOfRatButton.onclick = function(){
    cheeseAmount -= pawOfRatPrice
    pawOfRatPrice *= 1.30
    pawOfRatAmount+=1
    cheesePerClick+=1
    disableButtons()
    enableButtons()   
    this.innerHTML = `Patas de rato: ${pawOfRatAmount}`
    pawOfRatPriceSpan.innerHTML = `${pawOfRatPrice.toFixed(1)} queijos`
}

//comprar rato
ratButton.onclick = function(){
    cheeseAmount -= ratPrice
    ratPrice *= 1.30
    ratAmount+=1
    cheesePerSecond+=1
    disableButtons()
    enableButtons()    
    this.innerHTML = `Ratos: ${ratAmount}`
    ratPriceSpan.innerHTML = `${ratPrice.toFixed(1)} queijos`
}

// comprar GABIRU
gabiruButton.onclick = function(){
    cheeseAmount -= gabiruPrice
    gabiruPrice *= 1.30
    gabiruAmount += 1
    cheesePerSecond+=100
    disableButtons()
    enableButtons()    
    this.innerHTML = `Gabirus: ${gabiruAmount}`
    gabiruPriceSpan.innerHTML = `${gabiruPrice.toFixed(1)} queijos`
}

/* queijo por segundo  */
setInterval(
    function increaseCheesePerSecond(){
        cheeseAmount += cheesePerSecond
        if(cheeseAmount>=ratPrice){
            ratButton.disabled=false
        }    
    }, 1000
)
function loop (){
    cheeseAmountDiv.textContent = `Queijo: ${cheeseAmount.toFixed(1)}`
    enableButtons()
    requestAnimationFrame(loop)
}
loop()