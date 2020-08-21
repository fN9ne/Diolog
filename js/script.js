function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top +scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}
$(document).ready(function(){
	$('#costRadio01').click(function(){
		$('._lessen-cost').html('1000')
		$('._lessen-count').html('1')
		$('._all-lessen-cost').html('1000')
		$('._lessens').html('занятие')
	})
	$('#costRadio02').click(function(){
		$('._lessen-cost').html('950')
		$('._lessen-count').html('8')
		$('._all-lessen-cost').html('7600')
		$('._lessens').html('занятий')
	})
	$('#costRadio03').click(function(){
		$('._lessen-cost').html('900')
		$('._lessen-count').html('16')
		$('._all-lessen-cost').html('14400')
		$('._lessens').html('занятий')
	})
	$('#costRadio04').click(function(){
		$('._lessen-cost').html('850')
		$('._lessen-count').html('24')
		$('._all-lessen-cost').html('20400')
		$('._lessens').html('занятия')
	})
	$('#costRadio05').click(function(){
		$('._lessen-cost').html('800')
		$('._lessen-count').html('32')
		$('._all-lessen-cost').html('25600')
		$('._lessens').html('занятия')
	})
	$('.popup__area').click(function(){
		$('body').removeClass('_lock')
	})
	$('.popup__close').click(function(){
		$('body').removeClass('_lock')
	})
	$.each($('._body-lock').click(function(){
		$('body').addClass('_lock')
	}))
})