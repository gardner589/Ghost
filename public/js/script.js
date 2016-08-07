$(document).ready(function(){
  // var tester = $("input").val()
  var arry = ["strriing"]
  $(".playerMove").submit(function(evt){
    var letter = $("#letter").val()
    evt.preventDefault();
    if(letter.length == 1){
      $('.board p').append(letter.toUpperCase())
      var brd = $(".board p").text()
      console.log(brd);
      $.getJSON(("https://api.datamuse.com/words?sp="+brd+"*"), function(res){
        $.each(res, function(i, thing){
          // arry.push(thing.word)
          console.log(thing.word);
        })
      })
      $("#letter").val('')
    }else{
      console.log("bad");
    }
  })
})
