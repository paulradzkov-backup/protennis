jQuery(document).ready(function(){

	$('body').removeClass('noscript'); //if js enabled → remove «handbrake»
	
	/* табло на главной */
	
	$('.tablo .tbl-shed').slideUp(0); // сначала спрячем при загрузке 
	var objtablo = $('.tablo ');
	$(objtablo).hover(function () {
		$(this).find('.tbl-shed').slideToggle(200).queue("fx1");
	});
	$(objtablo).blur(function () {
		$(this).find('.tbl-shed').slideToogle(200).queue("fx2");
	});

	/*$('.tablo .tbl-shed').css({height:'0px',visibility:'hidden'}); 
	var objtablo = $('.tablo ');
	$(objtablo).hover(function () {
		$(this).find('.tbl-shed').css({visibility:'visible'}).animate({height: '297px'},2000);
	});
	$(objtablo).blur(function () {
		$(this).find('.tbl-shed').animate({height: '0px'},2000).css({visibility:'hidden'});
	});*/
	 
	$('.tablo .tbl-shed').each(function() {
		var presscounter = 0; //создадим счетчик
		$(this).find('a.tbl-down').click(function() {
			$(this).offsetParent().find(".scrollarea").scrollTo( '+=116px', 400 ); // 116px это высота двух элементов
			presscounter += 1; //при каждом клике увеличиваем счетчик на единицу
			if(presscounter >= 3) {
				$(this).addClass('disabled'); //дизэйблим после трех кликов
				presscounter = 3; //не даем расти больше трех
			}
			$(this).offsetParent().find('a.tbl-up.disabled').removeClass('disabled');
		});
		$(this).find('a.tbl-up').click(function() {
			$(this).offsetParent().find(".scrollarea").scrollTo( '-=116px', 400 );
			presscounter -= 1; //при каждом клике увеличиваем счетчик на единицу
			if(presscounter <= 0) {
				$(this).addClass('disabled'); //дизэйблим после трех кликов
				presscounter = 0;
			}
			$(this).offsetParent().find('a.tbl-down.disabled').removeClass('disabled');
		});
	});
	
	
	
	/* конец. табло на главной */
	
	/* замена select */
	var params = {
		changedEl: ".cu-select",
		visRows: 10,
		scrollArrows: true
	}
	cuSel(params);
	
		/* дополнительный текст в селектах временно */
		$('#cusel-scroll-where span').each(function() {
				$(this).append("<small>"+$(this).attr('title')+"</small>").removeAttr('title');
		});
		/* конец. дополнительный текст в селектах */
	/* конец замены select */
	
	
	/* окно авторизации */
	$('#showloginform').remove(); /* убираем ссылку назад */
	$('.let_me_in a').removeAttr("href"); /* убираем якорь со ссылки перехода, чтобы убрать «баг» при перезагрузке страницы */
	var objloginform = $('.loginform'); 
	var objletmein = $('.let_me_in'); 
	var objlogintab = $('.logintab'); 
	objloginform.hide(); /* прячем логинформу */
	
	$(objletmein).click(function () {
		if($(objloginform).css("display")=="none"){
			objlogintab.addClass("active");
			objloginform.slideToggle("fast");
		} else {
			objlogintab.removeClass("active");
			objloginform.slideToggle("fast");
		}
	}); 
	/* конец. окно авторизации */
	
	/* labels над input */
	/* форма авторизации:  */
	var loginforminputs = $(".l-credentials input.inputbox");
	$(loginforminputs).each(function() {
		if($(this).val() !== '') { /* если инпуты не пустые */
			$(this).prev("label").css('visibility','hidden'); /* прячем лэйблы */
		}	
		$(this).focus(function() {
			$(this).prev("label").css('visibility','hidden');
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).prev("label").css('visibility','visible');				
			}
		});
	});

	/* то же самое только для input c title */
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).addClass('inputhint').val($(this).attr('title'));			
		}
		
		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').removeClass('inputhint');	
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).addClass('inputhint');	
			}
		});
	});
	
	/* конец labels над input */
	

	/* подсказки в popup */
	$('.popup').removeClass("hide").fadeOut(0).click(function () {
		$(this).fadeOut();
	});
	$('.rate-param .pseudolink').each(function() {
		$(this).click(function () {
			$('.popup').fadeOut();
			$(this).parent('.rate-param').next('.popup').fadeIn();
			setTimeout(function(){ $('.popup').fadeOut() }, 5000);
		});
	});
	
	/* конец подсказки в popup */
});