   let calcular = document.getElementById('calcular')

 function imc(){
     let nome = document.getElementById('nome').value;
     let altura = document.getElementById('altura').value;
     let peso = document.getElementById('peso').value;
     let resultado = document.getElementById('resultado');
   
     if ( nome !== '' && altura !== '' && peso!== '' ){

         let imcValor = (peso/(altura*altura)).toFixed(2);

         let classificacao = '';
         

         if(imcValor <18.5){
          classificacao ='Abaixo do peso , Precisa Comer Mais'
         }
         else if(imcValor>18.5 && imcValor <= 24.9){
             classificacao = '  Peso Normal'
         }
         else if(imcValor > 24.9 && imcValor <= 29.9){
             classificacao = ' Acima do peso'
         }
         else if(imcValor >29.9 && imcValor <= 34.9){
             classificacao = 'Obesidade Grau 1 , vamos se cuidar'
         }
         else if(imcValor > 34.9 && imcValor <=40.0){
             classificacao = 'Obesidade Grau 2 , Vamos Correr atraz desse prejuizo'
         }
         else {
             classificacao = 'Obesidade Grau 3 , !ATENÇÂO! Cuide da sua Saúde urgente ou então você vai morrer'
         }
         
         resultado.textContent = `${nome} seu Imc é ${imcValor}, E sua Realidade é ${classificacao} `
     }else{
     
         resultado.textContent = 'Favor Preencher os Campos Vazios !!!';
     }
    

 }
     
   calcular = document.addEventListener('click', imc)
