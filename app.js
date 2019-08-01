/*
var scores, round_score, active_player, game_playing;
var name1 = prompt('Name of the 1st player:');
document.querySelector('#name-0').textContent = name1;
var name2 = prompt('Name of the 2nd player:');
document.querySelector('#name-1').textContent = name2;
init();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (game_playing) {
        // random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // display the result
        var diceDOM = document.querySelector('#dice-1');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice1 + '.png';
        var diceDOM = document.querySelector('#dice-2');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice2 + '.png';
        // update round score IF rolled score was not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            if (dice1 === dice2){
                round_score += (dice1+dice2)*3;
                document.querySelector('#current-' + active_player).textContent = round_score;
            } else {
                round_score += (dice1 + dice2);
            document.querySelector('#current-' + active_player).textContent = round_score; }

        } else {
            // next player
            nextPlayer()
        }

    }

});

    document.querySelector('.btn-hold').addEventListener('click', function () {
    if (game_playing) {
        // add current score to global score
        scores[active_player] += round_score;
        //update the user int
        document.querySelector('#score-' + active_player).textContent = scores[active_player];
        // Check if player won the game
        if (scores[active_player] >=200) {
            document.querySelector('#name-' + active_player).textContent = 'WINNER!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + active_player + '-panel').classList.add('winner');
            document.querySelector('.player-' + active_player + '-panel').classList.remove('active');
            game_playing = false;
        } else {
            nextPlayer ()
        }
    }

    });

    function nextPlayer () {
        active_player === 0 ? active_player = 1 : active_player = 0;
        round_score = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
    };


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    round_score = 0;
    active_player = 0;
    game_playing = true;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = name1;
    document.querySelector('#name-1').textContent = name2;

};





//document.querySelector('#current-' + active_player).textContent = dice;
//document.querySelector('#current-' + active_player).innerHTML = '<b>' + dice + '</b>';
//var x = document.querySelector('#score-0').textContent;
*/


var scores, round_score, active_player, game_playing;
var name1 = prompt('Name of the 1st player:');
document.querySelector('#name-0').textContent = name1;
var name2 = prompt('Name of the 2nd player:');
document.querySelector('#name-1').textContent = name2;
init();

var last_dice1;
var last_dice2;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (game_playing) {
        // random number
        var dice1 = Math.round(Math.random()*5)+1;
        var dice2 = Math.round(Math.random()*5)+1;

        // display the result
        var diceDOM = document.querySelector('#dice-1');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice1 + '.png';
        var diceDOM = document.querySelector('#dice-2');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice2 + '.png';
        // update round score IF rolled score was not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            if (dice1 === last_dice1 && dice2 === last_dice2 && dice1 === 6 && dice2 === 6) {
                scores[active_player] =0;
                document.querySelector('#score-' + active_player).textContent = '0';
                nextPlayer();
            } else if (dice1 === dice2){
                round_score += (dice1+dice2)*3;
                document.querySelector('#current-' + active_player).textContent = round_score;
            } else {
                round_score += (dice1 + dice2);
                document.querySelector('#current-' + active_player).textContent = round_score; }

        } else {
            // next player
            nextPlayer()
        }
        last_dice1 = dice1;
        last_dice2 = dice2;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (game_playing) {
        // add current score to global score
        scores[active_player] += round_score;
        //update the user int
        document.querySelector('#score-' + active_player).textContent = scores[active_player];
        // Check if player won the game
        var input = document.querySelector('.myText').value;
        var  winning_score;

        if (input) { winning_score = input} else {winning_score = 200}
        if (scores[active_player] >= winning_score) {
            document.querySelector('#name-' + active_player).textContent = 'WINNER!';
            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';
            document.querySelector('.player-' + active_player + '-panel').classList.add('winner');
            document.querySelector('.player-' + active_player + '-panel').classList.remove('active');
            game_playing = false;
        } else {
            nextPlayer ()
        }
    }

});

function nextPlayer () {
    active_player === 0 ? active_player = 1 : active_player = 0;
    round_score = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    round_score = 0;
    active_player = 0;
    game_playing = true;

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = name1;
    document.querySelector('#name-1').textContent = name2;

};




