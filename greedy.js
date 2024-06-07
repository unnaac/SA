const buyMenu = [
    { name: "Operator", price: 4700, typ: "Primary", typg: "Sniper Rifle", popu: 80, gambar: "gambar/operator.png", w: "80%", dens: 4700 / 80 },
    { name: "Odin", price: 3200, typ: "Primary", typg: "Machine Gun", popu: 65, gambar: "gambar/odin.png", w: "80%", dens: 3200 / 65 },
    { name: "Vandal", price: 2900, typ: "Primary", typg: "Assault Rifle", popu: 90, gambar: "gambar/vandal.png", w: "80%", dens: 2900 / 90 },
    { name: "Guardian", price: 2250, typ: "Primary", typg: "Assault Rifle", popu: 70, gambar: "gambar/guardian.png", w: "80%", dens: 2250 / 70 },
    { name: "Bulldog", price: 2050, typ: "Primary", typg: "Assault Rifle", popu: 55, gambar: "gambar/bulldog.png", w: "80%", dens: 2050 / 55 },
    { name: "Judge", price: 1850, typ: "Primary", typg: "Shotgun", popu: 40, gambar: "gambar/judge.png", w: "80%", dens: 1850 / 40 },
    { name: "Spectre", price: 1600, typ: "Primary", typg: "Sub Machine Gun", popu: 60, gambar: "gambar/spectre.png", w: "80%", dens: 1600 / 60 },
    { name: "Stinger", price: 1100, typ: "Primary", typg: "Sub Machine Gun", popu: 85, gambar: "gambar/stinger.png", w: "80%", dens: 1100 / 85 },
    { name: "Marshal", price: 950, typ: "Primary", typg: "Sniper Rifle", popu: 75, gambar: "gambar/marshal.png", w: "80%", dens: 950 / 75 },
    { name: "Heavy Shield", price: 1000, typ: "Shield", typg: "Shield", popu: 35, gambar: "gambar/heavy_shield.png", w: "20%", dens: 1000 / 35 },
    { name: "Light Shield", price: 400, typ: "Shield", typg: "Shield", popu: 20, gambar: "gambar/light_shield.png", w: "20%", dens: 400 / 20 },
    { name: "Sheriff", price: 800, typ: "Secondary", typg: "Sidearm", popu: 80, gambar: "gambar/sheriff.png", w: "50%", dens: 800 / 80 },
    { name: "Ghost", price: 500, typ: "Secondary", typg: "Sidearm", popu: 70, gambar: "gambar/ghost.png", w: "80%", dens: 500 / 70 },
    { name: "Shorty", price: 300, typ: "Secondary", typg: "Sidearm", popu: 50, gambar: "gambar/shorty.png", w: "50%", dens: 300 / 50 },
    { name: "Classic", price: 0, typ: "Secondary", typg: "Sidearm", popu: 60, gambar: "gambar/classic.png", w: "50%", dens: 0 / 60 }
];



function greedyBuyPrice(credit) {
    
    const result = {
        primary: null,
        secondary: null,
        shield: null,
        totalharga: null,
        totalpopu: null,
    };
    
    for (const item of buyMenu) {
        if (credit >= item.price) {
            if (item.typ === "Primary" && !result.primary) {
                credit -= item.price;
                result.primary = item;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Secondary" && !result.secondary) {
                credit -= item.price;
                result.secondary = item;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Shield" && !result.shield) {
                credit -= item.price;
                result.shield = item;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            }
        }
    }

    return result;
}   

function greedyBuyPop(credit) {
    const result = {
        primary: null,
        secondary: null,
        shield: null,
        totalharga: null,
        totalpopu: null,
    };
    c = buyMenu;
    c.sort((a, b) => b.popu - a.popu);
    let maxPopP = 0, maxPopSc = 0, maxPopSh = 0;
    for (const item of buyMenu) {
        if (credit >= item.price) {
            if (item.typ === "Primary" && !result.primary && item.popu > maxPopP) {
                credit -= item.price;
                result.primary = item;
                maxPopP = item.popu;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Secondary" && !result.secondary && item.popu > maxPopSc) {
                credit -= item.price;
                result.secondary = item;
                maxPopSc = item.popu;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Shield" && !result.shield && item.popu > maxPopSh) {
                credit -= item.price;
                result.shield = item;
                maxPopSh = item.popu;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            }
        }
    }
    return result;
}
function greedyBuyDens(credit) {
    const result = {
        primary: null,
        secondary: null,
        shield: null,
        totalharga: null,
        totalpopu: null,
    };
    let maxDensSc = 0;
    let maxDensSh = 0;
    c = buyMenu;
    c.sort((a, b) => b.dens - a.dens);

    for (const item of buyMenu) {
        if (credit >= item.price) {
            if (item.typ === "Primary" &&!result.primary) {
                credit -= item.price;
                result.primary = item;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Secondary" &&!result.secondary && item.dens > maxDensSc) {
                credit -= item.price;
                result.secondary = item;
                maxDensSc = item.dens;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            } else if (item.typ === "Shield" &&!result.shield && item.dens > maxDensSh) {
                credit -= item.price;
                result.shield = item;
                maxDensSh = item.dens;
                result.totalharga += item.price;
                result.totalpopu += item.popu;
            }
        }
    }
    return result;
}

