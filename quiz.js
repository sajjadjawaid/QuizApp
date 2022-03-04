// list of answers.
const correctAnswers=['A', 'B' ,'A', 'B'];
console.log(correctAnswers)

// form.

const form=document.querySelector('.quiz-form')
console.log(form)

// result. 
const result=document.querySelector('.result')

form.addEventListener('submit', e=> {
e.preventDefault()
const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
let score=0;
userAnswers.forEach((answer,index)=>{
if (answer === correctAnswers[index]) {
    score += 25;
}
// this will remove display none and will show the result
result.classList.remove('d-none')
scrollTo(0,0);
let output =0;
const timer= setInterval(()=> {
    result.querySelector('span').textContent=`${output}%`
    if(output===score){
        clearInterval(timer)
    }else{
        output++;
    }


},10)



})



})