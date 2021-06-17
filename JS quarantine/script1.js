//age in days

function ageINDAYS() {
    var by = prompt('what year were you born in ?');
    var aid = (2021-by)*365
    var h1 = document.createElement('h1');
    var res = document.createTextNode('you are ' + aid + ' days old');
    h1.setAttribute('id', 'ageINDAYS');
    h1.appendChild(res);
    document.getElementById('flex-box-result').appendChild(h1);
}
 function reset(){
     document.getElementById('ageINDAYS').remove();
 }