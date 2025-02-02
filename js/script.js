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