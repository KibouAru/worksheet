// данные заданий ------------

var exs1 = {
  condition: "unknown",
  correctAnswerId: "exs1Answer4",
  maxScore: 1,
  amountOfAnswers: 4
}
var exs2 = {
  condition: "unknown",
  correctAnswerId: "exs2Answer1",
  maxScore: 1,
  amountOfAnswers: 4
}
var exs3 = {
  condition: "unknown",
  correctAnswersId: ["exs3Answer2","exs3Answer3"],
  maxScore: 2,
  amountOfAnswers: 4
}
var exs4 = {
  condition: "unknown",
  correctAnswerId: "exs4Answer1",
  maxScore: 1,
  amountOfAnswers: 4
}
var exs5 = {
  condition: "unknown",
  correctAnswerId: "exs5Answer1",
  maxScore: 1,
  amountOfAnswers: 3
}
var exs6 = {
  condition: "unknown",
  correctAnswersId: ["exs6Answer1","exs6Answer4"],
  maxScore: 2,
  amountOfAnswers: 4
}
var exs7 = {
  condition: "unknown",
  correctAnswerId: "exs7Answer3",
  maxScore: 1,
  amountOfAnswers: 4
}
var exs8 = {
  condition: "unknown",
  correctAnswersId: ["exs8Answer1","exs8Answer3"],
  maxScore: 2,
  amountOfAnswers: 4
}
var exs9 = {
  condition: "unknown",
  correctAnswersId: ["exs9Answer2","exs9Answer4"],
  maxScore: 2,
  amountOfAnswers: 4
}
var exs10 = {
  condition: "unknown",
  correctAnswerId: "exs10Answer2",
  maxScore: 1,
  amountOfAnswers: 4
}





// ограничение выбранных чекбоксов
function limitSelection(exs) {
  var exsVar = eval(exs);
  var limit = exsVar.maxScore;

  $('.'+exs+'Answers').on('change', function (e) {
      if ($('.'+exs+'Answers[type=checkbox]:checked').length > limit) {
          $(this).prop('checked', false);
      }
  });}

// лапками...
limitSelection("exs3");


// Проверяет на случай если ответы не выбраны
function noneChousen(exs) {
  var amountOfAnswers = eval(exs).amountOfAnswers;
  var itr = 1;

  do  {
    if ($("#"+exs+"Answer"+String(itr)).prop('checked') == false) {
      // $("#"+exs+"Answer"+String(itr)+"-label").css("backgroundColor","grey"); debug
      itr++;
    }
    else {
      break;
    }
  } while ((itr-1) <= amountOfAnswers);


  if ((itr-1) == amountOfAnswers) {
    return 1;
  }
  else {
    return 0;
  }
}

// В зависимости от правильности ответа выделить все тусклым цветом, затем выделить выбранные ярким
function highlightAnswers(exs) {
  var amountOfAnswers = eval(exs).amountOfAnswers;
  var exsVar = eval(exs);
  var count = 1

  if (exsVar.maxScore == 1) {
                // шаг 1
                 do {
                   if ('#' + exs + 'Answer' + count == "#" + exsVar.correctAnswerId)   {
                     $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(131, 192, 160, 0.5)")
                   }
                   else {
                     $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(192, 131, 131,0.5)")
                   }
                   count++
                 } while (count <= amountOfAnswers)

                 // шаг 2
                 count = 1;

                 do {
                   if ('#' + exs + 'Answer' + count == "#" + $('.'+exs+'Answers[type=radio]:checked').attr("id"))   {
                     if ('#' + exs + 'Answer' + count == "#" + exsVar.correctAnswerId)   {
                       $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(131, 220, 147, 1)");
                       $('#' + exs + 'Answer' + count + "-label").css("color", "rgb(24,24,24)");
                       break;
                     }
                     else {
                       $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(227, 66, 66, 1)");
                       $('#' + exs + 'Answer' + count + "-label").css("color", "rgb(24,24,24)");
                       break;
                     }
                   }
                   else {
                     count++
                   }
                 } while (count <= amountOfAnswers)
  }
  else if (exsVar.maxScore > 1) {

              var selectedAnswers = $('.'+exs+'Answers[type=checkbox]:checked').map(function() {
                  return $(this).attr('id');
              }).get();

                  count = 0;
              var answerNumber = 1;
              var arrayCorrect = 0;

              // шаг 1
                do {
                     do {
                       if ('#' + exs + 'Answer' + answerNumber == "#" + exsVar.correctAnswersId[arrayCorrect])   {
                         $('#' + exs + 'Answer' + answerNumber + "-label").css("backgroundColor","rgba(131, 192, 160, 0.5)")
                         var correct = true;
                       }

                      count++
                      arrayCorrect++

                      if (count == exsVar.correctAnswersId.length && correct !== true) {
                        $('#' + exs + 'Answer' + answerNumber + "-label").css("backgroundColor","rgba(192, 131, 131,0.5)")
                      }

                     } while (count <= amountOfAnswers)

                     count = 0
                     arrayCorrect = 0
                     correct = false;
                     answerNumber++

                   } while (answerNumber <= amountOfAnswers)



              // шаг 2
                 count = 0;
                 arrayCorrect = 0
                 var arraySelected = 0

                 do {

                      do {

                        if (selectedAnswers[arraySelected] == exsVar.correctAnswersId[arrayCorrect]) {
                            $('#' + selectedAnswers[arraySelected] + "-label").css("backgroundColor","rgba(131, 220, 147, 1)");
                            $('#' + selectedAnswers[arraySelected] + "-label").css("color", "rgb(24,24,24)");
                            var correct = true;
                        }

                        count++
                        arrayCorrect++

                        if (count == exsVar.correctAnswersId.length && correct !== true) {
                            $('#' + selectedAnswers[arraySelected] + "-label").css("backgroundColor","rgba(227, 66, 66, 1)");
                            $('#' + selectedAnswers[arraySelected] + "-label").css("color", "rgb(24,24,24)");
                        }

                      } while (count < exsVar.correctAnswersId.length)

                      correct = false;
                      count = 0;
                      arrayCorrect = 0;
                      arraySelected++;

                    } while (arraySelected <= selectedAnswers.length)
  }
}


//
//
//


// #1 all 1a types

function checkExsT1(exs,forced) {

    var exsVar = eval(exs);

      if (noneChousen(exs) == true && forced == false) {}
      else {
      if (noneChousen(exs) == true && forced == true) {
          exsVar.condition = 0;
      }
      else if ($("#"+exsVar.correctAnswerId).is(':checked')) {
          exsVar.condition = 1;
          }
      else {
          exsVar.condition = 0;
      }

          highlightAnswers(exs)
          $("input."+exs+"Answers").attr("disabled", true);
      }
}


//-----------------------------------
// type 1b


function checkExsT2(exs,forced) {

    var amountOfAnswers = eval(exs).amountOfAnswers;
    var exsVar = eval(exs);
    var selectedAnswers = $('.'+exs+'Answers[type=checkbox]:checked').map(function() {
        return $(this).attr('id');
    }).get();

    if (noneChousen(exs) == true && forced == false) {}
    else {
    if (noneChousen(exs) == true && forced == true) {
      exsVar.condition = 0;
    }
    else {
      var count = 0;
      var arrayCorrect = 0
      var arraySelected = 0
      exsVar.condition = 0

      do {
           do {

             if (selectedAnswers[arraySelected] == exsVar.correctAnswersId[arrayCorrect]) {
                 exsVar.condition++
             }

             count++
             arrayCorrect++

           } while (count < exsVar.correctAnswersId.length)

           count = 0;
           arrayCorrect = 0;
           arraySelected++;

         } while (arraySelected <= selectedAnswers.length)
    }

    $("input."+exs+"Answers").attr("disabled", true);
    highlightAnswers(exs);
  }}




    function disableUnchecked() {
      if (exs1.condition == "unknown") {checkExsT1('exs1',true)}      //T1A
      if (exs2.condition == "unknown") {checkExsT1('exs2',true)}      //T1A
      if (exs3.condition == "unknown") {checkExsT2('exs3',true)}      //T2A
      if (exs4.condition == "unknown") {checkExsT1('exs4',true)}      //T1A
      if (exs5.condition == "unknown") {checkExsT1('exs5',true)}      //T1B
      if (exs6.condition == "unknown") {checkExsT2('exs6',true)}      //T2A
      if (exs7.condition == "unknown") {checkExsT1('exs7',true)}      //T1B
      if (exs8.condition == "unknown") {checkExsT2('exs8',true)}      //T2A
      if (exs9.condition == "unknown") {checkExsT2('exs9',true)}      //T2A
      if (exs10.condition == "unknown") {checkExsT1('exs10',true)}    //T1A
    }

    function displayResult() {
      $("#exs1Result span").text(exs1.condition + '/' + exs1.maxScore)
      $("#exs2Result span").text(exs2.condition + '/' + exs2.maxScore)
      $("#exs3Result span").text(exs3.condition + '/' + exs3.maxScore)
      $("#exs4Result span").text(exs4.condition + '/' + exs4.maxScore)
      $("#exs5Result span").text(exs5.condition + '/' + exs5.maxScore)
      $("#exs6Result span").text(exs6.condition + '/' + exs6.maxScore)
      $("#exs7Result span").text(exs7.condition + '/' + exs7.maxScore)
      $("#exs8Result span").text(exs8.condition + '/' + exs8.maxScore)
      $("#exs9Result span").text(exs9.condition + '/' + exs9.maxScore)
      $("#exs10Result span").text(exs10.condition + '/' + exs10.maxScore)
    }

    function colorResults() {
      var count = 1;
      var exs = ("exs");
      var exsVar = eval(exs);

      do {
        exs = ("exs" + count);
        exsVar = eval(exs);

        if (exsVar.condition == exsVar.maxScore) {$("#"+exs+"Result").css("backgroundColor","rgba(131, 220, 147, 1)");}
        else if (exsVar.condition == 0) {$("#"+exs+"Result").css("backgroundColor","rgba(227, 66, 66, 1)");}
        else {$("#"+exs+"Result").css("backgroundColor","orange");}

        exs = exs.slice(0,-1);
        count++

      } while (count <= 10)

    }



  function checkAllButton() {
    $('.submission-container').fadeOut(200);
    $('.results-box').slideDown(300,'linear');
    $('html,body').animate({ scrollTop: 3000 }, 'slow')

    disableUnchecked();
    displayResult();
    colorResults();
  }






















// $('html,body').animate({ scrollTop: 0 }, 'slow');

//    window.scrollBy(0, 300);
    //toggle(speed,easing,callback)


    // var titles = $('input[type=checkbox]:checked').map(function() {
    //     return $(this).attr('id');   // or just `return this.title`
    // }).get();


  // $('button').on('click', function() {
  //       var array = [];
  //       $("input:checkbox[name=type]:checked").each(function() {
  //           array.push($(this).val());
  //       });
  //       $('#GFG_DOWN').text(array);
  //   });




// if (exs2.correctAnswersId[0] = checked && exs2.correctAnswersId[1] = checked && exs2.correctAnswersId[2] = checked) {
//   exs2.condition = 2;
// }
// else if (exs2.correctAnswersId[0] = checked || exs2.correctAnswersId[1] = checked || exs2.correctAnswersId[2] = checked) {
//   exs2.condition = 1;
// }
// else {exs2.condition = 0}
