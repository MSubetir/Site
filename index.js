princi = document.querySelector('.a')
proto = document.querySelector('.b')

ensino = document.querySelector('.ensino')
meio = document.querySelector('.descricao')
xp = document.querySelector('.experiencia')

/*
skills = document.querySelector('.competencias div')
scroll_size = skills.scrollHeight
console.log(scroll_size)
skills.scrollLeft = scroll_size/3;
*/
function sair(){
    princi.classList.remove('zero');
    proto.classList.add('zero');

    proto.classList.remove('mais100');
    princi.classList.add('menos100');
   
}
function entrar(){
    proto.classList.remove('zero');
    princi.classList.add('zero');

    princi.classList.remove('menos100');
    proto.classList.add('mais100');
}

function leftMeio(){
    meio.classList.remove('zero');
    ensino.classList.add('zero');

    ensino.classList.remove('menos100');
    meio.classList.add('mais100');
}

function rightMeio(){
    meio.classList.remove('zero');
    xp.classList.add('zero');

    xp.classList.remove('mais100');
    meio.classList.add('menos100');
}

function meioRight(){
    ensino.classList.remove('zero');
    meio.classList.add('zero');

    meio.classList.remove('mais100');
    ensino.classList.add('menos100');
}

function meioLeft(){
    xp.classList.remove('zero');
    meio.classList.add('zero');

    meio.classList.remove('menos100');
    xp.classList.add('mais100');
}



$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});