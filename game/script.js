let btn= document.getElementById('btn');
let msgBg= document.getElementById('show-msg'); 
let btnEnd= document.querySelector('.end');
let compScore= document.querySelector('.comp-score');
let userScore= document.querySelector('.user-score');
// let cont= document.querySelector('.container');


btn.addEventListener('click', () =>{
    msgBg.innerHTML= "<h3>Your Choice first</h3>"
    btn.style.position= 'absolute';
    btn.style.visibility= 'hidden';
    btnEnd.style.visibility= 'visible';
});


btnEnd.addEventListener('click', () =>{
    btnEnd.style.visibility= 'hidden';
    btn.style.visibility= 'visible';
    btn.style.position= 'relative';
    msgBg.innerHTML='<h3>Start Again!</h3>'
    compScore.innerText= 0;
    userScore.innerText= 0;
});

const choice= document.querySelectorAll('.choices');

const genCompChoice= () =>{
    const options= ['stone', 'ppr', 'scissors'];
    let randVal= Math.floor(Math.random()*3);
    return options[randVal];
}





const Score= (winner) =>{
    if (winner=='comp'){ 
        compScore.innerText= parseInt(compScore.innerText)+1;
    }

    else if(winner=='none'){
        msgBg.innerHTML='<strong>Match Draw!</strong>'
    }

    else{ 
        userScore.innerText= parseInt(userScore.innerText)+1;
          
    }
}


const drawGame= () =>{
    console.log('Match Draw!')
    // winner= 'none';
}

const playGame= (userChoice) =>{
    console.log(userChoice);
    let compChoice= genCompChoice();
    console.log(compChoice);

    let winner= null;

    if (userChoice==compChoice){
        winner= 'none';
        drawGame();
    }
    else{
        if(userChoice=='stone'){
            if(compChoice=='ppr'){
                winner= 'comp';
                console.log('Comp wins!')
                msgBg.innerHTML='<strong>Comp Win! Comp choosed PAPER</strong>'
            }
            else{
                winner= 'user';
                msgBg.innerHTML='<strong>You Win! Comp choosed SCISSORS</strong>'
                console.log('You win!')
            }
        }
        else if(userChoice=='ppr'){
            if(compChoice=='scissors'){
                winner= 'comp';
                msgBg.innerHTML='<strong>Comp Win! Comp choosed SCISSORS</strong>'
                console.log('Comp wins!')
            }
            else{
                winner= 'user';
                msgBg.innerHTML='<strong>You Win! Comp choosed STONE </strong>';
                console.log('You win!')
            }
        }
        else{
            if(compChoice=='stone'){
                winner= 'comp';
                msgBg.innerHTML='<strong>Comp Win! Comp choosed STONE</strong>'
                console.log('Comp wins!')
            }
            else{
                winner= 'user';
                msgBg.innerHTML='<strong>You Win! Comp choosed PAPER</strong>'
                console.log('You win!')
            }
        }
    }

    Score(winner);
}


choice.forEach((choices) =>{
    choices.addEventListener('click', () =>{
        let userChoice= choices.getAttribute('name');
        playGame(userChoice);
    })
});

