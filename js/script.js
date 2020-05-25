// Проверяет на случай если ответы не выбраны
function noneChousen(exs) {
  var int = eval(exs).amountOfAnswers;
  var itr = 1;

  do  {
    if ($("#"+exs+"Answer"+String(itr)).prop('checked') == false) {
      // $("#"+exs+"Answer"+String(itr)+"-label").css("backgroundColor","grey"); debug
      itr++;
    }
    else {
      break;
    }
  } while ((itr-1) <= int);


  if ((itr-1) == int) {
    return 1;
  }
  else {
    return 0;
  }
}

// В зависимости от правильности ответа выделить все тусклым цветом, затем выделить выбранные ярким
function highlightAnswersT1(exs) {
  var int = eval(exs).amountOfAnswers;
  var exsVar = eval(exs);
  var count = 1
   // шаг 1
    do {
      if ('#' + exs + 'Answer' + count == "#" + exsVar.correctAnswerId)   {
        $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(131, 192, 160, 0.5)")
      }
      else {
        $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(192, 131, 131,0.5)")
      }
      count++
    } while (count <= int)

    // шаг 2
    count = 1;

    do {
      if ('#' + exs + 'Answer' + count == "#" + $('.'+exs+'Answers[type=radio]:checked').attr("id"))   {
        if ('#' + exs + 'Answer' + count == "#" + exsVar.correctAnswerId)   {
          $('#' + exs + 'Answer' + count + "-label").css("backgroundColor","rgba(131, 222, 147, 1)");
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
    } while (count <= int)
}
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
var exs10 = {
  condition: "unknown",
  correctAnswerId: "exs10Answer2",
  maxScore: 1,
  amountOfAnswers: 4
}

//
//
//


// switch () {
//   case value1: code
//   break;
//   case value2: code
//   break;
//   default:
// }



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
        else {
          exsVar.condition = 0
          }
          highlightAnswersT1(exs)
          $("input."+exs+"Answers").attr("disabled", true);
      }
}

// #2

// function checkExs2(forced) {
//
//       if (noneChousen("exs2") == true && forced == false) {}
//       else {
//       if (noneChousen("exs2") == true && forced == true) {
//           exs2.condition = 0;
//       }
//       else if ($("#"+exs2.correctAnswerId).is(':checked')) {
//           exs2.condition = 1;
//           }
//         else {
//           exs2.condition = 0
//           }
//           highlightAnswersT1("exs2")
//           $("input.exs2Answers").attr("disabled", true);
//       }
// }





//-----------------------------------
// type 1b




function checkExs3(forced) {
    var selectedAnswers = $('input[type=checkbox]:checked').map(function() {
        return $(this).attr('id');
    }).get();



    if (noneChousen("exs3") == true) {}
    else if (forced == true) {
        exs3.condition = 0;
        $("input.exs3Answers").attr("disabled", true);
    }
    else if (JSON.stringify(selectedAnswers)==JSON.stringify(exs3.correctAnswersId)) {

        $("input.exs3Answers").attr("disabled", true);
        $('#' + selectedAnswers[0] + '-label').css("backgroundColor", "green");
        $('#' + selectedAnswers[1] + '-label').css("backgroundColor", "green");
        $('#' + selectedAnswers[0] + '-label').css("color", "rgb(24,24,24)");
        $('#' + selectedAnswers[1] + '-label').css("color", "rgb(24,24,24)");
        exs3.condition = 2;
    }
    else if (selectedAnswers[0] == exs3.correctAnswersId[0] || selectedAnswers[0] == exs3.correctAnswersId[1]) {
        $("input.exs3Answers").attr("disabled", true);
        $('#' + selectedAnswers[0] + '-label').css("backgroundColor", "green");
        $('#' + selectedAnswers[1] + '-label').css("backgroundColor", "red");
        $('#' + selectedAnswers[0] + '-label').css("color", "rgb(24,24,24)");
        $('#' + selectedAnswers[1] + '-label').css("color", "rgb(24,24,24)");
        exs3.condition = 1;
    }
    else if (selectedAnswers[1] == exs3.correctAnswersId[0] || selectedAnswers[1] == exs3.correctAnswersId[1]) {
        $("input.exs3Answers").attr("disabled", true);
        $('#' + selectedAnswers[0] + '-label').css("backgroundColor", "red");
        $('#' + selectedAnswers[1] + '-label').css("backgroundColor", "green");
        $('#' + selectedAnswers[0] + '-label').css("color", "rgb(24,24,24)");
        $('#' + selectedAnswers[1] + '-label').css("color", "rgb(24,24,24)");
        exs3.condition = 1;
    }
    else {
        $("input.exs3Answers").attr("disabled", true);
        $('#' + selectedAnswers[0] + '-label').css("backgroundColor", "red");
        $('#' + selectedAnswers[1] + '-label').css("backgroundColor", "red");
        $('#' + selectedAnswers[0] + '-label').css("color", "rgb(24,24,24)");
        $('#' + selectedAnswers[1] + '-label').css("color", "rgb(24,24,24)");
        exs3.condition = 0;
    }}




    function disableUnchecked() {
      if (exs1.condition == "unknown") {checkExs1('exs1',true)}
      if (exs2.condition == "unknown") {checkExs1('exs2',true)}
      if (exs3.condition == "unknown") {checkExs3(true)}
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
