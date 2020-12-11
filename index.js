function quiz() {
	 var correct = 0; 
	 var totalQuestions = 3;
    alert("Welcome to my trivia game!");
    alert("Make sure you answer all the questions.");
    Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2', '3']
}).queue([
  {
    title: 'Question 1',
    text: 'What is 1/2 of 2?'
  },
  {
    title: 'Question 2',
    text: 'What is 1/2 of 4?'
  },
  {
    title: 'Question 3',
    text: 'What is 1/2 of 5?'
  },
	    

]).then((result) => {
  if (result.value) {
    const answers = JSON.stringify(result.value)
    console.log(answers)
	  console.log(answers[1])
    if (result.value[0] === '1') {
	    correct++
    }
	if (result.value[1] === '2') {
	    correct++
    }    
	if (result.value[2] === '2.5') {
	    correct++
    }
    Swal.fire({
      title: 'All done!',
      html: `
        You got ${correct} / ${totalQuestions} correct!
      `,
      confirmButtonText: 'Ok!'
    })
  }
})

 

}
