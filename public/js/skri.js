if(brd.length >= 2){
  // if(brd.length == 3){
    $.getJSON(("https://api.datamuse.com/words?sp="+brd+"*"), function(res){
      $.each(res, function(i, thing){
        arry.push(thing.word)
      })
      console.log(arry);
      var choice = arry[Math.floor(Math.random() * arry.length)];
      while(choice.length == brd.length+1){
        var choice = arry[Math.floor(Math.random() * arry.length)]
      }
      $('.board p').append(choice.charAt(3).toUpperCase());
    })

    // console.log(arry);
  // }else
   if (brd.length > 3) {
    if(brd.length == 5){
      var gameray = []
      $.each(arry, function(i, thing){
        if(thing.includes(brd.toLowerCase())){
          gameray.push(thing)
        }
      })
      var nxtLtr = gameray[Math.floor(Math.random() * gameray.length)]
      $('.board p').append(nxtLtr.charAt(brd.length).toUpperCase())
    }else{
      var gameray = []
      $.each(arry, function(i, thing){
        if(thing.includes(brd.toLowerCase())){
          gameray.push(thing)
        }
      })
    }
    console.log(gameray)
  }


  ===================================================================
  ===================================================================

  setTimeout(function(){
    if(arry.length == 0){
      alert('nope')
    }
    for (var i = 0; i < arry.length; i++) {
      if(arry[i] == brd){
        alert(array[i])
        i = arry.length
      }
    }
    var rando = Math.floor(Math.random() * arry.length)
    $('.board p').append(arry[rando].charAt(brd.length).toUpperCase())
    $.map(arry, function(item){
      if(item.length != brd.length){
        return item
      }
    })
  }, 1000)
