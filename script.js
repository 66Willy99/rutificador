const rutForm = document.getElementById('rutForm');
const rut = document.getElementById('rut');


document.addEventListener('DOMContentLoaded', () => {
    const rutInput = document.getElementById('rut');
    
    // Format the rut as the user types it
    rutInput.addEventListener('input', () => {
        let value = rutInput.value.replace(/[^0-9]/g, ''); // Remove all non-numeric characters

        if (value.length === 8) {
            value = value.slice(0, 1) + '.' + value.slice(1, 4) + '.' + value.slice(4, 7) + '-' + value.slice(7); // Calcular el dígito verificador después de que el usuario agregue 6 dígitos
        }
        if (value.length === 9) {
            value = value.slice(0, 2) + '.' + value.slice(2, 5) + '.' + value.slice(5, 8) + '-' + value.slice(8); // Calcular el dígito verificador después de que el usuario agregue 6 dígitos
        }
        if (value.length > 4 && value.length <= 7) {
            value = value.slice(0, 1) + '.' + value.slice(1, 4) + '.' + value.slice(4);
        }
        if (value.length > 1 && value.length <= 4) {
            value = value.slice(0, 1) + '.' + value.slice(1); // Add hyphen before the last digit
        }
    });

    // Calculate the verifier digit when the user clicks outside the input
    document.addEventListener('click', () => {
        const rutNum = rutInput.value.replaceAll(/[.-]/g, '');
        console.log(rutNum);
        for (let i = 1; i <= rutNum.length; i++) {
            console.log(i+1);
        }
    });

});