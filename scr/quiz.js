let url = "https://charming-mixolydian-cyclamen.glitch.me/questions";

let form = document.getElementById("quiz-form");
form.addEventListener("submit", function(){
    event.preventDefault();
    let question = document.getElementById("question-statement")
    let ques = question.value;
    let optionA = document.getElementById("option-a");
    let optA = optionA.value;
    let optionB = document.getElementById("option-b");
    let optB = optionB.value;
    let optionC = document.getElementById("option-c");
    let optC = optionC.value;
    let optionD = document.getElementById("option-d");
    let optD = optionD.value;
    let correctAns = document.getElementById("correctOption");
    let correctOpt = correctAns.value;
    let questionsObj = {
        title: ques ,
        optionA: optA,
        optionB: optB,
        optionC: optC,
        optionD: optD,
        correctOption: correctOpt,
        reviewStatus: false
      }
    fetch(url,{
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify(questionsObj)
    }).then(() => {
        alert("Question Created")
    }).catch(err => {
        alert("Error: " + err.message);
    })

})