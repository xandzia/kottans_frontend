export function parallax() {

	const parallaxBox = document.getElementById ( 'box' );
	const c1left = document.getElementById ( 'stars' ).offsetLeft,
	c1top = document.getElementById ( 'stars' ).offsetTop,
	c2left = document.getElementById ( 'moon' ).offsetLeft,
	c2top = document.getElementById ( 'moon' ).offsetTop,
	c3left = document.getElementById ( 'clouds' ).offsetLeft,
	c3top = document.getElementById ( 'clouds' ).offsetTop,
	c4left = document.getElementById ( 'mountains' ).offsetLeft,
	c4top = document.getElementById ( 'mountains' ).offsetTop;
	
	parallaxBox.onmousemove = function ( event ) {
		event = event || window.event;
		let x = event.clientX - parallaxBox.offsetLeft,
		y = event.clientY - parallaxBox.offsetTop;
		
		mouseParallax ( 'stars', c1left, c1top, x, y, 5 );
		mouseParallax ( 'moon', c2left, c2top, x, y, 15 );
		mouseParallax ( 'clouds', c3left, c3top, x, y, 30 );
		mouseParallax ( 'mountains', c4left, c4top, x, y, 65 );
	}
	
}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
	let obj = document.getElementById ( id );
	let parentObj = obj.parentNode,
	containerWidth = parseInt( parentObj.offsetWidth ),
	containerHeight = parseInt( parentObj.offsetHeight );
	obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
	obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}
