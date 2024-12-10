let km=prompt("Inserisci il numero dei chilometri che si devono fare");
let age=prompt("Inserisci la tua età");



if(isNaN(km)){
    console.log("Inserisci un numero per favore per i chilometri che si devono fare!")
}
else if (isNaN(age)){
    console.log("Inserisci un numero per favore per la tua età")
} else {
  let kmNo=Number(km)
  let ageNo=Number(age)

  //controllo se il valore inserito per i chilometri è negativo oppure 0
  //notifico l'utente che i chilometri devono essere >0
  if (kmNo<=0)
  {
    console.log("Inserisci un numero più grande di 0 per i chilometri che devi fare!")
  }
  else 
  {
   //controllo se il valore inserito per l'età è negativo
   //notifico l'utente che l'età deve essere >=0
    if (ageNo<0){
        console.log("Inserisci un numero >=0 per la tua età")
    }
    else 
    {
        let total

        const priceKm=0.21
        const discountMin=0.20
        const discountMax=0.40
        
        if (ageNo<18)
            { 
            // se l'età inserita è meno di 18 allora si usa il discount di 20%
            total=kmNo*priceKm-(discountMin*(kmNo*priceKm))
            //total=0.8*kmNo*priceKm
            
            }
        else if (ageNo>=18 && ageNo<=65)
            {
            total=kmNo*priceKm  
            } 
        else
            { 
            //se l'età inserita è più grande di 65 allora si usa il discount di 40%
            total=kmNo*priceKm-(discountMax*(kmNo*priceKm))
            //total=0.6*kmNo*priceKm
            }
        console.log(`Il totale che si deve pagare è €${total.toFixed(2).replace(".",",")}`)
    }
   }
}
