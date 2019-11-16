function saludo(){
    return 'Hola';
}

let calculo = {

    duplicar:function(valor1){
        return valor1*2;
    },

    dividir:function(valor1){
        return valor1 / 2;
    }
}

console.log(saludo());
console.log(calculo.duplicar(2));
console.log(calculo.dividir(2));

