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
var exs7 = {
  condition: "unknown",
  correctAnswerId: "exs7Answer3",
  maxScore: 1,
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

function checkExs1(exs,forced) {

    var exsVar = eval(exs);

      if (noneChousen(exs) == true && forced == false) {}
      else {
      if (noneChousen(exs) == true && forced == true) {
          exsVar.condition = 0;
      }
      else if ($("#"+exsVar.correctAnswerId).is(':checked')) {
          exsVar.condition = 1;
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
      if (exs1.condition == "unknown") {checkExs1('exs1',true)}
      if (exs2.condition == "unknown") {checkExs1('exs2',true)}
      if (exs3.condition == "unknown") {checkExsT2(true)}
      if (exs4.condition == "unknown") {checkExs1('exs4',true)}
      if (exs10.condition == "unknown") {checkExs1('exs10',true)}
    }

    function displayResult() {
      $("#exs1Result span span").text(exs1.condition)
      $("#exs2Result span span").text(exs2.condition)
      $("#exs3Result span span").text(exs3.condition)
      $("#exs4Result span span").text(exs4.condition)
      $("#exs10Result span span").text(exs10.condition)
    }

    // function colorResults() {
    //   switch (exs1.condition) {
    //     case 2: $("#exs1Result").css("backgroundColor","green");
    //     case 1: $("#exs1Result").css("backgroundColor","yellow");
    //     case 0: $("#exs1Result").css("backgroundColor","red");
    //     break;
    //   }
    //   switch (exs2.condition) {
    //     case 2: $("#exs2Result").css("backgroundColor","green");
    //     case 1: $("#exs2Result").css("backgroundColor","yellow");
    //     case 0: $("#exs2Result").css("backgroundColor","red");
    //     break;
    //   }
    //   switch (exs3.condition) {
    //     case 2: $("#exs3Result").css("backgroundColor","green");
    //     case 1: $("#exs3Result").css("backgroundColor","yellow");
    //     case 0: $("#exs3Result").css("backgroundColor","red");
    //     break;
    //   }
    // }

  function checkAllButton() {
    $('.submission-container').fadeOut(200);
    $('.results-box').slideDown(300,'linear');
    $('html,body').animate({ scrollTop: 2000 }, 'slow')

    disableUnchecked();
    displayResult();
    // colorResults();
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
