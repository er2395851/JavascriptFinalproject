/*
Course: CIS-14A-Javascript
Professor: Will Ibekwe
Final Project: Connect Four
Authors: David Branson and Edmar Ramos
*/

//***************************************************************/
//getCell()
//***************************************************************/
//assign the the id of the cell that was clicked to a variable
//i have to move it down here since its using player's above
//***************************************************************/
function getCell(num){
    cellId = parseInt(num);
    console.log(cellId);
    playerTurn(cellId);
    winLose(cellId);
}

//***************************************************************/
//newGameModel()
//***************************************************************/
//Set counter to 0,  default, excluding p1, p2
//***************************************************************/
function newGameModel(){
    count =0;
    firsthorizontal=0;
    secondhorizontal=0;
    thirdhorizontal=0;
    forthhorizontal=0;
    fifthhorizontal=0;
    sixthhorizontal=0;
   
    for(var i = 0; i < 42; i++)
       {
           document.getElementsByTagName("td")[i].setAttribute("class", parseInt(i) ); 
       }
   }