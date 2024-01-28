const quiz = [
    {
      question: "What is the result of 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      options: ["let", "var", "const", "int"],
      correctAnswer: 0
    },
    {
      question: "What does 'DOM' stand for?",
      options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Oriented Model"],
      correctAnswer: 0
    },
    {
      question: "How do you write a comment in JavaScript?",
      options: ["// Comment", "# Comment", "/* Comment */", "<!-- Comment -->"],
      correctAnswer: 0
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["insertEnd()", "append()", "addToEnd()", "push()"],
      correctAnswer: 3
    },
    {
      question: "What is the purpose of the 'querySelector' method in JavaScript?",
      options: ["Selects an HTML element", "Selects a CSS class", "Selects a DOM element", "Selects a JSON object"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a primitive data type in JavaScript?",
      options: ["Object", "Array", "String", "Function"],
      correctAnswer: 2
    },
    {
      question: "What is the result of the expression '3' + 2 in JavaScript?",
      options: ["32", "5", "6", "Error"],
      correctAnswer: 0
    },
    {
      question: "How do you check the type of a variable in JavaScript?",
      options: ["typeOf", "typeof", "checkType", "variableType"],
      correctAnswer: 0
    },
    {
      question: "Which loop is used for iterating over the properties of an object?",
      options: ["for loop", "while loop", "do-while loop", "for...in loop"],
      correctAnswer: 3
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