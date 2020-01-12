//variable decl

let score, random = 0, currScore1 = 0, currScore2 = 0, activePlayer = 0, dice;
init();



// while(1){
document.querySelector('.btn-roll').addEventListener('click', () => {

    // while(currScore1!=1){
    dice = Math.floor(Math.random() * 6) + 1;
    let Dom = document.querySelector('.img-thumbnail')
    Dom.style.display = 'block';
    Dom.src = 'dice-' + dice + '.png';
    if (dice !== 1) {
        //add score
        random += dice;
        document.querySelector("#scr-" + activePlayer).textContent = random;
        let x = parseInt(document.querySelector("#glb-"+activePlayer).textContent);
        if((random+x) >20){
            setTimeout(()=>
        {
            nextPlyr();
        },800);
        }

    } else {
        //next player
        setTimeout(()=>
        {
            nextPlyr();
        },800);
        // nextPlyr();

    }

    // }

});

function nextPlyr() {
    document.querySelector("#scr-" + activePlayer).textContent = 0;
    document.querySelector('.dot-'+activePlayer).style.display = 'none';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    random = 0;
    document.querySelector('.img-thumbnail').style.display = 'none';
    document.querySelector('.dot-'+activePlayer).style.display = 'block';

    document.querySelector("#scr-" + activePlayer).textContent = 0;
}

document.querySelector('.btn-hold').addEventListener('click', () => {
    //add to global
    score[activePlayer] += random;
    ///check if more than 50 or not
    if(score[activePlayer]>20){
        score[activePlayer] -= random;
        setTimeout(()=>
        {
            nextPlyr();
        },800);
    }else{

    


    document.querySelector("#glb-" + activePlayer).textContent = score[activePlayer];

    if (score[activePlayer] === 20) {
        //winner and loser
        document.querySelector('#ply-' + activePlayer).textContent = 'Winner !!';
        document.querySelector('.img-thumbnail').style.display = 'none';
        document.querySelector(".btn-hold").disabled = true;
        document.querySelector(".btn-roll").disabled = true;
    }
    else {
        nextPlyr();
    }
}
    // document.querySelector('.ply-'+activePlayer).textContent = 'Winner !!';



    //update ui

    //check if player won

});


function init(){

    random = 0;
    score = [0, 0];
    activePlayer=0;
    //hiding the dice in begining
document.querySelector('.img-thumbnail').style.display = 'none';
document.querySelector("#glb-1").textContent = 0;
document.querySelector("#glb-0").textContent = 0;
document.querySelector("#scr-1").textContent = 0;
document.querySelector("#scr-0").textContent = 0;
document.querySelector('#ply-0').textContent = 'PLAYER 1';
document.querySelector('#ply-1').textContent = 'PLAYER 2';
document.querySelector('.dot-1').style.display = 'none';
// document.querySelector('.dot-0').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', () => {
init();
   
document.querySelector(".btn-hold").disabled = false;
        document.querySelector(".btn-roll").disabled = false;
});
// }
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });


