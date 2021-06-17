let blackjackgame ={
    'you': {'scorespan': '#your-bj-result', 'div':'#your-box' ,'score': 0},
    'dealer': {'scorespan': '#dealer-bj-result', 'div':'#dealer-box' ,'score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsmap':{'2':2 ,'3':3 ,'4':4 ,'5':5 ,'6':6 ,'7':7 ,'8':8 ,'9':9 ,'10':10 ,'K':10 ,'Q':10 ,'J':10 ,'A':[1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand':false ,
    "turnsover":false,
};
const YOU = blackjackgame['you']
const DEALER = blackjackgame['dealer']
const hitsound = new Audio('sounds/swish.m4a');
const winsound = new Audio('sounds/cash.mp3');
const losesound = new Audio('sounds/aww.mp3');


document.querySelector('#bj-hit-button').addEventListener('click', bjhit);

document.querySelector('#bj-stand-button').addEventListener('click', dealerlogic);

document.querySelector('#bj-deal-button').addEventListener('click', bjdeal);

function bjhit(){
    if (blackjackgame['isStand'] === false) {
        let card = randomcard();
        showcard(card , YOU);
        updatescore(card , YOU);
        showscore(YOU); 
    }
}

function randomcard(){
    let randindex = Math.floor(Math.random() * 13);
    return blackjackgame['cards'][randindex];
}

function showcard(card , activeplayer ){
    if(activeplayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src =  `images/${card}.png`;
        document.querySelector(activeplayer['div']).appendChild(cardImage);
        hitsound.play();
    }
}
function bjdeal(){
    if (blackjackgame['turnsover'] === true){

        blackjackgame['isStand']= false;
        let yourimages = document.querySelector('#your-box').querySelectorAll('img'); 
        let dealerimages = document.querySelector('#dealer-box').querySelectorAll('img');
        for(let i=0; i<yourimages.length; i++){
            yourimages[i].remove();
        }
        for(let i=0; i<dealerimages.length; i++){
            dealerimages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score']=0;
        document.querySelector('#your-bj-result').textContent = 0;
        document.querySelector('#dealer-bj-result').textContent = 0;
        document.querySelector('#bj-result').textContent = " Let's Play";
        document.querySelector('#bj-result').style.color = 'black';
        
        document.querySelector('#your-bj-result').style.color = 'black';
        document.querySelector('#dealer-bj-result').style.color = 'black';

        blackjackgame['turnsover'] = true;  
    }
}    
function updatescore(card , activeplayer){
    // if adding 11 keeps the score < 21 then add 11 , else 1 ;
    if(card === 'A'){
        if(activeplayer['score'] + blackjackgame['cardsmap'][card][1] <= 21){
            activeplayer['score'] += blackjackgame['cardsmap'][card][1];
        }
        else {
            activeplayer['score'] += blackjackgame['cardsmap'][card][0];
        }
    }
    else{
        activeplayer['score'] += blackjackgame['cardsmap'][card];
    }    
}
function showscore(activeplayer){
    if(activeplayer['score'] > 21){
        document.querySelector(activeplayer['scorespan']).textContent = 'BUSTED !';
        document.querySelector(activeplayer['scorespan']).style.color = 'red';
    }
    else{
    document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
    }
}
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve , ms));
}
async function dealerlogic(){
    blackjackgame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackgame['isStand'] === true){
        let card = randomcard();
        showcard(card , DEALER);
        updatescore(card , DEALER);
        showscore(DEALER);
        await sleep(1000);
    }
    blackjackgame['turnsover'] = true;
    let winner = computewinner();
    showresult(winner);
}
function computewinner(){
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            blackjackgame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            blackjackgame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score']){
            blackjackgame['draws']++;
        } 
    }    
    else if (YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackgame['losses']++;
        winner = DEALER;
    }
    else if( YOU['score'] > 21 && DEALER['score'] > 21 ){
        blackjackgame['draws']++ ;
    }
    return winner;
}
function showresult ( winner ){
    let message , msgcolor;
    if (blackjackgame['turnsover'] === true){

     
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjackgame['wins'];
            messageq= 'YOU WON !';
            msgcolor = 'green';
            winsound.play();
        }
        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackgame['losses'];
            message= 'YOU LOST !';
            msgcolor = 'red';
            losesound.play();
        }
        else{
            document.querySelector('#draws').textContent = blackjackgame['draws'];
            message= 'YOU DREW !';
            msgcolor = 'blue';
        }
        document.querySelector('#bj-result').textContent = message;
        document.querySelector('#bj-result').style.color = msgcolor;
    }    
}