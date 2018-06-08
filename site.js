var btnAnimate = document.getElementById('btn-animate');
var btnBack = document.getElementById('btn-back');

btnAnimate.onclick = function() {
  var morphing = anime({
    targets: '.hero-background',
    points: [
      { value: '300,150 0,150 0,0 60,0 120,60' },
      { value: '300,150 0,150 0,0 0,0 100,70' }
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: false
  });
  anime({
    targets: '.discover_content',
    opacity: 1,
    delay: 1500,
    duration: 500,
    translateY: 150
  });
  btnAnimate.style.visibility = 'hidden';

  var promise = morphing.finished.then(function() {
    btnBack.onclick = function() {
      anime({
        targets: '.hero-background',
        points: [
          { value: '300,150 0,150 0,0 60,0 100,60' },
          { value: '300,150 0,150 0,0 60,0 300,0' }
        ],
        easing: 'easeOutQuad',
        duration: 1500,
        loop: false
      });
      anime({
        targets: '.discover_content',
        opacity: 0,
        duration: 500,
        translateY: -800
      });
      btnAnimate.style.visibility = 'visible';
    };
  });
};
