$(document).ready(function(){
  $('body').html('<h1></h1>')
  setInterval(function(){
    setTimeout(function(){
      $('h1').html('H')
    }, 1000)
    setTimeout(function(){
      $('h1').html('He')
    }, 1200)
    setTimeout(function(){
      $('h1').html('Hey')
    }, 1300)
    setTimeout(function(){
      $('h1').html('He')
    }, 1700)
    setTimeout(function(){
      $('h1').html('H')
    }, 1800)
    setTimeout(function(){
      $('h1').html('')
    }, 2000)
    setTimeout(function(){
      $('h1').html('W')
    }, 2200)
    setTimeout(function(){
      $('h1').html('Wha')
    }, 2400)
    setTimeout(function(){
      $('h1').html('What\'s')
    }, 2600)
    setTimeout(function(){
      $('h1').html('What\'s up')
    }, 2800)
  }, 3000)
})
