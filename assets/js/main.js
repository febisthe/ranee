//헤더 스크롤
$(window).trigger('scroll');
$(window).scroll(function(){
  curr = $(this).scrollTop();
  if(curr > 0){
    $('#header').addClass('active');
  }else{
    $('#header').removeClass('active');
  }
})


//인트로스와이퍼
const intro = new Swiper('.introSwiper',{
  loop:true,
  autoplay: {
    delay: 4000,
    duration: 1,
    disableOnInteraction: false,
  },
  effect: "fade",
}) 

//인트로스와이퍼배경
bgLine = gsap.timeline({})
bgLine
  .set('.sc-intro .bg', {top:'auto', bottom:0})
  .to('.sc-intro .bg', 0.7, {
    delay:2,
    height:'100%',
    stagger:{
      from:'random',
      amount: 0.2
    }
  })
  .to('.sc-intro .bg', 0.3, {
    delay:1,
    height:'0', 
    top:'0',
    bottom:'auto',
    stagger:{
      from:'random',
      amount: 0.2
    }
  })
bgLine.repeat(-1);

//인트로텍스트움직임
const introTxt = document.querySelectorAll('.sc-intro .row p');
introTxt.forEach(ele => {
  xPer = ele.dataset.x;
  gsap.to(ele, {
      scrollTrigger: {
        trigger: ".sc-intro",
        start: "0% 0%",
        end:"100% 0%",
        scrub: 1,
      },
      xPercent: xPer
    });
  });


//어바웃텍스트움직임
const aboutTxt = document.querySelectorAll('.sc-about .item');
aboutTxt.forEach(ele => {
  xPer = ele.dataset.x;
  gsap.to(ele, {
      scrollTrigger: {
        trigger: ".sc-about",
        start: "0% 0%",
        end:"100% 0%",
        scrub: 1,
      },
      xPercent: xPer
    });
  });

//프로젝트스와이퍼
const proj = new Swiper('.projSwiper',{
  direction: "vertical",
  simulateTouch:false,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
}) 

//프로젝트모션이미지
const motionArr = ['motion1', 'motion2', 'motion3', 'motion4'];

const imgMotion = gsap.timeline({
  repeat: -1,        
  repeatDelay: 1,    
  onRepeat: function () {
    motionArr.forEach((ele) => {
      gsap.set(`.${ele}`, {
        height: '100%',  
        bottom: 0,       
        top: 'auto', 
      });
    });
  }
});

motionArr.forEach((ele) => {
  gsap.set(`.${ele}`, {
    position: 'absolute',
    bottom: 0,
  });

  imgMotion
    .to(`.${ele}`, {
      delay: 1,
      height: '0%',
      onComplete: function () {
        gsap.set(`.${ele}`, {
          bottom: 'auto',
          top: 'auto'
        });
      }
    })
    .to(`.${ele}`, {
      height: '100%'
    });
});

motionArr.reverse().forEach((ele) => {
  imgMotion.to(`.${ele}`, {
    delay: 0.3,
    height: '0%',
    ease: "power1.inOut"
  });
});

//소셜스와이퍼
const social = new Swiper('.socialSwiper',{
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
}) 

//롤텍스트롤링
gsap.to('.sc-rolltxt .marquee .txt',25,{
  xPercent:-100,
  repeat:-1,
  ease:'none'
})

//롤텍스트y축배경채우기
const barBg = document.querySelectorAll('.bar .bg');
barBg.forEach(ele => {
  yPer = ele.dataset.y;
  gsap.from(ele,{
    scrollTrigger:{
      trigger: '.bar',
      star: '0% 80%',
      end: '100% 70%',
      scrub: 1,
    },
    yPercent: yPer,
  })
})


