"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cgangePagination = function cgangePagination() {
    var $pagination = document.querySelector('.slider-pagination');
    var $current = document.querySelector('.swiper-pagination-current');
    var $total = document.querySelector('.swiper-pagination-total');
    var $next = document.querySelector('.button-next');
    var $prev = document.querySelector('.button-prev');
    var $nextParent = document.querySelector('.slider-button-next');
    var $prevParet = document.querySelector('.slider-button-prev');

    if ($current) {
      if ($current.textContent == 1) {
        $current.classList.add('block');
        $pagination.classList.add('block');
        $prev.classList.add('disable');
        $next.classList.remove('disable');
        $prevParet.classList.add('disable');
      } else if ($current.textContent === $total.textContent) {
        $current.classList.remove('block');
        $prev.classList.remove('disable');
        $prevParet.classList.remove('disable');
        $total.classList.add('block');
        $pagination.classList.add('block');
        $next.classList.add('disable');
        $nextParent.classList.add('disable');
      } else {
        $next.classList.remove('disable');
        $nextParent.classList.remove('disable');
        $prev.classList.remove('disable');
        $prevParet.classList.remove('disable');
        $current.classList.remove('block');
        $pagination.classList.remove('block');
        $total.classList.remove('block');
      }
    }
  };

  new Swiper('.slider', {
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    },
    pagination: {
      el: '.slider-pagination',
      type: 'fraction'
    },
    preloadImages: false,
    lazy: {
      loadOntransitionStart: false,
      loadPrevNext: false
    },
    watchSliderProgress: true,
    watchSliderVisibility: true,
    spaceBetween: 150,
    on: {
      slideChange: cgangePagination
    },
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoHeight: true
  });
  cgangePagination();
  var burger = document.querySelector('.burger');
  var title = document.querySelector('.header__home-titel');
  var menu = document.querySelector('.menu');
  var social = document.querySelector('.header__social');
  var socialIcon = document.querySelector('.header__icon-social');
  console.log(menu.children[0].children[0]);

  burger.onclick = function () {
    burger.classList.toggle("active");
    title.classList.toggle("no-active");
    menu.classList.toggle("mob");
    social.classList.toggle("active");
    document.body.classList.toggle("lock");
    socialIcon.classList.toggle("active");
  };

  menu.children[0].childNodes.forEach(function (child) {
    child.onclick = function () {
      burger.classList.toggle("active");
      title.classList.toggle("no-active");
      menu.classList.toggle("mob");
      social.classList.toggle("active");
      document.body.classList.toggle("lock");
      socialIcon.classList.toggle("active");
    };
  }); // const anchors = document.querySelectorAll('a[href*="#"]');
  // anchors.forEach((anchor) => {
  // 	anchor.addEventListener("click", (event) => {
  // 		event.preventDefault();
  // 		const blockId = anchor.getAttribute('href');
  // 		document.querySelector('' + blockId).scrollIntoView({
  // 			behavior: "smooth",
  // 			block: 'start'
  // 		})
  // 	}
  // 	);
  // });

  var showObjects = document.querySelectorAll('.show');

  if (showObjects.length > 0) {
    var _showOnScroll = function _showOnScroll() {
      showObjects.forEach(function (element) {
        var item = element;
        var itemHeight = item.offsetHeight;
        var itemOffset = offset(item).top;
        var start = 4;
        var itemPoint = window.innerHeight - itemHeight / start;

        if (itemHeight > window.innerHeight) {
          itemPoint = window.innerHeight - window.innerHeight / start;
        }

        if (pageYOffset > itemOffset - itemPoint && pageYOffset < itemOffset + itemHeight) {
          item.classList.add('let-show');
        }
      });
    };

    window.addEventListener('scroll', _showOnScroll);
  }

  setTimeout(function () {
    showOnScroll();
  }, 700);

  function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + screenLeft
    };
  }

  var form = document.getElementById('form');
  var name = document.querySelector('.name');
  var email = document.querySelector('.email');
  form.addEventListener('submit', formSend);
  name.addEventListener('change', formSend);
  email.addEventListener('change', formSend);

  function formSend(e) {
    var error;
    return regeneratorRuntime.async(function formSend$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            error = formValidate(form);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  function formValidate() {
    var error = 0;
    formReq = document.querySelectorAll("._req");

    for (var index = 0; index < formReq.length; index++) {
      var input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('name')) {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('email')) {
        if (input.value === '') {
          formAddError(input);
          input.parentElement.classList.remove('_errorEmail');
        } else if (emailTest(input)) {
          input.parentElement.classList.add('_errorEmail');
          error++;
        }
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
//# sourceMappingURL=main.dev.js.map
