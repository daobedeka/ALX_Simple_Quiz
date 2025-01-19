function checkAnswer() {
    // Function body
    const correctAnswer='4'
    
 const userAnswer=document.querySelector("input[type=radio][name=quiz]:checked").value
 let feedback=document.getElementById('feedback')

 if (userAnswer === correctAnswer) {
    feedback.textContent="Correct! Well done."

 }
 else{
    feedback.textContent="That's incorrect. Try again!"
 }

}

const submit=document.getElementById('submit-answer');
submit.addEventListener("click",checkAnswer)

