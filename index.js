function quiz() {
	 var score = 0; 
	 var totalQuestions = 3;
    alert("Welcome to my trivia game!");
    alert("Make sure you answer all the questions.");
    
     var q1 = prompt('What is 1/2 of 2?');       
	if(q1 == "1"    ) {
		 score = score + 1;
		 alert("Correct!"); 

	} else {
		 alert("Incorrect!"); 

	}
    
        var q2 = prompt('What is 1/2 of 4?');         
	if(  q2 == "2"   ) {
		 score = score + 1; 
		 alert("Correct!"); 

	} else {
		 alert("Incorrect!"); 

	}
   
      var q3 = prompt('What is 1/2 of 5?');          
	if(  q3 == "2.5"   ) {
		 score = score + 1; 
		alert("Correct!");  

	} else {
		 alert("Incorrect!"); 

	}

	alert("You got " + score + " questions out of " + totalQuestions + " correct.");  
}
