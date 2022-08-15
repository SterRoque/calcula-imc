function main() {

    const form = document.querySelector('#form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputPeso = event.target.querySelector("#peso");
        const inputAltura = event.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            setResultado('Peso Inválido', false)
            return;
        }
        if (!altura) {
            setResultado('Altura Inválida', false);
            return;
        }

        const imc = getIMC(peso, altura);
        const nivelImc = getNivelIMC(imc);

        const msg = ` Seu IMC é ${imc} (${nivelImc})`
        setResultado(msg, true)
        
    });
    function getNivelIMC(imc){   
       if(imc < 18.5) {
           return 'Abaixo do peso';
       } else if(imc <= 24.9) {
           return 'Peso normal';
       } else if(imc <= 29.9) {
           return 'Sobrepeso';
       } else if(imc <= 34.9) {
           return 'Obesidade grau 1';
       } else if(imc <= 39.9) {
           return 'Obesidade grau 2';
       } else if(imc >= 40) {
           return 'Obesidade grau 3';
       }
    }
    function getIMC(peso, altura) {
        if(Number.isInteger(altura)) {
            altura = altura / 100;
        }
        const imc = peso / altura**2;
        return imc.toFixed(2);
    }


    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = '';
        const p = criaP();

        if(isValid) {
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }


}


main()