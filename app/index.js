
function setListnerToCard(){
    const cardAreaArr = document.querySelectorAll(".card-area");
    for(const cardArea of cardAreaArr){
        cardArea.addEventListener("click", function(evt){
            evt.currentTarget.classList.toggle("flip");
    
        });
    }
}




const main = document.querySelector("main");

const str = `
    <div   div class="card-area">
        <div class="card">
            <div class="card-back">뒷면</div>
            <div class="card-front">앞면</div>
        </div>
    </div>
`;


function generateCardList(){
    cardCnt = document.querySelector("#cardCnt").value;
    main.innerHTML = "";
    for(let i = 0; i < cardCnt; ++i){
        main.innerHTML += str;
    }
}


function handleClick(){
    generateCardList();
    setListnerToCard();
}






































