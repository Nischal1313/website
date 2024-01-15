let r_tower = [];
let m_tower = [1, 2, 3, 4];
let viewer_tower = ['➖', '➖➖', '➖➖➖', '➖➖➖➖'];
let l_tower = [];
let moves = 0;
let invalid_moves = 0;
let golden_nro;
let discs = 4;

function update_viewers(tower, elementId) {
    let html = '<ul>';
    for (let i = 0; i < tower.length; i++) {
        html += '<li>' + tower[i] + '</li>';
    }
    html += '</ul>';
    document.getElementById(elementId).innerHTML = html;
}

function move_piece(from_tower, to_tower) {
    let moved = false;
    const piece = from_tower[0];
    if (from_tower.length === 0) {
        document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves += 1}`;
        handleInvalidMove();
    } else if (to_tower.length > 0) {
        if (from_tower[0] < to_tower[0]) {
            to_tower.unshift(piece);
            from_tower.splice(0, 1);
            moved = true;
            document.getElementById('moves').innerHTML = ` Moves: ${moves += 1}`;
        } else {
            document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves += 1}`;
            handleInvalidMove();
        }
    } else if (to_tower.length === 0) {
        to_tower.unshift(piece);
        from_tower.splice(0, 1);
        moved = true;
        document.getElementById('moves').innerHTML = ` Moves: ${moves += 1}`;
    }
    return moved;
}

function start_game() {
    let selectedOperation = document.getElementById("discs").value;

    if (selectedOperation === 'three') {
        r_tower = [];
        m_tower = [1, 2, 3];
        viewer_tower = ['➖', '➖➖', '➖➖➖'];
        l_tower = [];
        moves = 0;
        invalid_moves = 0;
        document.getElementById('moves').innerHTML = ` Moves: ${moves}`;
        document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves}`;
        discs = 4;
        golden_nro = perfectScore(discs);
        update_viewers(l_tower, 'l_tower');
        update_viewers(viewer_tower, 'm_tower');
        update_viewers(r_tower, 'r_tower');
        game_won_or_over(golden_nro);
    }
    if (selectedOperation==='four'){
        r_tower = [];
        m_tower = [1, 2, 3, 4];
        viewer_tower = ['➖', '➖➖', '➖➖➖', '➖➖➖➖'];
        l_tower = [];
        moves = 0;
        invalid_moves = 0;
        document.getElementById('moves').innerHTML = ` Moves: ${moves}`;
        document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves}`;
        discs = 4;
        golden_nro = perfectScore(discs);
        update_viewers(l_tower, 'l_tower');
        update_viewers(viewer_tower, 'm_tower');
        update_viewers(r_tower, 'r_tower');
        game_won_or_over(golden_nro);
    }
    if (selectedOperation === 'five') {
        r_tower = [];
        m_tower = [1, 2, 3, 4, 5];
        viewer_tower = ['➖', '➖➖', '➖➖➖', '➖➖➖➖', '➖➖➖➖➖'];
        l_tower = [];
        moves = 0;
        invalid_moves = 0;
        document.getElementById('moves').innerHTML = ` Moves: ${moves}`;
        document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves}`;
        discs = 5;
        golden_nro = perfectScore(discs);
        update_viewers(l_tower, 'l_tower');
        update_viewers(viewer_tower, 'm_tower');
        update_viewers(r_tower, 'r_tower');
        game_won_or_over(golden_nro);

    }
    if (selectedOperation === 'six') {
        r_tower = [];
        m_tower = [1, 2, 3, 4, 5, 6];
        viewer_tower = ['➖', '➖➖', '➖➖➖', '➖➖➖➖', '➖➖➖➖➖', '➖➖➖➖➖➖'];
        l_tower = [];
        moves = 0;
        invalid_moves = 0;
        document.getElementById('moves').innerHTML = ` Moves: ${moves}`;
        document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves}`;
        discs = 6;
        golden_nro = perfectScore(discs);
        update_viewers(l_tower, 'l_tower');
        update_viewers(viewer_tower, 'm_tower');
        update_viewers(r_tower, 'r_tower');
        game_won_or_over(golden_nro);
    }
}

function perfectScore(discs) {
    let print = document.getElementById('minimum');
    print.innerHTML = `Perfect score for ${discs} discs is ${Math.pow(2, discs) - 1} moves.`;
    return Math.pow(2, discs) - 1;
}

function game_won_or_over(perfect_score) {
    let print = document.getElementById('game_state');
    if (invalid_moves < 5) {
        if (moves < perfect_score) {
            print.innerHTML = "You can still achieve a perfect score!";
        } else if (moves > perfect_score) {
            print.innerHTML = "Keep trying!";
        } else if (moves === perfect_score && (l_tower.length === discs || r_tower.length === discs)) {
            print.innerHTML = "Perfect score!";
        }
    } else {
        print.innerHTML = 'Unfortunately, you had too many invalid moves.';
        restartGame();
    }
}

function handleInvalidMove() {
    if (invalid_moves > 3) {
        restartGame();
    }
}

function restartGame() {
    r_tower = [];
    m_tower = [1, 2, 3, 4];
    viewer_tower = ['➖', '➖➖', '➖➖➖', '➖➖➖➖'];
    l_tower = [];
    moves = 0;
    invalid_moves = 0;
    document.getElementById('moves').innerHTML = ` Moves: ${moves}`;
    document.getElementById('i_moves').innerHTML = ` Invalid moves: ${invalid_moves}`;
    discs = 4;
    golden_nro = perfectScore(discs);
    update_viewers(l_tower, 'l_tower');
    update_viewers(viewer_tower, 'm_tower');
    update_viewers(r_tower, 'r_tower');
    game_won_or_over(golden_nro);
}

let startGameButton = document.getElementById("start");
startGameButton.addEventListener("click", function () {
    start_game();
    update_viewers(l_tower, 'l_tower');
    update_viewers(viewer_tower, 'm_tower');
    update_viewers(r_tower, 'r_tower');
    discs = m_tower.length;
    golden_nro = perfectScore(discs);
    game_won_or_over(golden_nro);
});

update_viewers(l_tower, 'l_tower');
update_viewers(viewer_tower, 'm_tower');
update_viewers(r_tower, 'r_tower');
golden_nro = perfectScore(discs);
game_won_or_over(golden_nro);

document.getElementById('l_tower_move_top_piece_right').addEventListener('click', function () {
    move_piece(l_tower, viewer_tower);
    update_viewers(l_tower, 'l_tower');
    update_viewers(viewer_tower, 'm_tower');
    game_won_or_over(golden_nro);
});

document.getElementById('l_tower_move_top_piece_left').addEventListener('click', function () {
    move_piece(l_tower, r_tower);
    update_viewers(l_tower, 'l_tower');
    update_viewers(r_tower, 'r_tower');
    game_won_or_over(golden_nro);
});

document.getElementById('m_tower_move_top_piece_right').addEventListener('click', function () {
    move_piece(viewer_tower, r_tower);
    update_viewers(viewer_tower, 'm_tower');
    update_viewers(r_tower, 'r_tower');
    game_won_or_over(golden_nro);
});

document.getElementById('m_tower_move_top_piece_left').addEventListener('click', function () {
    move_piece(viewer_tower, l_tower);
    update_viewers(viewer_tower, 'm_tower');
    update_viewers(l_tower, 'l_tower');
    game_won_or_over(golden_nro);
});

document.getElementById('r_tower_move_top_piece_right').addEventListener('click', function () {
    move_piece(r_tower, l_tower);
    update_viewers(r_tower, 'r_tower');
    update_viewers(l_tower, 'l_tower');
    game_won_or_over(golden_nro);
});

document.getElementById('r_tower_move_top_piece_left').addEventListener('click', function () {
    move_piece(r_tower, viewer_tower);
    update_viewers(r_tower, 'r_tower');
    update_viewers(viewer_tower, 'm_tower');
    game_won_or_over(golden_nro);
});

function showRules() {
        document.getElementById('rules').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    function hideRules() {
        document.getElementById('rules').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }