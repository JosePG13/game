// var GameRunning = true;
function playGame(){
    //  while (GameRunning){
var TL = document.getElementById("TL").value;
var TM = document.getElementById("TM").value;
var TR = document.getElementById("TR").value;
var ML = document.getElementById;("ML").value;
var MM = document.getElementById("MM").value;
var MR = document.getElementById("MR").value;
var BL = document.getElementById("BL").value;
var BM = document.getElementById("BM").value;
var BR = document.getElementById("BR").value;

//var currentPlayer = "X";
// var GameRunning = True;
//var winner = '';

// function XcheckRows(){
//     xrow1 = TL == TM == TR == 'X';
//     xrow2 = ML == MM == MR == 'X';
//     xrow3 = BL == BM == BR == 'X';
//     if(xrow1 || xrow2 || xrow3){
//         GameRunning = false
//     }
//     if (xrow1){
//         return TL
//     }
//     else if (xrow2){
//         return ML
//     }
//     else if (xrow3){
//         return BL;
//     }
// }
// function OcheckRows(){
//     var orow1 = TL == TM == TR == 'O';
//     var orow2 = ML == MM == MR == 'O';
//     var orow3 = BL == BM == BR == 'O';
//     if(orow1 || orow2 || orow3){
//         GameRunning = false
//     }
//     if (orow1){
//         return TL
//     }
//     else if (orow2){
//         return ML
//     }
//     else if (orow3){
//         return BL;
//     }
// }
// function Xcheckcolumns(){
//     xcol1 = TL == ML == BL == 'X';
//     xcol2 = TM == MM == BM == 'X';
//     xcol3 = TR == MR == BR == 'X';
//     if (xcol1 || xcol2 || xcol3){
//         GameRunning = false;
//     }
//     if(xcol1){
//         return TL;
//     }
//     else if (xcol2){
//         return TM;
//     }
//     else if (xcol3){
//         return TR;
//     }
//     else {
//         return 0;
//     }
// }
// function Ocheckcolumns(){
//     ocol1 = TL == ML == BL == 'O';
//     ocol2 = TM == MM == BM == 'O';
//     ocol3 = TR == MR == BR == 'O';
//     if (ocol1 || ocol2 || ocol3){
//         GameRunning = false;
//     }
//     if(ocol1){
//         return TL;
//     }
//     else if (ocol2){
//         return TM;
//     }
//     else if (ocol3){
//         return TR;
//     }
//     else {
//         return 0;
//     }
// }

// function Xdiagonals(){
//     xdiag1 = TL == MM == BR == 'X';
//     xdiag2 = TR == MM == BL == 'X';
//     if(xdiag1 || xdiag2){
//         GameRunning = false;
//     }
//     if(xdiag1){
//         return TL;
//     }
//     else if (xdiag2){
//         return TR;
//     }
//     else {
//         return 0;
//     }
// }
// function Odiagonals(){
//     odiag1 = TL == MM == BR == 'O';
//     odiag2 = TR == MM == BL == 'O';
//     if(odiag1 || odiag2){
//         GameRunning = false;
//     }
//     if(odiag1){
//         return TL;
//     }
//     else if (odiag2){
//         return TR;
//     }
//     else {
//         return None;
//     }
// }


// //var Position = 1;
// // function flipPlayers(){
// //     if (currentPlayer == "X"){
// //         currentPlayer = "O"
// //     }
// //     else{
// //         currentPlayer = "X"
// //     }
// // }

// function checkWin(){
//     if (XcheckRows()){
//         winner = XcheckRows()
//     }
//     else if (OcheckRows()){
//         winner = OcheckRows()
//     }
//     else if (Xcheckcolumns()){
//         winner = Xcheckcolumns()
//     }
//     else if (Ocheckcolumns()){
//         winner = Ocheckcolumns
//     }
//     else if  (Xdiagonals()){
//         winner = Xdiagonals()
//     }
//     else if (Odiagonals()){
//         winner = Odiagonals();
//     }
//     else{
//         winner = '';
//     }
//     return winner;
// }

// function checkGameOver(){
//     checkWin();
// }
// while (GameRunning){
//     //flipPlayers();
//     checkWin();
// }
// if (winner == "X" || winner == "O"){
//     document.getElementById('Winner').innerHTML = `Player ${winner} has won!`
//     window.alert('Player ${winner} has won!')
// }
// else{
//     alert("TIE!")
// }
//     }
if ((TL == 'x' || TL == 'X') && (TM == 'x' ||
        TM == 'X') && (TR == 'x' || TR == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player X won');
    }
    else if ((TL == 'x' || TL == 'X') && (ML == 'x' ||
        ML == 'X') && (BL == 'x' || BL == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
 
        window.alert('Player X won');
    }
    else if ((BL == 'x' || BL == 'X') && (BM == 'x' ||
        BM == 'X') && (BR == 'x' || BR == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        window.alert('Player X won');
    }
    else if ((TR == 'x' || TR == 'X') && (MR == 'x' ||
        MR == 'X') && (BR == 'x' || BR == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        window.alert('Player X won');
    }
    else if ((TL == 'x' || TL == 'X') && (MM == 'x' ||
        MM == 'X') && (BR == 'x' || BR == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        window.alert('Player X won');
    }
    else if ((TR == 'x' || TR == 'X') && (MM == 'x' ||
        MM == 'X') && (BL == 'x' || BL == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player X won');
        }
        else if ((TM == 'x' || TM == 'X') && (TM == 'x' ||
        TM == 'X') && (BM == 'x' || BM == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player X won');
    }
    else if ((ML == 'x' || ML == 'X') && (MM == 'x' ||
        MM == 'X') && (MR == 'x' || MR == 'X')) {
        document.getElementById('Winner')
            .innerHTML = "Player X won";
        document.getElementById("Tl").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player X won');
    }ioi
    if ((TL == 'o' || TL == 'O') && (TM == 'o' ||
        TM == 'O') && (TR == 'o' || TR == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player O won');
    }
    else if ((TL == 'o' || TL == 'O') && (ML == 'o' ||
        ML == 'O') && (BL == 'o' || BL == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
 
        window.alert('Player O won');
    }
    else if ((BL == 'o' || BL == 'O') && (BM == 'o' ||
        BM == 'O') && (BR == 'o' || BR == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("MR").disabled = true;
        window.alert('Player O won');
    }
    else if ((TR == 'o' || TR == 'O') && (MR == 'o' ||
        MR == 'O') && (BR == 'o' || BR == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MM").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        window.alert('Player O won');
    }
    else if ((TL == 'o' || TL == 'O') && (MM == 'o' ||
        MM == 'O') && (BR == 'o' || BR == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        window.alert('Player O won');
    }
    else if ((TR == 'o' || TR == 'O') && (MM == 'o' ||
        MM == 'O') && (BL == 'o' || BL == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player O won');
        }
        else if ((TM == 'o' || TM == 'O') && (TM == 'o' ||
        TM == 'O') && (BM == 'o' || BM == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("TL").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("ML").disabled = true;
        document.getElementById("MR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player O won');
    }
    else if ((ML == 'o' || ML == 'O') && (MM == 'o' ||
        MM == 'O') && (MR == 'o' || MR == 'O')) {
        document.getElementById('Winner')
            .innerHTML = "Player O won";
        document.getElementById("Tl").disabled = true;
        document.getElementById("TM").disabled = true;
        document.getElementById("TR").disabled = true;
        document.getElementById("BL").disabled = true;
        document.getElementById("BM").disabled = true;
        document.getElementById("BR").disabled = true;
        window.alert('Player O won');
    }
}



var Position = 1;
function topLeft() {
    if (Position == 1) {
        document.getElementById("TL").value = "X";
        document.getElementById("TL").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("TL").value = "0";
        document.getElementById("TL").disabled = true;
        Position = 1;
    }
}
function topMiddle() {
    if (Position == 1) {
        document.getElementById("TM").value = "X";
        document.getElementById("TM").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("TM").value = "0";
        document.getElementById("TM").disabled = true;
        Position = 1;
    }
}
function topRight() {
    if (Position == 1) {
        document.getElementById("TR").value = "X";
        document.getElementById("TR").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("TR").value = "0";
        document.getElementById("TR").disabled = true;
        Position = 1;
    }
}
function middleLeft() {
    if (Position == 1) {
        document.getElementById("ML").value = "X";
        document.getElementById("ML").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("ML").value = "0";
        document.getElementById("ML").disabled = true;
        Position = 1;
    }
}
function middle() {
    if (Position == 1) {
        document.getElementById("MM").value = "X";
        document.getElementById("MM").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("MM").value = "0";
        document.getElementById("MM").disabled = true;
        Position = 1;
    }
}
function middleRight() {
    if (Position == 1) {
        document.getElementById("MR").value = "X";
        document.getElementById("MR").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("MR").value = "0";
        document.getElementById("MR").disabled = true;
        Position = 1;
    }
}
function bottomLeft() {
    if (Position == 1) {
        document.getElementById("BL").value = "X";
        document.getElementById("BL").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("BL").value = "0";
        document.getElementById("BL").disabled = true;
        Position = 1;
    }
}
function bottomMiddle() {
    if (Position == 1) {
        document.getElementById("BM").value = "X";
        document.getElementById("BM").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("BM").value = "0";
        document.getElementById("BM").disabled = true;
        Position = 1;
    }
}
function bottomRight() {
    if (Position == 1) {
        document.getElementById("BR").value = "X";
        document.getElementById("BR").disabled = true;
        Position = 0;
    }
    else {
        document.getElementById("BR").value = "0";
        document.getElementById("BR").disabled = true;
        Position = 1;
    }
}

function restart(){
    location.reload();
    document.getElementById("TL").value = '';
    document.getElementById("TM").value = '';
    document.getElementById("TR").value = '';
    document.getElementById("ML").value = '';
    document.getElementById("MM").value = '';
    document.getElementById("MR").value = '';
    document.getElementById("BL").value = '';
    document.getElementById("BM").value = '';
    document.getElementById("BR").value = '';
}
