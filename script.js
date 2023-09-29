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
};
answerSlot(8);

function createModal(){
    let modalContainer = document.createElement('div');
    container.appendChild(modalContainer).className = 'modal-container';
    modalContainer.innerHTML = `
    <div class="modal" id="startModal">
        <img src="media/logo.png"></img>
        <button class="start-button">Let's Feud!</button>
            <div class="modal-input-container">
                <input class="modal-input" id="modalInput1" placeholder="Family One" maxlength="12" autocomplete="Off"></input>
                <input class="modal-input" id="modalInput2" placeholder="Family Two" maxlength="12" autocomplete="Off"></input>
            </div>
    </div>`
};
createModal();

function scoreModal() {
    let scoreModal = document.createElement('div');
    document.querySelector('.modal-container').appendChild(scoreModal).className = 'modal vanish'
    scoreModal.id = 'scoreModal'
    scoreModal.innerHTML = `
    <h1 style="color: white; margin-bottom: .3em;">Enter Score</h1>
    <input type="number" id="scoreInput" placeholder="Score" onKeyPress="if(this.value.length==3) return false;">
    <div class="modal-input-container">
        <button class="scoreBtn" id="scoreSubmit1">Team 1</button>
        <button class="scoreBtn" id="scoreSubmit2">Team 2</button>
    </div>`
}
scoreModal();

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
    document.getElementById('startModal').classList.add('vanish');
    new Audio('media/music.mp3').play();
    switch(randomNum){
        case 1: new Question("What is a common name for a boy?", "James", "Robert", "John", "Michael", "David", "Will", 'Richard', "Joseph");
        new Points(36, 21, 12, 11, '08', '07', '04', '01');
        break;
        case 2: new Question("Name a popular candy bar", "hersheys", "snickers", "twix", "kitkat", "reeses", "milky way", "crunch", "3 musketeers");
        new Points(42, 15, 13, 10, '09', '06', '03', '02');
        break;
        case 3: new Question("Name a popular superhero from 'Marvel'", "iron man", "captain america", "the hulk", "spiderman", "thor", "black widow", "hawkeye", "black panther");
        new Points(38, 18, 14, 10, '09', '05', '04', '02');
        break;
    }
});
modalInput1.value = family1.innerText;
modalInput2.value = family2.innerText;
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
            } else if(strikeNum == 3){
                strikeImg2.classList.add('vanish')
                strikeImg3.style.animation = 'grow 1s ease-in-out';
                strikeImg3.classList.remove('vanish')
                strikeImg1.style.animation = '';
            } else {
                strikeImg3.classList.add('vanish')
                strikeImg1.classList.remove('vanish')
                strikeImg1.style.animation = 'grow 1s ease-in-out';
                document.querySelectorAll('.panel').forEach(el => el.classList.add('flip'))
                document.querySelectorAll('.answer').forEach(el => el.classList.remove('vanish'))
                document.querySelectorAll('.points').forEach(el => el.classList.remove('vanish'))
                document.querySelectorAll('.panel-num').forEach(el => el.classList.add('vanish'))
            }
    };
    if(strikeNum == 4){
        document.getElementById('round-btn').classList.remove('vanish');
        document.getElementById('submit-button').classList.add('vanish');
        document.getElementById('answer-input').classList.add('vanish');
    }
});
scoreSubmit1.addEventListener('click', () => {document.getElementById('score1').innerHTML = document.getElementById('scoreInput').value;})
scoreSubmit2.addEventListener('click', () => {document.getElementById('score2').innerHTML = document.getElementById('scoreInput').value;})
document.querySelectorAll('.scoreBtn').forEach(el => el.addEventListener('click', () => {
    new Audio('media/music.mp3').play();
    document.getElementById('submit-button').classList.remove('vanish');
    document.getElementById('answer-input').classList.remove('vanish');
    document.querySelector('.modal-container').classList.add('vanish');
    document.getElementById('round-btn').classList.add('vanish');
    if(scoreInput.value == ''){score1.innerHTML = 0; score2.innerHTML = 0;}
    scoreInput.value = '';
    document.querySelectorAll('.score').forEach(el => {if(el.innerHTML >= 300){el.innerHTML = 300;}})
}))

modalInput1.addEventListener('keyup', () => {family1.innerText = modalInput1.value.toUpperCase()})
modalInput2.addEventListener('keyup', () => {family2.innerText = modalInput2.value.toUpperCase()})
answerInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        e.preventDefault;
        submitBtn.click();
    }
});
////////////////////// - END OF SECTION- //////////////////////