function answerSlot(count) {
    for(i = 0; i < count; i++){
        const board = document.querySelector('.game-board');
        let slot = document.createElement('div');
        board.appendChild(slot).className = 'panel';
        let answer = document.createElement('p');
        let points = document.createElement('p');
        slot.appendChild(answer).className = 'answer vanish';
        slot.appendChild(points).className = 'points vanish';
        slot.id = `slot${i + 1}`;
        answer.id = `panel${i + 1}`;
        answer.class = 'panelText'
        answer.innerText = 'balls';
        points.innerText = '74'
    }
}
answerSlot(8);
let answerInput = document.getElementById('answer-input');
let submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', () => {
    switch(answerInput.value){
        case document.getElementById('panel1').innerText:
            console.log('WORKED 1');
            slot1.classList.add('flip')
            document.querySelectorAll('.flip > p').forEach(el => el.classList.remove('vanish'));
            break;
        case document.getElementById('panel2').innerText:
            console.log('WORKED 2')
            slot2.classList.add('flip')
            break;
        case document.getElementById('panel3').innerText:
            console.log('WORKED 3')
            slot3.classList.add('flip')
            break;
        case document.getElementById('panel4').innerText:
            console.log('WORKED 4')
            slot4.classList.add('flip')
            break;
        case document.getElementById('panel5').innerText:
            console.log('WORKED 5')
            slot5.classList.add('flip')
            break;
        case document.getElementById('panel6').innerText:
            console.log('WORKED 6')
            slot6.classList.add('flip')
            break;
        case document.getElementById('panel7').innerText:
            console.log('WORKED 7')
            slot7.classList.add('flip')
            break;
        case document.getElementById('panel8').innerText:
            console.log('WORKED 8')
            slot8.classList.add('flip')
            break;
        default:
            console.log('ERROR')
    }
    answerInput.value = '';
});