//cree un variable et un nouvelle object "Date"
let countDownDate = new Date("june 28, 2025 22:00:00").getTime();
//console.log()  "qui serve a tester notre code dans "console du navigateur"."
// nouvelle variable x qui va nous permettre de faire l'interval de temps 1s=1000
let x = setInterval(function() {
    //now represente la date au moment t CAD maintenant
    let now = new Date().getTime();
    //distance calcule l'ecart entre "countDownDate" et "now"
    let distance = countDownDate - now;
    //un variable pour les jours
    let days = Math.floor(distance / (1000*60*60*24));
    //un variable pour les heures
    let hours = Math.floor(distance % (1000*60*60) / (1000*60*60));
    //un variable pour les minutes
    let minutes = Math.floor(distance % (1000*60*60) / (1000*60));
    //un variable pour les secondes
    let seconds = Math.floor((distance % (1000*60)) / 1000);

    //
    document.querySelector("#countdown").innerHTML = `
        <div class='tag'>
            <span class='value'><b>${days}</b></span>
            <span><br><b>Days</b></span>
        </div>
        <div class='tag'>
            <span class='value'><b>${hours}</b></span>
            <span><br> <b>Hours</b></span>
        </div>
        <div class='tag'>
            <span class='value'><b>${minutes}</b></span>
            <span><br><b>Minutes</b></span>
        </div>
        <div class='tag'>
            <span class='value'><b>${seconds}</b></span>
            <span><br><b>Secondes</b></span>
        </div>
    `;
    if(distance < 0){// pour definir l'interval au qu'elle ca va s'executer
        clearInterval(x);
        document.querySelector("#countdown").innerHTML = "<span> Terminer </span>";
    }

    console.log(days, hours, minutes, seconds)
},1000);