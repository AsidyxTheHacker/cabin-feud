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
        answer.innerText = ''.toUpperCase();
        points.id = `points${i + 1}`;
    }
}
answerSlot(8);
let answerInput = document.getElementById('answer-input');
let submitBtn = document.getElementById('submit-button');
let correctAudio = new Audio('media/correct.mp3');
submitBtn.addEventListener('click', () => {
    switch(answerInput.value){
        case document.getElementById('panel1').innerText:
            slot1.classList.add('flip');
            let set1 = [panel1, points1];
            set1.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel2').innerText:
            slot2.classList.add('flip');
            let set2 = [panel2, points2];
            set2.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel3').innerText:
            slot3.classList.add('flip');
            let set3 = [panel3, points3];
            set3.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel4').innerText:
            slot4.classList.add('flip');
            let set4 = [panel4, points4];
            set4.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel5').innerText:
            slot5.classList.add('flip');
            let set5 = [panel5, points5];
            set5.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel6').innerText:
            slot6.classList.add('flip');
            let set6 = [panel6, points6];
            set6.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel7').innerText:
            slot7.classList.add('flip');
            let set7 = [panel7, points7];
            set7.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        case document.getElementById('panel8').innerText:
            slot8.classList.add('flip');
            let set8 = [panel8, points8];
            set8.forEach(el => el.classList.remove('vanish'));
            correctAudio.play();
            break;
        default:
            document.getElementById('incorrect-sound').play();
    }
    answerInput.value = '';
});

class Question {
    constructor(question, a1, a2, a3, a4, a5, a6, a7, a8) {
        document.querySelector('.question').innerText = question.toUpperCase();
        panel1.innerText = a1.toUpperCase(); panel2.innerText = a2.toUpperCase();
        panel3.innerText = a3.toUpperCase(); panel4.innerText = a4.toUpperCase();
        panel5.innerText = a5.toUpperCase(); panel6.innerText = a6.toUpperCase();
        panel7.innerText = a7.toUpperCase(); panel8.innerText = a8.toUpperCase();
    }
}
class Points {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        points1.innerText = p1; points2.innerText = p2; points3.innerText = p3;
        points4.innerText = p4; points5.innerText = p5; points6.innerText = p6;
        points7.innerText = p7; points8.innerText = p8;
    }
}

submitBtn.addEventListener('click', (el) => {
    el = new Question("whos ball?", "balls", "peepee", "butts", "poopy", "nuts", "weewee", "booby", "dumpy");
    el = new Points(72, 21, 12, 3, 8, 18, 31, 16);
})