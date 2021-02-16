document.addEventListener('DOMContentLoaded', () => {


	let cgangePagination = function () {
		const $pagination = document.querySelector('.slider-pagination');
		const $current = document.querySelector('.swiper-pagination-current');
		const $total = document.querySelector('.swiper-pagination-total');
		const $next = document.querySelector('.button-next');
		const $prev = document.querySelector('.button-prev');
		const $nextParent = document.querySelector('.slider-button-next');
		const $prevParet = document.querySelector('.slider-button-prev');
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
	}

	new Swiper('.slider', {
		navigation: {
			nextEl: '.slider-button-next',
			prevEl: '.slider-button-prev',

		},
		pagination: {
			el: '.slider-pagination',
			type: 'fraction'
		},
		preloadImages: false,
		lazy: {
			loadOntransitionStart: false,
			loadPrevNext: false,
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

	let burger = document.querySelector('.burger');
	let title = document.querySelector('.header__home-titel');
	let menu = document.querySelector('.menu');
	let social = document.querySelector('.header__social');
	let socialIcon = document.querySelector('.header__icon-social');
	console.log(menu.children[0].children[0]);
	burger.onclick = () => {
		burger.classList.toggle("active");
		title.classList.toggle("no-active");
		menu.classList.toggle("mob");
		social.classList.toggle("active");
		document.body.classList.toggle("lock");
		socialIcon.classList.toggle("active");
	};
	menu.children[0].childNodes.forEach((child) => {
		child.onclick = () => {
			burger.classList.toggle("active");
			title.classList.toggle("no-active");
			menu.classList.toggle("mob");
			social.classList.toggle("active");
			document.body.classList.toggle("lock");
			socialIcon.classList.toggle("active");
		}
	});

	// const anchors = document.querySelectorAll('a[href*="#"]');
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






	const showObjects = document.querySelectorAll('.show');

	if (showObjects.length > 0) {
		window.addEventListener('scroll', showOnScroll);
		function showOnScroll() {
			showObjects.forEach((element) => {
				const item = element;
				const itemHeight = item.offsetHeight;
				const itemOffset = offset(item).top;
				const start = 4;

				let itemPoint = window.innerHeight - itemHeight / start;
				if (itemHeight > window.innerHeight) {
					itemPoint = window.innerHeight - window.innerHeight / start;
				}

				if ((pageYOffset > itemOffset - itemPoint) && (pageYOffset < (itemOffset + itemHeight))) {
					item.classList.add('let-show');
				}
			});
		}
	}
	setTimeout(() => {
		showOnScroll();
	}, 700);

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + screenLeft };
	}




	const form = document.getElementById('form');
	const name = document.querySelector('.name');
	const email = document.querySelector('.email');
	form.addEventListener('submit', formSend)
	name.addEventListener('change', formSend)
	email.addEventListener('change', formSend)

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
	}
	function formValidate() {
		let error = 0;
		formReq = document.querySelectorAll("._req");
		for (let index = 0; index < formReq.length; index++) {
			let input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('name')) {
				if (input.value === '') {
					formAddError(input);
					error++;
				}

			} else if (input.classList.contains('email')) {
				if (input.value==='') {
					formAddError(input);
					input.parentElement.classList.remove('_errorEmail');
				}else if(emailTest(input)){
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