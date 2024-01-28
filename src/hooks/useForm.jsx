import { useState } from "react";

export function useForm(steps){

    const [currentStep, setCurrentStep] = useState(0)

    function changeStep(i, e){
       if(e) e.preventDefault()

        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)
    }

    return{
        currentStep, 
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirtStep: currentStep === 0 ? true : false,
    }

}


//depois de criarmos o método para do nosso hook, que basicamento é uma função com os passos como parametro que armazenamos no noss useState que vai começar do 0 e retornar o passo dado, e o componente que foi preenchido + o passo, ai  vamos criar uma função para quando completar os passos passar para a próxima página que receberá como parametro o indice dos passo e o evento da ação (i(indice), e (evento)), nessa função teremos um if que irá balisar se a ação é negativa(ou seja, não foi feita,ou se ela é maior que a quantidade de steps da página), se isso acontecer o nosso setCurrentStep será (i), e com isso no no return evocamos a nossa funçaõ de mudar o passo e chamamos no App.jsx na div onde a ação será feita, depois que as funcionalidades dos botões estão ok, vamos para mais uma lógica, pra que quando chegar no último formulário ele para de funcionar o botão, para isso na nossa lógica criamos no nosso return um método que ilLastStep seria nosso curretStep + 1(pq começa do zero) se for identico ao steps. length será verdadeiro ou falso para que a condição for preenchida, partindo disso vamos mainpular o botão