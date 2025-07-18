//Načítání prvků

const kategorieSelect = document.getElementById('category');
const jidloSelect = document.getElementById('food-item');
const gramyJidla = document.getElementById('grams');
const celkemPheJidlo = document.getElementById('count');


///////////////////////////////////

///Inicializace

window.addEventListener("load", function(){
    kategorieSelect.innerHTML += "<option>asdf</option>";
});

///////////////////////////////////



function drawPieChart(maximum, aktualni_hodnota) {
    const canvas = document.querySelector("#pieChart")
    
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const angle = (aktualni_hodnota / maximum) * 2 * Math.PI;
    
    // Draw background circle
    ctx.fillStyle = "#ddd";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Draw actual value slice
    ctx.fillStyle = "#66bb6a";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, angle - 0.5 * Math.PI);
    ctx.lineTo(centerX, centerY);
    ctx.fill();
    
    // Draw center circle for donut effect
    let pomer = maximum - (maximum / 10);
    
    if(aktualni_hodnota < pomer){
        ctx.fillStyle = "#ffffff";
    }
    else
    {
        ctx.fillStyle = "#a8323e";
    }
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.3, 0, 2 * Math.PI);
    ctx.fill();

    document.querySelector("#aktualniphe").innerText = aktualni_hodnota + " / " + maximum + " pHe";
}

kategorieSelect.addEventListener("change", function(){ //vymaze všechny optiony v selectu výběru kategorie a načte související s vybranou kategorií pomocí funkce nactiJidlaKategorie(kategorie)
   
    jidloSelect.innerHTML = "";

    nactiJidlaKategorie(kategorieSelect.value);

});

jidloSelect.addEventListener("change", function(){
    const label = document.getElementById("label-grams");
    const InfoJednotkaPhe = document.getElementById("infoJednotkaPhe");
    const jednotka = nactiInformace(jidloSelect.value).jednotka;
    InfoJednotkaPhe.innerHTML = "V " + nactiInformace(jidloSelect.value).mnozstvi + " " + nactiInformace(jidloSelect.value).jednotka + " je " + nactiInformace(jidloSelect.value).phe + " Phe"; 
    label.innerHTML = "Množství (" + jednotka + ")";
});


gramyJidla.addEventListener("change", function(){

    const numberGramyJidla = Number(gramyJidla.value); //Gramy zadané uživatelem
    const infoJidlo = nactiInformace(jidloSelect.value); //Informace o konkrétní surovině
    const gramySuroviny = Number(infoJidlo.mnozstvi);
    const phe = Number(infoJidlo.phe);


    celkemPheJidlo.value = (numberGramyJidla / gramySuroviny) * phe;
});

function nactiInformace(jidlo){
    
    if(kategorieSelect.value == "zelenina"){
        return zelenina.find(item => item.name === jidlo);
     } else if(kategorieSelect.value == "ovoce"){
        return ovoce.find(item => item.name === jidlo);
     } else if(kategorieSelect.value == "pecivo"){
        return pecivo.find(item => item.name === jidlo);
     } 


}

function nactiJidlaKategorie(kategorie){
    const category = kategorie;

    if(kategorieSelect.value == "zelenina"){
        jidloSelect.innerHTML += `<option value="">Vyberte jídlo...</option>`;
        for(const zel of zelenina){
            jidloSelect.innerHTML += `<option value="${zel.name}">${zel.niceName}</option>`;
    } 
     } else if(kategorieSelect.value == "ovoce"){
        jidloSelect.innerHTML += `<option value="">Vyberte jídlo...</option>`;
        for(const ov of ovoce){
            jidloSelect.innerHTML += `<option value="${ov.name}">${ov.niceName}</option>`;
    } 
     } else if(kategorieSelect.value == "pecivo"){
        jidloSelect.innerHTML += `<option value="">Vyberte jídlo...</option>`;
        for(const pec of pecivo){
            jidloSelect.innerHTML += `<option value="${pec.name}">${pec.niceName}</option>`;
    } 
     } else if(kategorieSelect.value == "sladkosti"){
        jidloSelect.innerHTML += `<option value="">Vyberte jídlo...</option>`;
        for(const slad of sladkosti){
            jidloSelect.innerHTML += `<option value="${slad.name}">${slad.niceName}</option>`;
    } 
     } 

}
