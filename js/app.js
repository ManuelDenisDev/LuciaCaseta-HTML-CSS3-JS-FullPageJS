const seccionesPagina = new fullpage('#fullpage', {
        // ──────────────────────────────────────────────────
        //   :::::: Opciones Básicas
        // ──────────────────────────────────────────────────
             autoScrolling: true, // Se activa el scroll.
             fitToSection: false, // Acomoda el scroll automáticamente para que la sección se muestre en pantalla.
             fitToSectionDelay: 300, // Delay antes de acomodar la sección automáticamente.
             easing: 'easeInOutCubic', // Función de tiempo de la animación.
             scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
             css3: true, // Si usara CSS3 o javascript.
             easingcss3: 'ease-out', // Curva de velocidad del efecto.
             loopBottom: true, // Regresa a la primera sección siempre y cuando se ya haya llegado a la ultima sección y el usuario siga scrolleando.
        // ──────────────────────────────────────────────────
	    //   :::::: Barra de navegación
	    // ──────────────────────────────────────────────────
	    	 navigation: true, // Muestra la barra de navegación.
	    	 menu: '#menu', // Menu de navegación.
	    	 anchors: ['inicio', 'socio', 'comidas','contacto'], // Anclas, las usamos para identificar cada sección y poder acceder a ellas con el menu.
	    	 navigationTooltips: ['Inicio', 'Hazte Socio', 'Nuestros Menus', 'Redes Sociales'], // Tooltips que mostrara por cada botón.
	    	 showActiveTooltip: false, // Mostrar tooltip activa.
        
});



const 
     $days = document.getElementById('days'),
     $hours = document.getElementById('hours'),
     $minutes = document.getElementById('minutes'),
     $seconds = document.getElementById('seconds'),
     $finalMessage = document.querySelector('.final-sms');

//Fecha a futuro

const countdownDate = new Date('Jun 16, 2023 21:00:00').getTime();

let interval = setInterval(function(){
     //Obtener fecha actual y milisegundos
     const now = new Date().getTime();

     //Obtener las distancias entre ambas fechas
     let distance = countdownDate - now;

     //Calculo a días-horas-minutos-segundos
     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
     let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
     let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
     let seconds = Math.floor(distance % (1000 * 60) / (1000));

     //Escribimos los resultados
     $days.innerHTML = days;
     $hours.innerHTML = hours;
     $minutes.innerHTML = minutes;
     $seconds.innerHTML = ('0' + seconds).slice(-2);

     //Cuando llegue a 0
     if(distance < 0){
          clearInterval(interval);
          $finalMessage.style.transform = 'translateY(0)';
     }
}, 1000);

