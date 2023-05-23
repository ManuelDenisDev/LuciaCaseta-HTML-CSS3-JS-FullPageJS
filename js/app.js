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
             loopBottom: true, // Regresa a la primera sección siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
        // ──────────────────────────────────────────────────
	    //   :::::: Barra de navegación
	    // ──────────────────────────────────────────────────
	    	 navigation: true, // Muestra la barra de navegación.
	    	 menu: '#menu', // Menu de navegación.
	    	 anchors: ['inicio', 'socio', 'comidas','contacto'], // Anclas, las usamos para identificar cada sección y poder acceder a ellas con el menu.
	    	 navigationTooltips: ['Inicio', 'Hazte Socio', 'Nuestros Menus', 'Redes Sociales'], // Tooltips que mostrara por cada boton.
	    	 showActiveTooltip: false, // Mostrar tooltip activa.
        
});