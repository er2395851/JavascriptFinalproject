/*
Course: CIS-14A-Javascript
Professor: Will Ibekwe
Final Project: Connect Four
Authors: David Branson and Edmar Ramos
*/

//***************************************************************/
//score()
//***************************************************************/
//This function is called by victory() to keep track of how many
//times red and yellow have won
//***************************************************************/
function score(num){
    p2 = 0;
    p1 = 0;
    
    if( num == document.getElementsByClassName("red"))
    {
        p2++;
    }
    else
    {
        p1++;
    }

    displayScore(p2, p1);
}

//***************************************************************/
//winLose()
//***************************************************************/
//this function will check for win or lose
//There are three conditions where a player can win:
//1. Four Horizontally"
//  {R}{R}{R}{R}
//2. Four Vertically
//  {Y}
//  {Y}
//  {Y}
//  {Y}
//3. Four Diagonally
//  {R}
//    {R}
//      {R}
//        {R}
//***************************************************************/
function winLose(cellId)
{
// replace i < count with i < 42 later
// i < count so that the console doesnt get flooded
    for(var i = 0; i < 42; i++)
    {
    // im getting the index from td which is automatically an array 
        var y = document.getElementsByTagName("td")[i].className; 
        //console.log(" the index is: ", i , "class: " ,y); 
    }


    var firsthorizontal = 0;
    for(var i = 0; i < 6; i++)
    {
      
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {  
            firsthorizontal++;
            if(firsthorizontal == 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
        firsthorizontal = 0;
        }
    };
    
    /***************************
     * 2nd horizontal
     * 
     */
    var secondhorizontal = 0;
    for(var i = 7; i < 14; i++)
    {
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {
        secondhorizontal++;
            if(secondhorizontal  == 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
        secondhorizontal  = 0;
        }
    };

    /*******
     * 3rd horizontal
     * 
     */
    var thirdhorizontal = 0;
    for(var i = 15; i < 22; i++)
    {
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {
            thirdhorizontal++;
            if(thirdhorizontal == 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
            thirdhorizontal  = 0;
        }
    };

    /*******
     * 4th horizontal
     * 
     */
    var forthhorizontal = 0;
    for(var i = 23; i < 30; i++)
    {
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {
            forthhorizontal++;
            if(forthhorizontal == 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
            forthhorizontal  = 0;
        }
    };

      /*******
     * fifth horizontal
     * 
     */
    var fifthhorizontal = 0;
    for(var i = 31; i < 38; i++)
    {
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {
            fifthhorizontal++;
            if(fifthhorizontal == 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
            fifthhorizontal = 0;
        }
    };

    /*******
     * sixthhorizontal
     * 
     */
    var sixthhorizontal= 0;
    for(var i = 31; i < 38; i++)
    {
        if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i + 1)].className)
        {
            sixthhorizontal++;
            if(sixthhorizontal== 3)
            {
            console.log("the winner is: " + document.getElementsByTagName("td")[i].className);
            /****
             * call something here
             */
            victory(document.getElementsByTagName("td")[i].className);
            }
        }
        else
        {
            sixthhorizontal = 0;
        }
    };

/********
 * vertical check
 * 
 * 
 * 
 * 
 */


 /**
  * firstvertical check
  * 
  * 
  * 
  */

var firstvertical= 0;
for(var i = 0; i < 35; i += 7)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
    {
        firstvertical++;
        if(firstvertical== 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        firstvertical = 0;
    }
};



 /**
  * secondvertical check
  * 
  * 
  * 
  */

 var secondvertical= 0;
 for(var i = 1; i < 36; i += 7)
 {
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        secondvertical++;
         if(secondvertical== 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        secondvertical = 0;
     }
 };

 
 
  /**
  * thirdvertical check
  * 
  * 
  * 
  */

 var thirdvertical = 0;
 for(var i = 2; i < 37; i += 7)
 {
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        thirdvertical ++;
         if(thirdvertical == 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        thirdvertical  = 0;
     }
 };

   /**
  * fourtvertical check
  * 
  * 
  * 
  */

 var fourthvertical= 0;
 for(var i = 3; i < 38; i += 7)
 {
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        fourthvertical++;
         if(fourthvertical== 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        fourthvertical = 0;
     }
 };

   /**
  * fifthverticalcheck
  * 
  * 
  * 
  */

 var fifthvertical= 0;
 for(var i = 4; i < 39; i += 7)
 {
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        fifthvertical++;
         if(fifthvertical== 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        fifthvertical= 0;
     }
 };

   /**
  * sixthverticalcheck
  * 
  * 
  * 
  */

 var sixthvertical= 0;
 for(var i = 5; i < 40; i += 7)
 {
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        sixthvertical++;
         if(sixthvertical== 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        sixthvertical= 0;
     }
 };
/***
 * seventhvertical check
 * 
 */

 var seventhvertical= 0;
 for(var i = 6; i < 34; i += 7)
 /* this has to be 1 row less or we go out of bounce*/

 {    
     if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+7)].className)
     {
        seventhvertical++;
         if(seventhvertical== 3)
         {
         console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
         
         /****
          * call something here
          * 
          */
         victory(document.getElementsByTagName("td")[i].className);
         }
     }
     else
     {
        seventhvertical= 0;
     }
 };


/**
 *  forward diagonal check
 * 
 * 
 * 
 */


var threetotweentyone = 0;
for(var i = 3; i < 21; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        threetotweentyone ++;
        if(threetotweentyone == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        threetotweentyone = 0;
    }
};

/**
 *  forward diagonal check
 * 
 * 
 * 
 */

var fourtotweentyeight = 0;
for(var i = 4; i < 28; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        fourtotweentyeight ++;
        if(fourtotweentyeight  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        fourtotweentyeight  = 0;
    }
};

/**
 *  forward diagonal check
 * 
 * 
 * 
 */

var fiveotweentythirthyfive = 0;
for(var i = 5; i < 35; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        fiveotweentythirthyfive++;
        if(fiveotweentythirthyfive  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        fiveotweentythirthyfive  = 0;
    }
};

/**
 *  forward diagonal check
 * 
 * 
 * 
 */

var sixtotweentythirthysix = 0;
for(var i = 6; i < 36; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        sixtotweentythirthysix++;
        if(sixtotweentythirthysix  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        sixtotweentythirthysix  = 0;
    }
};

/**
 *  forward diagonal check
 * 
 * 
 * 
 */

var thirthteentothirtyseven= 0;
for(var i = 13; i < 37; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        thirthteentothirtyseven++;
        if(thirthteentothirtyseven  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        thirthteentothirtyseven  = 0;
    }
};

/**
 *  forward diagonal check
 * 
 * 
 * 
 */

var tweentytothirtyeight = 0;
for(var i = 20; i < 38; i += 6)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+6)].className)
    {
        tweentytothirtyeight++;
        if(tweentytothirtyeight  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        tweentytothirtyeight  = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var threeto27 = 0;
for(var i = 3; i < 27; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        threeto27 ++;
        if(threeto27   == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        threeto27   = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var twoto26 = 0;
for(var i = 2; i < 34; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        twoto26 ++;
        if(twoto26   == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        twoto26  = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var oneto33 = 0;
for(var i = 1; i < 33; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        oneto33 ++;
        if(oneto33    == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        oneto33   = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var zeroto32 = 0;
for(var i = 0; i < 32; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        zeroto32  ++;
        if(zeroto32   == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        zeroto32    = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var sevento39 = 0;
for(var i = 7; i < 39; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        sevento39 ++;
        if(sevento39  == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        sevento39   = 0;
    }
};

/**
 *  backward diagonal check
 * 
 * 
 * 
 */

var fourthteento38 = 0;
for(var i = 14; i < 38; i += 8)
{
    if(document.getElementsByTagName("td")[i].className === document.getElementsByTagName("td")[(i+8)].className)
    {
        fourthteento38 ++;
        if(fourthteento38   == 3)
        {
        console.log("the winner is: "+ document.getElementsByTagName("td")[i].className);
        
        /****
         * call something here
         * 
         */
        victory(document.getElementsByTagName("td")[i].className);
        }
    }
    else
    {
        fourthteento38   = 0;
    }
};
}