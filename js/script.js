var exs1 = {
  condition: 0,
  correctAnswerId: "exs1Answer1",
  type: "1a"
}
var exs2 = {
  condition: 0,
  correctAnswerId: "exs2Answer4",
  type: "1a"
}
// var exs3 = {
//   condition: 0,
//   correctAnswerId: "exs1Answer1",
//   type: "1a"
// }
// var exs4 = {
//   condition: 0,
//   correctAnswerId: "exs1Answer1",
//   type: "1a"
// }

function checkExs(exs) {
  if ($("#exs1Answer1").prop('checked') == false && $("#exs1Answer2").prop('checked') == false && $("#exs1Answer3").prop('checked') == false && $("#exs1Answer4").prop('checked') == false) {
  }
  else if (document.getElementById(exs.correctAnswerId).checked) {
      $("input.exs1Answers").attr("disabled", true);
      exs.condition = 2;
      $("#" + exs.correctAnswerId + "-label").css("backgroundColor", "green");
      $("#" + exs.correctAnswerId + "-label").css("color", "rgb(24,24,24)");
      }
    else {
      $("input.exs1Answers").attr("disabled", true);
      exs.condition = 0
      var selectedAnswer = "#" + $('.exs1Answers[type=radio]:checked').attr("id") + "-label";
      $(selectedAnswer).css("backgroundColor", "red");
      $(selectedAnswer).css("color", "rgb(24,24,24)");
    }
}


//---------------------------


function checkExs2() {
  if ($("#exs2Answer1").prop('checked') == false && $("#exs2Answer2").prop('checked') == false && $("#exs2Answer3").prop('checked') == false && $("#exs2Answer4").prop('checked') == false) {
  }
  else if (document.getElementById(exs2.correctAnswerId).checked) {
      $("input.exs1Answers").attr("disabled", true);
      exs2.condition = 2;
      $("#" + exs2.correctAnswerId + "-label").css("backgroundColor", "green");
      $("#" + exs2.correctAnswerId + "-label").css("color", "rgb(24,24,24)");
      }
    else {
      $("input.exs2Answers").attr("disabled", true);
      exs2.condition = 0
      var selectedAnswer = "#" + $('.exs2Answers[type=radio]:checked').attr("id") + "-label";
      $(selectedAnswer).css("backgroundColor", "red");
      $(selectedAnswer).css("color", "rgb(24,24,24)");
    }
}






//-----------------------------------
// type 1b example chouse-several-answers

var exs3 = {
  condition: 0,
  correctAnswersId: ["exs3Answer1","exs3Answer3"],
  type: "1b"
}


function checkExs3() {
    var selectedAnswers = $('input[type=checkbox]:checked').map(function() {
        return $(this).attr('id');
    }).get();



    if ($("#exs3Answer1").prop('checked') == false && $("#exs3Answer2").prop('checked') == false && $("#exs3Answer3").prop('checked') == false && $("#exs3Answer4").prop('checked') == false) {

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



  function checkAll() {
    $('.submission-container').fadeOut(200);
    $('.results-box').slideDown(500,'linear');
    $('html,body').animate({ scrollTop: 2000 }, 'slow')
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
