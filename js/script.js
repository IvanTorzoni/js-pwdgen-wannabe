//TEST
// alert("ciao")

// Consegna: Chiedi all’utente tramite prompt il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


// input
// Richiesta di inserimento nome all'utente tramite Prompt
let userName = prompt("Inserisci il tuo nome"); //string
// Log message alla console
console.log(userName, typeof userName);

// Richiesta di inserimento cognome all'utente tramite Prompt
let userLastName = prompt("Inserisci il tuo cognome"); //string
// Log message alla console
console.log(userLastName, typeof userLastName);

// Richiesta di inserimento colore preferito all'utente tramite Prompt
let userColor = prompt("Inserisci il tuo colore preferito"); //string
// Log message alla console
console.log(userColor, typeof userColor);

// Inserimento di un numero fisso
let fixNum = 21; //number
// Log message alla console
console.log(fixNum, typeof fixNum);

// converto il numero in striga
fixNum = fixNum.toString(); //string
// Log message alla console
console.log(fixNum, typeof fixNum);


// operation
// Operazione di concatenazione delle stringhe
let passGen = userName + userLastName + userColor + fixNum; //string
// Log message alla console
console.log(passGen, typeof passGen);

// output
// Gestione del mesaaggio da generare
let passMsg = `La tua password è ${passGen} `;
// Log message alla console
console.log(passMsg);

// Scrittura del messaggio nel documento HTML
document.getElementById("result").innerHTML = passMsg;