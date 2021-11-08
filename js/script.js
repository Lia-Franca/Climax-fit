const animated = document.getElementById('customers_background');
const animatedText = document.getElementById('customers_text');
const animatedMobile = document.getElementById('customers_background_mobile');
const animatedTextMobile = document.getElementById('customers_text_mobile');
const next = document.getElementById('next-button');
const prev = document.getElementById('prev_button');
let lastId;
let lastAnswer;
let largura = window.screen.width;


let atualValue = 0;
changeTestimony(atualValue);

setInterval(function() {
  initializeCountdown();
}, 1000);

window.addEventListener("resize", function(){
  largura = window.screen.width;
});


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}





function Expandir(id, active) {
    this.flagExpanded = false;
    var element = document.getElementById(id)
    var elActive = document.getElementById(active)

    var answers = document.getElementsByClassName("answer");


    if(typeof lastId === 'object' && lastId !== elActive){
      lastId.classList.remove('active');
    }

    lastId = elActive;
    elActive.classList.toggle('active');

    if(typeof lastAnswer === 'object' && lastAnswer !== element){
      lastAnswer.classList.remove('answer-show');
    }
    lastAnswer = element;

   if(element.classList.contains("answer-show")) {
     element.classList.remove("answer-show")
     element.classList.add("answer-hide")
     return;
   } 

   if (element.classList.contains("answer-hide")) {
    element.classList.remove("answer-hide")
    element.classList.add("answer-show")
    elActive.classList.add("active")
    return;
    
  }

 

  element.classList.add("answer-show")
}

$(function() {
  $(".video").click(function () {
    var modal         = $('#videoModal');
    var videoSource   = $(this).attr("data-video");
    var iframe        = $('#videoModal iframe');

    $(iframe).attr('src', videoSource);

    $(iframe).on('load', function() {
      $(this).show();
    });
  });
});

$('#videoModal, #videoModal button.close').click(function () {
  var iframe = $('#videoModal iframe');

  $(iframe).hide();
  $(iframe).attr('src', '');
});




$('#main__button').click(function() {
  var element = document.querySelector("#content__2");
  window.scroll({top: element.offsetTop, behavior: 'smooth'});
});


function changeTestimony(value) {
  let elPicture = document.getElementById("customers_background");
  let elName = document.getElementById("name")
  let elOccupation = document.getElementById ("occupation")
  let elStatement = document.getElementById("statement") 

  const customersList = [ 
    { 
      name: 'Juliano Robertson',
      occupation: 'Be Academy',
      statement: '“Este treinamento me ajudou muito com a captação de novos clientes para minha academia. Eu não sabia que precisava me posicionar nas redes sociais e não tinha noção alguma de como fazer anúncios no Instagram e Facebook e o Thiago explicou tudo o que eu precisava saber sem rodeios. Recomendo demais para todos que queiram aumentar seus clientes de forma assertiva e profissional.”',
      pictureUrl: '../img/1.jpg',
   },
   {
     name: 'Luan Barbosa',
     occupation: 'Ative Academia',
     statement:  '“Aprendi a ver meu negócio como uma máquina de fazer dinheiro. O curso tem ensinamentos que vou levar pra vida toda! Agora sei como vender planos mais sustentáveis e que me fazem crescer todos os meses.  Gratidão Thiago!”',
     pictureUrl: '../img/2.jpg'
   },
   {
     name: 'Marcelo Felix',
     occupation: 'Live Fit Academia',
     statement: '“Só com uma simples mudança na recepção da minha academia eu consegui dobrar o número de alunos. Agora minhas consultoras sabem fazer um atendimento de qualidade e que me geram vendas todos os dias. Valeu Thiago por transmitir esse conhecimento.”',
     pictureUrl: '../img/3.jpg'
   } 
  ];

  if (value === 1 && atualValue < customersList.length -1) {
    atualValue = atualValue + value;
  } else if (value === -1 && atualValue > 0 && atualValue < customersList.length) {
    atualValue = atualValue + value;
  } else if (value === 1 && atualValue === 2) {
    atualValue = 0;
  } else if (value === -1 && atualValue === 0) {
    atualValue = customersList.length - 1;
  }

  animation();
  let arr = customersList[atualValue];
  
  elPicture.style.backgroundImage = "url(" + arr.pictureUrl + ")";
  elName.innerText = arr.name;
  elOccupation.innerText = arr.occupation;
  elStatement.innerText = arr.statement;
}


function animation() {
  animated.classList.add('animation')
  animatedText.classList.add('animation')
  let midSecond = 500;
  setTimeout(() => {
    animated.classList.remove('animation');
    animatedText.classList.remove('animation')
  }, midSecond);
  
}

// function animationMobile() {
//   animatedMobile.classList.add('animationMobile')
//   animatedTextMobile.classList.add('animationMobile')
//   let midSecond = 500;
//   setTimeout(() => {
//     animatedMobile.classList.remove('animationMobile');
//     animatedTextMobile.classList.remove('animationMobile')
//   }, midSecond);
  
// }

// function changeTestimonyMobile(value) {
//   let elPicture = document.getElementById("customers_background_mobile");
//   let elName = document.getElementById("name_mobile")
//   let elOccupation = document.getElementById ("occupation_mobile")
//   let elStatement = document.getElementById("statement_mobile")  

//   const customersList = [ 
//     { 
//       name: 'Juliano Robertson',
//       occupation: 'CEO Rock & Brews - Orlando',
//       statement: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.',
//       pictureUrl: '../img/substituir.png',
//    },
//    {
//      name: 'Rebeca Cavalcanti Souza',
//      occupation: 'Attendance clerk',
//      statement:  'Massa eget tristique tincidunt feugiat litora ac porttitor in, ac sit ante nec viverra quis accumsan tortor, viverra lobortis etiam rutrum ligula lorem sem. ante habitant enim ad eros purus metus suspendisse arcu, vivamus nec neque eleifend feugiat cursus. conubia lacus iaculis etiam nulla auctor tristique duis adipiscing curabitur integer porttitor curabitur, sagittis imperdiet ut ultrices vehicula suscipit euismod diam suspendisse venenatis feugiat.',
//      pictureUrl: '../img/cliente2.jpg'
//    },
//    {
//      name: 'André Carvalho Fernandes',
//      occupation: 'Mineralogist',
//      statement: 'Hac eu dolor faucibus eu inceptos pretium gravida torquent risus, sit integer nec condimentum massa risus quis curabitur curae, nisl blandit class duis orci diam id dictum. curabitur ultrices blandit volutpat commodo mi turpis neque posuere ad netus, curabitur at lobortis suscipit non molestie elementum a elementum, nulla ullamcorper vulputate aptent urna netus tempus vestibulum senectus. torquent praesent eu auctor et urna risus sodales, fames dolor cursus lacus mollis consequat nostra, aenean primis semper pretium congue dolor.',
//      pictureUrl: '../img/cliente3.jpg'
//    } 
//   ];

//   // atualValue += value === 1 && atualValue < customersList.length -1 ?  value : value === -1 && atualValue > 0 && atualValue < customersList.length ? value : 0;

//   if (value === 1 && atualValue < customersList.length -1) {
//     atualValue = atualValue + value;
//   } else if (value === -1 && atualValue > 0 && atualValue < customersList.length) {
//     atualValue = atualValue + value;
//   } else if (value === 1 && atualValue === 2) {
//     atualValue = 0;
//   } else if (value === -1 && atualValue === 0) {
//     atualValue = customersList.length - 1;
//   }
//   animationMobile();
//   let arr = customersList[atualValue];
  
//   elPicture.style.backgroundImage = "url(" + arr.pictureUrl + ")";
//   elName.innerText = arr.name;
//   elOccupation.innerText = arr.occupation;
//   elStatement.innerText = arr.statement;

// } 

function initializeCountdown() {
  let newDate = new Date();
  let month = newDate.getMonth()+1;
  let lastday = function(y,m){
    return  new Date(y, m, 0).getDate();
  }
  let now = moment().utc(true).toISOString();
  
  let finalDate = moment(`2021-${month}-${lastday(2021, month)}T18:00:00Z`);

  let diffSeconds = finalDate.diff(now, 'seconds');

  let days;
  let hours;
  let minutes;
  let seconds;


  let countdownDays = document.getElementById('counter_days');
  let countdownHours = document.getElementById('counter_hours');
  let countdownMinutes = document.getElementById('counter_minutes');
  let countdownSeconds = document.getElementById('counter_seconds');

 
  days = diffSeconds / (24 * 3600);
  diffSeconds = diffSeconds % (24 * 3600);

  hours = diffSeconds / 3600;
  diffSeconds = diffSeconds % 3600;

  minutes = diffSeconds / 60;
  diffSeconds = diffSeconds % 60;

  seconds = diffSeconds;
    

  days = Math.trunc(days);
  hours = Math.trunc(hours);
  minutes = Math.trunc(minutes);
  seconds = Math.trunc(seconds);

  


   
  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;




  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;
}


  document.addEventListener('mousemove' , parallax);
  function parallax(e){
    if(largura > 800) {
      this.querySelectorAll('.layer').forEach(layer =>  {
        const speed = layer.getAttribute('data-speed')
    
        const x = (window.innerWidth - e.pageX*speed)/200
        const y = (window.innerHeight - e.pageY*speed)/200
    
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    }
  }




let gradient1 = document.getElementById('gradient-1');
let gradient2 = document.getElementById('gradient-2');
let backgroundMain = document.getElementById('main__background')
let backgroundMobile = document.getElementById('main__background_mobile')
let cursos = document.getElementById('cursos')
let gradient3 = document.getElementById('gradient-3');
let success = document.getElementById('success')
let gradient6 = document.getElementById('gradient-6')
let footerThiago = document.getElementById('footer_thiago')
let footerThiagoMobile = document.getElementById('footer_thiago_mobile')
let pricesMountains = document.getElementById('prices_mountains')
let bonusMountains = document.getElementById('bonus_mountains')


  window.addEventListener('scroll', function(){
        let value = window.scrollY;

        gradient2.style.opacity = 1 - +window.pageYOffset/250+''

        if (largura > 1000) {
          gradient1.style.botom = value * 0.3 + "px";
          gradient1.style.opacity = 1 - +window.pageYOffset/250+''
          gradient3.style.bottom = (value - 4400) * 1 + "px";
          gradient3.style.opacity = 12 - +window.pageYOffset/250+''
          footerThiago.style.opacity = -24 - -window.pageYOffset/250+''
          cursos.style.top = (-value + 1500)* 0.6 + "px";
          success.style.left = (value - 3300) * 0.6 + "px";
          pricesMountains.style.left = (value - 1650) * 0.2 + "px";
          pricesMountains.style.opacity = 20 - +window.pageYOffset/250+''
          gradient6.style.bottom = (value - 6500) * 0.6 + "px";
          gradient6.style.opacity = 22 - +window.pageYOffset/250+''
          backgroundMain.style.top = value * 1 + "px";
          backgroundMain.style.opacity = 1 - +window.pageYOffset/500+''
        } else {
          gradient1.style.bottom = (value - 430) * 0.3 + "px";
          gradient1.style.opacity = 1.5 - +window.pageYOffset/250+''
          gradient3.style.bottom = (value - 5500) * 1 + "px";
          gradient3.style.opacity = 14 - +window.pageYOffset/250+''
          footerThiagoMobile.style.opacity = -27 - -window.pageYOffset/250+''
          backgroundMobile.style.top = value * 1 + "px";
          backgroundMobile.style.opacity = 2 - +window.pageYOffset/500+''
          
        }
  })













