$(document).ready(function(){
  // var tester = $("input").val()
  var arry = []
  $(".playerMove").submit(function(evt){
    var letter = $("#letter").val()
    evt.preventDefault();
    if(letter.length == 1){
      $('.board p').append(letter.toUpperCase())
      var brd = $(".board p").text()
      console.log(brd.length);
      $("#letter").val('')
      if(brd.length >= 2){
        if(brd.length == 3){
          $.getJSON(("https://api.datamuse.com/words?sp="+brd+"*"), function(res){
            $.each(res, function(i, thing){
              arry.push(thing.word)
            })
            console.log(arry);
            var choice = arry[Math.floor(Math.random() * arry.length)];
            $('.board p').append(choice.charAt(3).toUpperCase());
          })

          // console.log(arry);
        }else if (brd.length > 3) {
          if((brd.length == 5) && (brd.length%2 == 1)){
            var gameray = []
            $.each(arry, function(i, thing){
              if(thing.includes(brd.toLowerCase())){
                gameray.push(thing)
              }
            })
            var nxtLtr = gameray[Math.floor(Math.random() * gameray.length)]
            $('.board p').append(nxtLtr.charAt(brd.length).toUpperCase())
          }else{
            console.log('huh?')
          }
          console.log(gameray)
        }
      }else{
      setTimeout(function(){
        var abcs = "AEIOU"
        var aiLetter = abcs.split('')
        var randLetter = aiLetter[Math.floor(Math.random() * aiLetter.length)]
        $('.board p').append(randLetter)
      }, 500)
      }
    }else{
      alert("Just one letter at a time please")
      console.log("bad");
    }
  })
})
