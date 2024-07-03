function conversor(){
    let num=document.getElementById('num')
    let numero=Number(num.value)
    let sel1=document.querySelector('#seltab')
    let sel2=document.querySelector('#seltab2')
    let uni1=sel1.selectedIndex
    let uni2=sel2.selectedIndex
    if (uni1==uni2){
        alert("ERRO[]A conversão não precisa ser realizada.")
    }
    //Kilometros
    else if(uni1==0 && uni2==1){
        let resul1=numero*1000
        res.innerHTML=`A conversão resultou em: ${resul1} metros.`
    }else if(uni1==0 && uni2==2){
        let resul2=numero*100000
        res.innerHTML=`A conversão resultou em: ${resul2} centímetros.`
    }else if(uni1==0 && uni2==3){
        let resul3=numero*1000000
        res.innerHTML=`A conversão resultou em: ${resul3} milímetros.`
    }
    //Metros
    else if(uni1==1 && uni2==0){
        let resul4=numero/1000
        res.innerHTML=`A conversão resultou em ${resul4} kilômetros.`
    }
    else if(uni1==1 && uni2==2){
        let resul5=numero*100
        res.innerHTML=`A conversão resultou em ${resul5} centimetros.`
    }
    else if(uni1==1 && uni2==3){
        let resul6=numero/1000
        res.innerHTML=`A conversão resultou em ${resul6} milímetros.`
    }
    //Centimetros
    else if(uni1==2 && uni2==0){
        let resul7=numero/100000
        res.innerHTML=`A conversão resultou em ${resul7} Kilômetros.`

    }
    else if(uni1==2 && uni2==1){
        let resul8=numero/100
        res.innerHTML=`A conversão resultou em ${resul8} metros.`

    }
    else if(uni1==2 && uni2==3){
        let resul9=numero*10
        res.innerHTML=`A conversão resultou em ${resul9} milímetros`

    }
    //milimetros
    else if(uni1==3 && uni2==0){
        let resul10=numero/1000000
        res.innerHTML=`A conversão resultou em ${resul10} Kilômetros`

    }
    else if(uni1==3 && uni2==1){
        let resul11=numero/1000
        res.innerHTML=`A conversão resultou em ${resul11} metros`

    }
    else if(uni1==3 && uni2==2){
        let resul12=numero/10
        res.innerHTML=`A conversão resultou em ${resul12} centimetros`

    }

}