document.getElementById("orderNo").innerText=randNum();
    document.getElementById("orderNo").style.color="green";
    function randNum(){
            return Math.floor((Math.random() * 249037) + 189654);
        }
    function gotohome(){
        window.location.href="home.html";
    }    