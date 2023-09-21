//////////////////// - PANEL AND MODAL CREATION - ////////////////////
const container = document.querySelector('.container');
function answerSlot(count){
    for(i = 0; i < count; i++){
        const gameBoard = document.querySelector('.game-board');
        let slot = document.createElement('div');
        gameBoard.appendChild(slot).className = 'panel';
        let answer = document.createElement('p');
        let points = document.createElement('p');
        let panelNum = document.createElement('p');
        slot.appendChild(answer).className = 'answer vanish';
        slot.appendChild(points).className = 'points vanish';
        slot.appendChild(panelNum).className = 'panel-num vanish';
        slot.id = `slot${i + 1}`;
        answer.id = `panel${i + 1}`;
        answer.class = 'panelText'
        answer.innerText = ''.toUpperCase();
        panelNum.innerText = i + 1;
        panelNum.id = `answer${i + 1}`
        points.id = `points${i + 1}`;
    };
    for(c = 0; c < 2; c++){
        let scoreContainer = document.querySelector('.score-container')
        let scoreSlot = document.createElement('p');
        scoreContainer.appendChild(scoreSlot).className = 'score';
        scoreSlot.innerText = 0;
        scoreSlot.id = `score${c}`;
    }
};
answerSlot(8);

function createModal(){
    let modalContainer = document.createElement('div');
    let modal = document.createElement('div');
    let modalLogo = document.createElement('img');
    let modalBtn = document.createElement('button');
    container.appendChild(modalContainer).className = 'modal-container';
    modalContainer.appendChild(modal).className = 'modal';
    modal.appendChild(modalLogo).src = 'media/logo.png';
    modal.appendChild(modalBtn).className = 'start-button';
    modalBtn.innerText = `Let's Feud!`;
};
createModal();

function createStrike(){
    let strikeContainer = document.createElement('div');
    container.appendChild(strikeContainer).className = 'strike-container';
    for(s = 0; s < 3; s++){
        let strikeImg = document.createElement('img');
        strikeImg.src = 'media/strike1.png';
        strikeContainer.appendChild(strikeImg).className = 'strike-img vanish';
        strikeImg.id = `strikeImg${s+1}`;
    }
    strikeImg2.src = 'media/strike2.png';
    strikeImg3.src = 'media/strike3.png';
};
createStrike();
document.querySelector('.start-button').addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('vanish');
    document.querySelectorAll('.panel-num').forEach(el => el.style = 'animation: grow 2s')
    document.querySelectorAll('.panel-num').forEach(el => el.classList.remove('vanish'))
});
////////////////////// - END OF SECTION- //////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////// - ANSWER SUBMISSION - //////////////////////
let answerInput = document.getElementById('answer-input');
let submitBtn = document.getElementById('submit-button');
let correctAudio = new Audio('media/correct.mp3');
let strikeNum = 0;
submitBtn.addEventListener('click', () => {
    switch(answerInput.value){
        case document.getElementById('panel1').innerText:
            slot1.classList.add('flip');
            let set1 = [panel1, points1];
            set1.forEach(el => el.classList.remove('vanish'));
            answer1.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel2').innerText:
            slot2.classList.add('flip');
            let set2 = [panel2, points2];
            set2.forEach(el => el.classList.remove('vanish'));
            answer2.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel3').innerText:
            slot3.classList.add('flip');
            let set3 = [panel3, points3];
            set3.forEach(el => el.classList.remove('vanish'));
            answer3.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel4').innerText:
            slot4.classList.add('flip');
            let set4 = [panel4, points4];
            set4.forEach(el => el.classList.remove('vanish'));
            answer4.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel5').innerText:
            slot5.classList.add('flip');
            let set5 = [panel5, points5];
            set5.forEach(el => el.classList.remove('vanish'));
            answer5.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel6').innerText:
            slot6.classList.add('flip');
            let set6 = [panel6, points6];
            set6.forEach(el => el.classList.remove('vanish'));
            answer6.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel7').innerText:
            slot7.classList.add('flip');
            let set7 = [panel7, points7];
            set7.forEach(el => el.classList.remove('vanish'));
            answer7.classList.add('vanish');
            correctAudio.play();
            break;
        case document.getElementById('panel8').innerText:
            slot8.classList.add('flip');
            let set8 = [panel8, points8];
            set8.forEach(el => el.classList.remove('vanish'));
            answer8.classList.add('vanish');
            correctAudio.play();
            break;
        default:
            document.getElementById('incorrect-sound').play();
            strikeNum = strikeNum + 1;
            if(strikeNum == 1){
                strikeImg1.style.animation = 'grow 1s ease-in-out';
                strikeImg1.classList.remove('vanish')
            } else if(strikeNum == 2){
                strikeImg1.classList.add('vanish')
                strikeImg2.style.animation = 'grow 1s ease-in-out';
                strikeImg2.classList.remove('vanish')
            } else {
                strikeImg2.classList.add('vanish')
                strikeImg3.style.animation = 'grow 1s ease-in-out';
                strikeImg3.classList.remove('vanish')
            }
    }
    answerInput.value = '';
});

answerInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        e.preventDefault;
        submitBtn.click();
    }
})
////////////////////// - END OF SECTION- //////////////////////
//////////////////////////////////////////////////////////////
/////////////////// - QUESTION CREATOR - ////////////////////
class Question {
    constructor(question, a1, a2, a3, a4, a5, a6, a7, a8) {
        document.querySelector('.question').innerText = question.toUpperCase();
        panel1.innerText = a1.toUpperCase(); panel2.innerText = a2.toUpperCase();
        panel3.innerText = a3.toUpperCase(); panel4.innerText = a4.toUpperCase();
        panel5.innerText = a5.toUpperCase(); panel6.innerText = a6.toUpperCase();
        panel7.innerText = a7.toUpperCase(); panel8.innerText = a8.toUpperCase();
    };
};
class Points {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        points1.innerText = p1; points2.innerText = p2; points3.innerText = p3;
        points4.innerText = p4; points5.innerText = p5; points6.innerText = p6;
        points7.innerText = p7; points8.innerText = p8;
    };
};

document.querySelector('.start-button').addEventListener('click', () => {
    el = new Question("Deez nuts?", "balls", "peepee", "nuts", "joe", "weenie", "dumpy", "butts", "poopy");
    el = new Points(36, 21, 12, 11, '08', '07', '04', '01');
});
////////////////////// - END OF SECTION- //////////////////////
// let random = Math.floor(Math.random() * 9) + 1;
// let test = document.getElementById('test')

// let thing = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
// test.innerText = thing[`${random}`];