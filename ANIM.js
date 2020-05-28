var button = document.getElementById('butn');
var button1 = document.getElementById('butn1');
/*Am creating a function for above code*/
button.onclick = function(){
  var morphing = anime({
    targets:'.polymorph',
    points:[
      { value: '215,110 0,110 0,0 47.7,0 67,76'},
      { value: '215,110 0,110 0,0 0,0 67,76'},
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false
  });

  anime({
    targets: '#blip',
    opacity: 1,
    duration: 500,
    translateY: 150
  })

  var promise = morphing.finished.then(() =>{
    button1.onclick = function(){
        var morphing = anime({
          targets:'.polymorph',
          points:[
            { value: '215,110 0,110 0,0 47.7,0 67,76'},
            { value: '215,110 0,110 0,0 47.7,0 215,0'},
          ],
          easing: 'easeOutQuad',
          duration: 1200,
          loop: false
        });
        anime({
          targets: '#blip',
          opacity: 0,
          duration: 500,
          translateY: -800
        })
     };
  })
}
