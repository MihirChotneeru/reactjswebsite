function rpsplay(yourchoice){
    console.log(yourchoice);
    var humanchoice , botchoice;
    humanchoice = yourchoice.id;
    botchoice = numtochoice(randinrps());
    console.log('computer choice ', botchoice);

    results = decide(humanchoice , botchoice);
    console.log(results);

    message = finalmessage(results);
    console.log(message);
     
    rpsfrontend(yourchoice.id, botchoice , message);
}

function randinrps(){
    return Math.floor(Math.random() * 3);
}
function numtochoice(number){
    return ['rock','paper','scissors'] [number];
}
function decide(yourchoice , computerchoice){
    var rpsdatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
    var Yscore = rpsdatabase[yourchoice][computerchoice];
    var Bscore = rpsdatabase[computerchoice][yourchoice];

    return [Yscore , Bscore];
}
function finalmessage([Yscore , Bscore]){
    if(Yscore === 0){
        return {'message': 'YOU LOST :(', 'color':'red'};
    }
    else if(Yscore === 0.5) {
        return {'message': 'YOU TIED ', 'color':'blue'};
    }
    else{
        return {'message': 'YOU WON ', 'color':'green'};
    }
}
function rpsfrontend(Himgchoice , Bimgchoice , finalmessage){
    var imagesdatabase = {
        'rock' : document.getElementById('rock').src ,
        'paper' : document.getElementById('paper').src ,
        'scissors' : document.getElementById('scissors').src
    }
    //lets remove images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var msgdiv = document.createElement('div');

    humandiv.innerHTML = "<img src= '" + imagesdatabase[Himgchoice] +"' height =150 width =150 style='box-shadow: 0px 10px 50px rgb(15, 15, 15);'>"
    msgdiv.innerHTML = "<h1 style ='color:" + finalmessage['color'] + "; font-size: 50px; padding: 30px; '>" + finalmessage['message']+ "</h1>"
    botdiv.innerHTML = "<img src= '" + imagesdatabase[Bimgchoice] +"' height =150 width =150 style='box-shadow: 0px 10px 50px red'>"
    

    document.getElementById('rps-div').appendChild(humandiv);
    document.getElementById('rps-div').appendChild(msgdiv);
    document.getElementById('rps-div').appendChild(botdiv);
    


}
