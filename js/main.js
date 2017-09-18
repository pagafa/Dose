window.onload = function() {

	document.addEventListener('tizenhwkey', function(e) {
		if (e.keyName === "back") {
			if (factor === 0) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				factor = 0;
				document.getElementById('main').style.display = '';
				document.getElementById('calc').style.display = 'none';
			}
		}
	});

	document.addEventListener("rotarydetent", function(event) {
		var v = document.getElementById('peso').getAttribute('value');
		if (event.detail.direction === "CW") {
			v++;
			if (v > 100) {
				v = 100;
			}
		} else {
			v--;
			if (v < 0) {
				v = 0;
			}
		}
		document.getElementById('peso').setAttribute('value', v);
		document.getElementById('dosis').innerHTML = Math
				.round(v * factor * 10) / 10;
	}, false);

	document.getElementById('calc').style.display = 'none';
	document.getElementById('t_ib1').innerHTML=TIZEN_L10N.IBUPROFENO;
	document.getElementById('t_ib2').innerHTML=TIZEN_L10N.IBUPROFENO;
	document.getElementById('t_hours').innerHTML=TIZEN_L10N.HOURS;

	var factor = 0;

	document
			.getElementById('ib2')
			.addEventListener(
					'click',
					function() {
						factor = 0.3333;
						document.getElementById('main').style.display = 'none';
						document.getElementById('calc').style.display = '';
						document.getElementById('name').innerHTML = TIZEN_L10N.IBUPROFENO
								+ ' 2%';
						document.getElementById('dosis').innerHTML = '0';
						document.getElementById('peso').setAttribute('value',
								'0');
					});

	document
			.getElementById('ib4')
			.addEventListener(
					'click',
					function() {
						factor = 0.1666;
						document.getElementById('main').style.display = 'none';
						document.getElementById('calc').style.display = '';
						document.getElementById('name').innerHTML = TIZEN_L10N.IBUPROFENO
								+ ' 4%';
						document.getElementById('dosis').innerHTML = '0';
						document.getElementById('peso').setAttribute('value',
								'0');
					});

	document.getElementById('par').addEventListener('click', function() {
		factor = 0.15;
		document.getElementById('main').style.display = 'none';
		document.getElementById('calc').style.display = '';
		document.getElementById('name').innerHTML = 'Paracetamol 100mg/ml';
		document.getElementById('dosis').innerHTML = '0';
		document.getElementById('peso').setAttribute('value', '0');
	});
};