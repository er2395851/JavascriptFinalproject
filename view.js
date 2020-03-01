/*
Course: CIS-14A-Javascript
Professor: Will Ibekwe
Final Project: Connect Four
Authors: David Branson and Edmar Ramos
*/

//***************************************************************/
//playerTurn()
//***************************************************************/
//
//1. Display who's turn it is.
//2. Display the player's color coin in the cell that was selected
//***************************************************************/
count=1;
function playerTurn(cellId){
    if(count %2==0){
        var cell = document.getElementById(cellId);
       document.getElementById("turn").innerHTML = "Yellow's turn"; 
            cell.setAttribute("class", "red");
            count++;   
            console.log("counter is: "+ count);
    }
    else{
      var cell = document.getElementById(cellId);
       document.getElementById("turn").innerHTML = " Red's turn";  
            cell.setAttribute("class", "yellow");
            count++;
            console.log("counter is: "+ count);
    }
}

//***************************************************************/
//restartGame()
//***************************************************************/
//refresh the browser window on button click
//***************************************************************/
function restartGame(){
    //location.reload();
    newGameView();
    newGameModel();
}

//***************************************************************/
//victory()
//***************************************************************/
//This function is called by winLose() when it detects a victory
//it will display a victory popup.
//***************************************************************/
function victory(num){
    window.alert("Victory player: " + (count%2 +1));
    score(num);
   }

//***************************************************************/
//newGameView()
//***************************************************************/
//Reset all classes to default (coin colors)
//***************************************************************/
function newGameView(){
    for(var i = 0; i < 42; i++)
    {
        document.getElementsByTagName("td")[i].setAttribute("class", " " ); 
    }
    //window.location.href = "https://youtu.be/afR7py5pLF8?t=143"
}

//***************************************************************/
//displayScore()
//***************************************************************/
//update the game page with the players score
//***************************************************************/
function displayScore(p2, p1){
    if(count % 2 == 0){
    document.getElementById("redScore").innerHTML = ("Yellow (Player 1) wins: " + (p2+1));  
    //window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";   
    }
    else{
    document.getElementById("yellowScore").innerHTML = "Red (Player 2) wins: " + (p1+1);  
    }
}

