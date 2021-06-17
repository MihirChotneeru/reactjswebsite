
    var all_buttons= document.getElementsByTagName('button');
    var copyallbuttons = [];
    for(let i=0 ; i<all_buttons.length; i++){
        copyallbuttons.push(all_buttons[i].classList[1]);
    }

function buttoncolorchange(buttonthing){
    if(buttonthing.value === 'red'){
        redbutton ();
    }
    else if(buttonthing.value === 'blue'){
        bluebutton ();
    }
    else if(buttonthing.value === 'yellow'){
        yelbutton ();
    }
    else if(buttonthing.value === 'green'){
        greenbutton ();
    }
    else if(buttonthing.value === 'random'){
        randomcolors ();
    }
    else if(buttonthing.value === 'reset'){
        resetbutton ();
    }
}
function redbutton(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function bluebutton(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function greenbutton(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function yelbutton(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}
function resetbutton(){
    for(let i=0 ; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyallbuttons[i]);
    }
}
function randomcolors(){
    let choices = ['btn-primary','btn-waring','btn-danger','btn-success'];
    for(let i=0 ; i<all_buttons.length; i++){
        let randomnumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomnumber]);
    }
}