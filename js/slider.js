window.onload = function () {

  /* Создаем объекты класса Slider */
  var slider = new Slider({
    'images': '.gallery-1 .photos img',
    'prev': '.gallery-1 .buttons .prev',
    'next': '.gallery-1 .buttons .next',
    'auto': false,
  });
  var slider2 = new Slider({
    'images': '.gallery-2 .photos img',
    'prev': '.gallery-2 .buttons .prev',
    'next': '.gallery-2 .buttons .next',
    'auto': true,
  });





  function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.prev = document.querySelector(obj.prev);
    this.next = document.querySelector(obj.next);
    this.auto = obj.auto;
    var i = 0;
    var slider = this;

   // console.log(this.auto);

    this.btn_next = function () {
      this.images[i].className = '';
      i++;
      if(i >= this.images.length){
        i = 0;
      }
      this.images[i].className = 'showed';
    };

    this.btn_prev = function () {
      this.images[i].className = '';
      i--;
      if(i < 0){
        i = this.images.length - 1;
      }
      this.images[i].className = 'showed';
    };

    /* Автослайдинг */
    if(!this.auto) {
      setInterval(function () {
        slider.btn_next();
      }, 6000);
    }
    /*Плавное появление/скрытие стрелок*/
    slider.images.forEach(function (item) {
      item.addEventListener('mouseover', function () {
        slider.next.classList.add('show');
        slider.prev.classList.add('show');
      });
      slider.next.addEventListener('mouseover', function () {
        slider.next.classList.add('show');
      });
      slider.prev.addEventListener('mouseover', function () {
        slider.prev.classList.add('show');
      });
      item.addEventListener('mouseleave', function () {
        slider.next.classList.remove('show');
        slider.prev.classList.remove('show');
      });
    });

      /* Переключение слайдов по кнопкам */
    slider.prev.onclick = function(){
        slider.btn_prev();
      };
    slider.next.onclick = function(){
        slider.btn_next();
      };
  }
};




