function answerSlot(count) {
    for(i = 0; i < count; i++){
        const board = document.querySelector('.game-board');
        let slot = document.createElement('div');
        board.appendChild(slot).className = 'answer';
        let logo = document.createElement('img');
        let answer = document.createElement('p');
        slot.appendChild(logo);
        slot.appendChild(answer);
        slot.id = `slot${i + 1}`;
        answer.id = `answer${i + 1}`;
        answer.innerText = 'butts';
    }
}
answerSlot(8);
let answerInput = document.getElementById('answer-input');
let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', () => {
    switch(answerInput.value){
        case document.getElementById('answer1').innerText:
            console.log('WORKED 1');
            slot1.classList.add('flip')
            break;
        case document.getElementById('answer2').innerText:
            console.log('WORKED 2')
            slot2.classList.add('flip')
            break;
        case document.getElementById('answer3').innerText:
            console.log('WORKED 3')
            slot3.classList.add('flip')
            break;
        case document.getElementById('answer4').innerText:
            console.log('WORKED 4')
            slot4.classList.add('flip')
            break;
        case document.getElementById('answer5').innerText:
            console.log('WORKED 5')
            slot5.classList.add('flip')
            break;
        case document.getElementById('answer6').innerText:
            console.log('WORKED 6')
            slot6.classList.add('flip')
            break;
        case document.getElementById('answer7').innerText:
            console.log('WORKED 7')
            slot7.classList.add('flip')
            break;
        case document.getElementById('answer8').innerText:
            console.log('WORKED 8')
            slot8.classList.add('flip')
            break;
        default:
            console.log('ERROR')
    }
})

let answers = document.querySelectorAll('.answer');
answers.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('balls')){
            console.log('true')
        } else {
            console.log('false')
        }
    })
})

