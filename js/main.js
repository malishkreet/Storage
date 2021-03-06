/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
      modal.classList.toggle('modal--visible')
  }
  modalBtn.forEach(element => {
      element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal)
  
}); */


$(document). ready(function() {
   var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
  });
  closeBtn.on ('click', function() {
      modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');


  next.css('left', prev.width() + 25 + bullets.width() + 10)
  bullets.css('left', prev.width() + 20)

  new WOW().init();


  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      // правило-объекта
      userEmail: {
        required: true,
        email: true,
      }
    }, // сообщения
  messages: {
    userName:{
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не больше пятнадцати букв",
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите в формате: name@domain.com",
    }
}

});

  // Маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___)___-__-__"});


  // форма control

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
    }, // сообщения
  messages: {
    userName:{
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не больше пятнадцати букв",
    },
    userPhone: "Телефон обязателен",
}

});




    // Форма footer 
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      // правило-объекта
      userQuestion: {
        required: true,
        minlength: 5,
      }
    }, // сообщения
  messages: {
    userName:{
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не больше пятнадцати букв",
    },
    userPhone: "Телефон обязателен",
    userQuestion: {
      required: "Обязательно укажите вопрос",
      minlength: "Вопрос не короче пяти букв",
    }
}

});


});



(function(jq) {
  jq.autoScroll = function(ops) {
    ops = ops || {};
    ops.styleClass = ops.styleClass || 'button-up';
    var t = jq('<div class="'+ops.styleClass+'"></div>'),
   d = jq(ops.target || document);
   jq(ops.container || 'body').append(t);
 
  t.css({
    opacity: 0,
    position: 'absolute',
    top: 0,
    right: 0
 }).on('click', function() {
     jq('html,body').animate({
        scrollTop: 0
   }, ops.scrollDuration || 1000);
 });
 
  d.scroll(function() {
    var sv = d.scrollTop();
    if (sv < 300) {
      t.clearQueue().fadeOut(ops.hideDuration || 200);
     return;
  }
 
  t.css('display', '').clearQueue().animate({
   top: sv,
   opacity: 0.8
   }, ops.showDuration || 500);
  });
  };
})(jQuery);
 
$(document).ready(function(){
 $.autoScroll({
 scrollDuration: 600, 
 showDuration: 600, 
 hideDuration: 300
 });
});