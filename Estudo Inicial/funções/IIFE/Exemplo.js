// IIFE = Immediately Invoked Function Expression

// Obs: é o tipo de função utilizada para não cair no escopo global do Javascript

(function(){
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente');
})()