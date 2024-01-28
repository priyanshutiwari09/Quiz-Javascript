const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: 0
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: 1
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1920", "1905", "1931"],
      correctAnswer: 0
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: 1
    }
];


//const correctAnswer = quiz[ans].correctAnswer;
//console.log(correctAnswer);

//if(userAns == correctAnswer){  console.log('y');}else     console.log('n');}


const allQuestion = document.querySelector('.allQuestion');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const showScore = document.querySelector('#showScore');

const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quiz[questionCount];
    
    allQuestion.innerText = questionList.question;

    option1.innerText = "Q1. "+ questionList.options[0];
    option2.innerText = "Q2. "+ questionList.options[1];
    option3.innerText = "Q3. "+ questionList.options[2];
    option4.innerText = "Q4. "+ questionList.options[3];
}

loadQuestion();
let result;

answers.forEach((element) => {
  element.addEventListener('click', function load(){
    result = this.value;
  })
})


submit.addEventListener('click', () =>{
    if(result == quiz[questionCount].correctAnswer){
      score++;
      console.log(score);
    }

    questionCount++;
    
    if(questionCount < quiz.length){
        loadQuestion();
    }
    else{
      showScore.style.display = 'block';
      submit.style.display = 'none';
      showScore.innerHTML = `
      <h3>You Scored ${score}/${quiz.length}</h3>
      <button class="btn" onclick="location.reload()">Play again</button>
      `
    }
});