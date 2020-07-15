//Chiedi all utente di scrivere una parola e crea una funzione per vedere se è palindroma

//Chiedo all'utente di scrivere una parola
var parolaUtente= prompt('Inserisci una parola');
var parolaAlContrario = '';
console.log(palindroma(parolaUtente));

//Creo un ciclo per modificare al contrario la parola inserita dall utente
//for(var i=parolaUtente.length-1; i>=0 ;i--){
  //parolaAlContrario += parolaUtente[i];
//}


//creo una funzione con relativi risultati
function palindroma(parola){
for(var i=parolaUtente.length-1; i>=0 ;i--){
    parolaAlContrario += parolaUtente[i];
    }
if (parolaAlContrario==parolaUtente){
  return ('La parola è palindroma');

}else{
  return ('La parola non è palindroma');
    }
}
