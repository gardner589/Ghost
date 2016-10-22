$(document).ready(function(){
  $('.main').hide()
  $('#start').click(function(){
    $('.starter').hide(1200)
    $('.main').show(1300)
  })
  var arry = []
  var playerscr = 0
  var pcscr = 0
  $('.retry').toggle()
  function checker (){
    console.log('things happening')
    i = 0
    while (i < arry.length){
      if ($('.board p').text().toLowerCase() === arry[i]){
        $('input').hide()
        $('.message').append('<h1>Game Over</h1>')
        return false
      }else{
        return true
      }
      i++
    }
  }
  $(".playerMove").submit(function(evt){
    var letter = $("#letter").val()
    evt.preventDefault();
    if(letter.length == 1 && letter != ' '){
      $('.board p').append(letter.toUpperCase())
      var brd = $(".board p").text()
      $("#letter").val('')
        $.getJSON(("https://api.datamuse.com/words?sp="+brd+"*&max=1000"), function(res){
          arry = []
          $.each(res, function(i, thing){
            if(thing.word.indexOf(' ') >= 0 || thing.word.length < 5 || thing.word.indexOf('-') >= 0){
            }else{
              arry.push(thing.word)
            }
          })
        }).then(function(){
          console.log(arry);
          if (checker()){
            var rando = Math.floor(Math.random() * arry.length)
            var wrd = arry[rando].charAt(brd.length).toUpperCase()
            $('.board p').hide(200)
            $('.board p').append(wrd).show(1000)
            if(!checker()){
              playerscr += 1
              $('.message').append('<h1>You Win</h1>')
              $('#playscre').html(playerscr)
              $('.message').append('<h2>The computer spelled the last letter!</h2>')
              $('.retry').toggle()
            }
          }else{
            pcscr += 1
            $('input').hide()
            $("#pcscre").html(pcscr)
            $('.message').append('<h1>You Lose</h1>')
            $('.retry').toggle()
            var gameWord = $('.board p').text().toLowerCase()
            for(var i = 0;i < arry.length; i++){
              if( gameWord === arry[i]){
                $('.message').append('<h2>'+arry[i].toUpperCase()+' is a word with 5 or more letters!</h2>')
            }
          }
          if(arry.indexOf(gameWord) < 0){
            $('.message').append('<h2>..Is '+gameWord.toUpperCase()+' a word!?</h2>')
          }
        }
        })

    }else{
      alert("Just one letter at a time please")
      $("#letter").val('')
      console.log("bad");
    }
  })

  $('.retry').click(function(){
    arry = []
    $('.board p').text('')
    $('input').show()
    $('h1').remove()
    $('h2').remove()
    $('.retry').toggle()
  })
  $('input').keyup(function(){
    var brd = $(".board p").text()
    checker()
  })
})
