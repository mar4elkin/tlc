const express = require("express");
const app = express();
const ejs = require('ejs');
const fs = require('fs');


app.use(express.static('public')); 
app.set("view engine", "ejs");
 

var tarifs = ["Эконом", "Комфорт", "Бизнес-класс", "Минивэн", "VIP"];

// места
var place = [
    "Деловая зона пулково", "Фрунзенский", "Московский", "Красносельский", "Кировский", 
    "Невский (левый)", "Каноерский остров", "Невский", "Красногвардейский", "Адмиралтейский", 
    "Центральный", "Василеостровский", "Петроградский", "Крестовкий остров", "Калининский", "Приморский", "Выборгский" 
];

// lowcost
var priceLowcost = [
    "600", "700 - 800", "650 - 750", "950", "850", 
    "1050", "950", "1150", "1250", "950", 
    "1050", "1050 - 1150", "1200", "1300", "1350", "1350 - 1500", "1350 - 1500" 
];

// комфорт
var priceComfort = [
    "800", "1000 - 1100", "900 - 1100", "1300", "1200", 
    "1400", "1300", "1600", "1700", "1300", 
    "1500", "1400 - 1600", "1700", "1800", "1800", "1800 - 2000", "1800 - 2000" 
];

// бизнесс
var priceBisnes = [
    "1200", "1500 - 1600", "1200 - 1450", "1800", "1500", 
    "1900", "1700", "2200", "2300", "1800", 
    "2000", "1900 - 2200", "2200", "2400", "2500", "2500 - 2800", "2500 - 2800" 
];

// минивен
var priceMiniven = [
    "800", "1200 - 1300", "1000 - 1200", "1500", "1200", 
    "1800", "1400", "1600", "1900", "1500", 
    "1600", "1600 - 1800", "1800", "2100", "2100", "2100 - 2200", "2200" 
];

// vip
var priceVip = [ 
    "3000", "3500 - 3800", "3000 - 3600", "4500", "3800", 
    "5300", "4300", "4800", "5800", "4500", 
    "5000", "4500 - 5500", "5500", "6000", "6300", "6300 - 7000", "6800 - 7000" 
];

function getTaxiImages(path){
    let tpath = 'public/assets/TaxiCars/' + path;
    let taxiarr = [];
    let farr = [];
    let staxiarr = [];

    fs.readdirSync(tpath).forEach(file => {
        taxiarr.push(file);
    });

    taxiarr.forEach(el => staxiarr.push(parseInt(el.split('.')[0])));
    staxiarr.sort(function(a, b) {
        return a - b;
      }).forEach(el => farr.push('assets/TaxiCars/' + path + "/" + el + '.jpg'));

    return farr;
}

function taxiArrs(){
    
    let ltext = ['Nissan Almera', 'Kia Ceed', 'Chevrolet Cruze', 'Ford Focus', 'Hyundai ix 35', 'Skoda Rapid', 'Kia RIO', 'Skoda Octavia', 'Hyundai Solaris', 'Volkswagen Jetta', 'Volkswagen Polo']
    let ctext = ['Ford Mondeo', 'Kia Optima', 'Skoda Superb', 'Toyota Camry']
    let btext = ['Audi A6', 'Lexus ES 250', 'Mercedes E220', 'Genesis G80']
    let mtext = ['Citroen Jumpy', 'Ford Tourneo', 'Hyundai Starex', 'Volkswagen Caravelle', 'Hyundai H-1', 'Peugeot expert']
    let vtext = ['Audi A8 Long Premium', 'Mercedes S500 (W222)', 'BMW 750 LI']

    let l = getTaxiImages('lowcost');
    let c = getTaxiImages('comfort');
    let b = getTaxiImages('bisnes');
    let m = getTaxiImages('miniven');
    let v = getTaxiImages('vip');

    let lowcost = {
        imgs: l,
        text: ltext
    }

    let comfort = {
        imgs: c,
        text: ctext
    }

    let bisnes = {
        imgs: b,
        text: btext
    }

    let miniven = {
        imgs: m,
        text: mtext
    }

    let vip = {
        imgs: v,
        text: vtext
    }

    let obj = {
        lowcost,
        comfort,
        bisnes,
        miniven,
        vip
      };
    
    return obj;
}


app.use("/cargo", function(request, response){
     
    response.render("cargo", {

    });
});

app.use("/taxi", function(request, response){
     
    response.render("taxi", {
        tarifs: tarifs,
        place: place,
        priceLowcost: priceLowcost,
        priceComfort: priceComfort,
        priceBisnes: priceBisnes,
        priceMiniven: priceMiniven,
        priceVip: priceVip,
        // lowcostImg: getTaxiImages('lowcost'),
        // comfortImg: getTaxiImages('comfort'),
        // bisnesImg: getTaxiImages('bisnes'),
        // minivenImg: getTaxiImages('miniven'),
        // vipImg: getTaxiImages('vip'),
        taxiArrs: taxiArrs(),
    });
});

app.use("/", function(request, response){
     
    response.render("index", {

    });
});


app.listen(3000);