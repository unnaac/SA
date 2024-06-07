function monteCarloBuy(credit, iterations = 100000) { // interations bisa diganti sesuai mau nyoba berapa kali agar akurat
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

    let bestResult = {
        primary: null,
        secondary: null,
        shield: null,
        remainingCredit: credit,
        totalharga: null,
        totalpopu: null,
    };

    function evaluateCombination(combination, credit) {
        let result = {
            primary: null,
            secondary: null,
            shield: null,
            remainingCredit: credit,
            totalharga: null,
            totalpopu: null,
        };
        for (const item of combination) {
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
        result.remainingCredit = credit;
        return result;
    }

    function generateRandomCombination() {
        return buyMenu.sort(() => 0.5 - Math.random());
    }

    for (let i = 0; i < iterations; i++) {
        let combination = generateRandomCombination();
        let result = evaluateCombination(combination, credit);
        if (
            (!bestResult.primary || result.primary) &&
            (!bestResult.secondary || result.secondary) &&
            (!bestResult.shield || result.shield) &&
            result.remainingCredit < bestResult.remainingCredit
        ) {
            bestResult = result;
        }
    }

    return bestResult;
}
