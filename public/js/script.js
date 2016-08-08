$(document).ready(function(){
  var arry = []
  $(".playerMove").submit(function(evt){
    var letter = $("#letter").val()
    evt.preventDefault();
    if(letter.length == 1 && letter != ' '){
      $('.board p').append(letter.toUpperCase())
      var brd = $(".board p").text()
      $("#letter").val('')
        $.getJSON(("https://api.datamuse.com/words?sp="+brd+"*"), function(res){
          arry = []
          $.each(res, function(i, thing){
            if(thing.word.indexOf(' ') >= 0 || thing.word.length < 3){
              console.log('!');
            }else{
              arry.push(thing.word)
              console.log(arry)
            }
          })
        })
      setTimeout(function(){
        if(brd.length <= 5){
          var rando = Math.floor(Math.random() * arry.length)
          $('.board p').append(arry[rando].charAt(brd.length).toUpperCase())
          $.map(arry, function(item){
            if(item.length != brd.length){
              return item
            }
          })
        }else{
          $('input').trigger('keyup')
        }
      }, 500)
      console.log(arry)

    }else{
      alert("Just one letter at a time please")
      console.log("bad");
    }
  })

  $('input').keyup(function(){
    var brd = $(".board p").text()
    $.each(arry, function(i, item){
      if ((item.toUpperCase() == brd) && (brd.length > 4)){
        alert("GHOST!")
      }
    })
  })
})
