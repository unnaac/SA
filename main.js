
function myFunc() {
    reko.style.display = "block";
    var creditInputValue = document.getElementById("creditInput").value;

    const greedy1senjata1 = document.getElementById("greedy1-senjata1");
    const greedy1senjata2 = document.getElementById("greedy1-senjata2");
    const greedy1senjata3 = document.getElementById("greedy1-senjata3");

    const greedy2senjata1 = document.getElementById("greedy2-senjata1");
    const greedy2senjata2 = document.getElementById("greedy2-senjata2");
    const greedy2senjata3 = document.getElementById("greedy2-senjata3");

    const greedy3senjata1 = document.getElementById("greedy3-senjata1");
    const greedy3senjata2 = document.getElementById("greedy3-senjata2");
    const greedy3senjata3 = document.getElementById("greedy3-senjata3");


    greedy1senjata1.src = "";
    const greedy1senjata1Text = greedy1senjata1.parentElement.querySelector("b");
    greedy1senjata1Text.textContent = "";

    greedy1senjata2.src = "";
    const greedy1senjata2Text = greedy1senjata2.parentElement.querySelector("b");
    greedy1senjata2Text.textContent = "";

    greedy1senjata3.src = "";
    const greedy1senjata3Text = greedy1senjata3.parentElement.querySelector("b");
    greedy1senjata3Text.textContent = "";



    greedy2senjata1.src = "";
    const greedy2senjata1Text = greedy2senjata1.parentElement.querySelector("b");
    greedy2senjata1Text.textContent = "";

    greedy2senjata2.src = "";
    const greedy2senjata2Text = greedy2senjata2.parentElement.querySelector("b");
    greedy2senjata2Text.textContent = "";

    greedy2senjata3.src = "";
    const greedy2senjata3Text = greedy2senjata3.parentElement.querySelector("b");
    greedy2senjata3Text.textContent = "";


    greedy3senjata1.src = "";
    const greedy3senjata1Text = greedy3senjata1.parentElement.querySelector("b");
    greedy3senjata1Text.textContent = "";
    
    greedy3senjata2.src = "";
    const greedy3senjata2Text = greedy3senjata2.parentElement.querySelector("b");
    greedy3senjata2Text.textContent = "";

    greedy3senjata3.src = "";
    const greedy3senjata3Text = greedy3senjata3.parentElement.querySelector("b");
    greedy3senjata3Text.textContent = "";


    const resultGreedy = greedyBuyPrice(creditInputValue);

    if(resultGreedy.primary == null) {
        resultGreedy.primary = { gambar: "", name:"" };
    }
    if(resultGreedy.secondary == null) {
        resultGreedy.secondary = { gambar: "", name:"" };
    }
    if(resultGreedy.shield == null) {
        resultGreedy.shield = { gambar: "", name:"" };
    }

    greedy1senjata1.src = resultGreedy.primary.gambar;
    greedy1senjata1.style.width = resultGreedy.primary.w;
    greedy1senjata1Text.textContent = resultGreedy.primary.name;

    greedy1senjata2.src = resultGreedy.secondary.gambar;
    greedy1senjata2.style.width = resultGreedy.secondary.w;
    greedy1senjata2Text.textContent = resultGreedy.secondary.name;

    greedy1senjata3.src = resultGreedy.shield.gambar;
    greedy1senjata3.style.width = resultGreedy.shield.w;
    greedy1senjata3Text.textContent = resultGreedy.shield.name;

    const resultGreedy2 = greedyBuyPop(creditInputValue);

    if(resultGreedy2.primary == null) {
        resultGreedy2.primary = { gambar: "", name:"" };
    }
    if(resultGreedy2.secondary == null) {
        resultGreedy2.secondary = { gambar: "", name:"" };
    }
    if(resultGreedy2.shield == null) {
        resultGreedy2.shield = { gambar: "", name:"" };
    }
    

    greedy2senjata1.src = resultGreedy2.primary.gambar;
    greedy2senjata1.style.width = resultGreedy2.primary.w;
    greedy2senjata1Text.textContent = resultGreedy2.primary.name;

    greedy2senjata2.src = resultGreedy2.secondary.gambar;
    greedy2senjata2.style.width = resultGreedy2.secondary.w;
    greedy2senjata2Text.textContent = resultGreedy2.secondary.name

    greedy2senjata3.src = resultGreedy2.shield.gambar;
    greedy2senjata3.style.width = resultGreedy2.shield.w;
    greedy2senjata3Text.textContent = resultGreedy2.shield.name;

    const resultGreedy3 = greedyBuyDens(creditInputValue);
    if(resultGreedy3.primary == null) {
        resultGreedy3.primary = { gambar: "", name:"" };
    }
    if(resultGreedy3.secondary == null) {
        resultGreedy3.secondary = { gambar: "", name:"" };
    }
    if(resultGreedy3.shield == null) {
        resultGreedy3.shield = { gambar: "", name:"" };
    }

    greedy3senjata1.src = resultGreedy3.primary.gambar;
    greedy3senjata1.style.width = resultGreedy3.primary.w;
    greedy3senjata1Text.textContent = resultGreedy3.primary.name;

    greedy3senjata2.src = resultGreedy3.secondary.gambar;
    greedy3senjata2.style.width = resultGreedy3.secondary.w;
    greedy3senjata2Text.textContent = resultGreedy3.secondary.name;

    greedy3senjata3.src = resultGreedy3.shield.gambar;
    greedy3senjata3.style.width = resultGreedy3.shield.w;
    greedy3senjata3Text.textContent = resultGreedy3.shield.name;


    // MONTE CARLO

    const montesenjata1 = document.getElementById("monte-senjata1");
    const montesenjata2 = document.getElementById("monte-senjata2");
    const montesenjata3 = document.getElementById("monte-senjata3");

    montesenjata1.src = "";
    const montesenjata1Text = montesenjata1.parentElement.querySelector("b");
    montesenjata1Text.textContent = "";

    montesenjata2.src = "";
    const montesenjata2Text = montesenjata2.parentElement.querySelector("b");
    montesenjata2Text.textContent = "";

    montesenjata3.src = "";
    const montesenjata3Text = montesenjata3.parentElement.querySelector("b");
    montesenjata3Text.textContent = "";

    const resultMonte = monteCarloBuy(creditInputValue);
    if (creditInputValue < 300){
        montesenjata1.src = "gambar/classic.png";
        montesenjata1.style.width = "50%";
        montesenjata1Text.textContent = "Classic";
    } else {
        if(resultMonte.primary == null) {
            resultMonte.primary = { gambar: "", name:"" };
        }
        if(resultMonte.secondary == null) {
            resultMonte.secondary = { gambar: "", name:"" };
        }
        if(resultMonte.shield == null) {
            resultMonte.shield = { gambar: "", name:"" };
        }

        montesenjata1.src = resultMonte.primary.gambar;
        montesenjata1.style.width = resultMonte.primary.w;
        montesenjata1Text.textContent = resultMonte.primary.name;

        montesenjata2.src = resultMonte.secondary.gambar;
        montesenjata2.style.width = resultMonte.secondary.w;
        montesenjata2Text.textContent = resultMonte.secondary.name;

        montesenjata3.src = resultMonte.shield.gambar;
        montesenjata3.style.width = resultMonte.shield.w;
        montesenjata3Text.textContent = resultMonte.shield.name;
    }
}