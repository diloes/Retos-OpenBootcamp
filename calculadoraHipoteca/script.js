const form = document.getElementById( 'form')

form.onsubmit = ( e ) => {
    e.preventDefault()
    
    const precio  = parseFloat( document.querySelector( '#precio' ).value ) 
    const cuotas  = parseInt( document.querySelector( '#cuotas' ).value ) 
    const interes = parseFloat( document.querySelector( '#interes').value ) 

    const calcular = function ( precio, cuotas, interes ) {

        const calculo = ( precio + ( ( interes / 100 ) * precio ) ) / cuotas

        const total = document.querySelector( '#total' )
        total.innerHTML = Math.round( calculo ) + ' €'
        
    }

    calcular( precio, cuotas, interes )


}   

