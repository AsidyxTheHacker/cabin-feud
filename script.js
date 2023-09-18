function answerSlot(count) {
    for(i = 0; i < count; i++){
        const board = document.querySelector('.game-board');
        let slot = document.createElement('div');
        board.appendChild(slot).className = 'answer';
        let logo = document.createElement('img');
        slot.appendChild(logo);
        slot.id = `answer${i + 1}`;
    }
}
answerSlot(8);