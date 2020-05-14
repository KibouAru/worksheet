

// goal:
// --  shuflle answers randomly
// --  make question -- answer corelation like so:
//
//  var exs1 -- used to check answers, ex1.condition holds (0,1,2) - level of success
//  var #exs1Answer1 -- our answers ID
//
// hmm, I have to make every answer conditionable
//
//  if (#exs1Answer1 == checked && #exs1Answer3 == checked)         numberOfCorrectAnswers: 3,



//-----------------------------------
// type 1a example chouse-one-answer question

// var exs1 = {
//   condition: 0, //just in case
//   correctAnswerId: "exs1Answer1",
//   type: "1a" //meta
// }
//
// if (document.getElementById(exs1.correctAnswerId).checked) {exs1.condition = 2}
// else {exs1.condition = 0}

var exs1 = {
  condition: 0, //just in case
  correctAnswerId: "exs1Answer1",
  type: "1a" //meta
}

    if (document.getElementById(exs1.correctAnswerId).checked) {
      exs1.condition = 2
      }
    else {exs1.condition = 0}

// Работает! Теперь надо это завернуть в функцию и ебануть на кнопку "проверить"


//-----------------------------------
// type 1b example chouse-several-answers

var exs2 = {
  condition: 0,
  correctAnswersId: ["#exs2Answer2","#exs2Answer3","#exs2Answer4"],
  type: "1b"
}

if (exs2.correctAnswersId[0] = checked && exs2.correctAnswersId[1] = checked && exs2.correctAnswersId[2] = checked) {
  exs2.condition = 2;
}
else if (exs2.correctAnswersId[0] = checked || exs2.correctAnswersId[1] = checked || exs2.correctAnswersId[2] = checked) {
  exs2.condition = 1;
}
else {exs2.condition = 0}
