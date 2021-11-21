const total = questions.length;
var x = Math.floor(Math.random() * total);

(function showContent() {
  content.innerHTML = questions[x].question;
})();

function show() {
  answer.innerHTML = questions[x].answer;
  console.log("active", question);
  answer.classList.toggle("active");
  question.classList.remove("active");
}

function next() {
  console.log("x: ", x);
  answer.classList.remove("active");
  x = (Math.floor(Math.random() * total) + 2) % 5;
  content.innerHTML = questions[x].question;
  question.classList.remove("active");
}

function add(){
    question.classList.add("active");
    answer.classList.remove("active");
}

function submit() {
  questions.push({
    numb: questions.length,
    question: ques.value,
    answer: ans.value,
  });
  question.classList.remove("active");
  alert("submit success");
  ques.value = "";
  ans.value = "";
}

function cancel() {
  question.classList.remove("active");
  ques.value = "";
  ans.value = "";
}