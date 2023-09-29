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
let randomNum = Math.floor(Math.random() * 3) + 1;
document.getElementById('round-btn').addEventListener('click', () => {
    document.querySelectorAll('.panel').forEach(el => {el.classList.remove('flip')})
    document.querySelectorAll('.answer').forEach(el => {el.classList.add('vanish')})
    document.querySelectorAll('.points').forEach(el => {el.classList.add('vanish')})
    document.querySelectorAll('.panel-num').forEach(el => {el.classList.remove('vanish')})
    strikeNum = 0;
    document.querySelectorAll('.strike-img').forEach(el => el.classList.add('vanish'))
    randomNum = randomNum + 3;
    switch(randomNum){
        case 4: new Question("Name a word that rhymes with 'cat'", "hat", "bat", "fat", "rat", "pat", "sat", "mat", "brat");
                new Points(32, 21, 15, 12, 10, '06', '03', '01'); break;
        case 5: new Question("What's something you can find in a kitchen?", "refrigerator", "stove", "sink", "microwave", "plates", "utensils", "food", "cups");
                new Points(35, 20, 14, 10, '08', '07', '03', '02'); break;
        case 6: new Question("Name a popular snack to eat at the theater", "popcorn", "candy", "chips", "nachos", "pretzel", "hot dog", "soda", "churro");
                new Points(40, 17, 12, 10, '07', '06', '04', '03'); break;
        case 7: new Question("Name a popular video game console", "playstation", "ds", "switch", "gameboy", "wii", "xbox", "psp", "nes");
                new Points(34, 24, 12, '09', '08', '06', '05', '01'); break;
        case 8: new Question("Name the most populated countries in Europe", "Russia", "Germany", "united kingdom", "france", "italy", "spain", "ukraine", "poland");
                new Points(37, 23, 13, '09', '07', '05', '04', '02'); break;
        case 9: new Question("What are some animals you'd see on a farm", "cow", "chicken", "sheep", "horse", "pig", "goat", "dog", "donkey");
                new Points(34, 24, 12, '09', '08', '06', '05', '01'); break;
        };
    document.querySelector('.modal-container').classList.remove('vanish');
    document.getElementById('scoreModal').classList.remove('vanish');
});

submitBtn.addEventListener('click', () => {
    switch(randomNum){
        case 1: if(answersOneList.includes(answerInput.value)){closeAnswer(); break;};
        case 2: if(answersTwoList.includes(answerInput.value)){closeAnswer(); break;};
        case 3: if(answersThreeList.includes(answerInput.value)){closeAnswer(); break;};
        case 5: if(answersFiveList.includes(answerInput.value)){closeAnswer(); break;}
        case 6: if(answersSixList.includes(answerInput.value)){closeAnswer(); break;}
        case 7: if(answersSevenList.includes(answerInput.value)){closeAnswer(); break;}
        case 9: if(answersNineList.includes(answerInput.value)){closeAnswer(); break;}
    }
    answerInput.value = '';
})

function closeAnswer() {
    document.getElementById('close-sound').play();
    document.getElementById('incorrect-sound').pause();
    document.querySelectorAll('.strike-img').forEach(el => el.classList.add('vanish'))
    strikeNum = strikeNum - 1;
}
let answersOneList = ["DICK", "RICH", "RICHIE","BOB", "ROB", "DAVE", "JOHNNY", "JONNY", "JONATHAN", "MIKE", "MIKEY", "WILLIAM", "JOE", "JOEY", "ROBBIE"];
let answersTwoList = ["HERSHEY", "HERSHEY BAR", "SNICKER", "SNICKER BAR", "KIT KAT", "KIT-KAT", "REESE'S", "MILKYWAY", "CRUNCH BAR", "MUSKETEERS", "THREE MUSKETEERS", "3 MUSKETEER"];
let answersThreeList = ["IRONMAN", "IRON-MAN", "CAPTAINAMERICA", "HULK", "INCREDIBLE HULK", "SPIDER MAN", "SPIDER-MAN", "BLACKWIDOW", "HAWK EYE", "BLACKPANTHER"];
let answersFiveList = ["FRIDGE", "FREEZER", "OVEN", "WATER", "DRAIN", "CHINA", "FORKS", "FORK", "SPOONS", "SPOON", "KNIFE", "KNIVES", "DINNER", "CUP", "UTENSIL", "PLATE"];
let answersSixList = ["CHOCOLATE", "CANDY BAR", "CHIP", "POTATO CHIPS", "NACHO", "PRETZELS", "PRETZEL NUGGETS", "HOTDOG", "DRINK", "SHAKE", "CHURROS"];
let answersSevenList = ["PLAY STATION", "PLAYSTATION 2", "PLAYSTATION 3", "PLAYSTATION 4", "PLAYSTATION 5", "XBOX ONE", "XBOX 360", "NINTENDO DS", "NINTENDO SWTICH", "GBA",
"GAMEBOY ADVANCE", "GAMEBOY COLOR", "NINTENDO WII", "PLAYSTATION PORTABLE", "GB", "NINTENDO SWITCH"];
let answersNineList = ["BULL", "ROOSTER", "HEN", "SHEEP DOG", "LAMB", "PONY", "CHICK", "MARE", "HOG", "PUPPY"];