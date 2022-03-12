import data from '../data.json' assert { type: 'json' };


/*Código para adicionar o título dos cards*/

const arrayTitles = [];

const titles = data.map((item) => {
    arrayTitles.push(item.title);
});

for(let x = 0; x < arrayTitles.length; x++) {
    var paragraph = document.getElementsByClassName('titleName');
    paragraph[x].innerHTML = arrayTitles[x];
}


/*Código para adicionar os outros dados nos cards*/

var element1 = document.getElementById('link1');
element1.onclick = () => {
    document.getElementById('link2').removeAttribute('class');
    document.getElementById('link3').removeAttribute('class');

    document.getElementById('link1').setAttribute('class', 'selected');

    const daily = [];
    const daily2 = [];

    const values = data.map((item) => {
        daily.push(item.timeframes.daily.current);
        daily2.push(item.timeframes.daily.previous);
    });

    //current
    for(let x = 0; x < daily.length; x++) {
        var hours = document.getElementsByClassName('hours');
        hours[x].innerHTML = daily[x] + 'hrs';
    }

    //previous
    for(let y = 0; y<daily2.length; y++) {
        var time = document.getElementsByClassName('time');
        time[y].innerHTML = 'Last week - ' + daily2[y] + 'hrs';
    }
}

var element2 = document.getElementById('link2');
element2.onclick = () => {
    document.getElementById('link1').removeAttribute('class');
    document.getElementById('link3').removeAttribute('class');

    document.getElementById('link2').setAttribute('class', 'selected');

    const weekly = [];
    const weekly2 = [];

    const values = data.map((item) => {
        weekly.push(item.timeframes.weekly.current);
        weekly2.push(item.timeframes.weekly.previous);
    });

    //current
    for(let x = 0; x < weekly.length; x++) {
        var hours = document.getElementsByClassName('hours');
        hours[x].innerHTML = weekly[x] + 'hrs';
    }

    //previous
    for(let y = 0; y < weekly2.length; y++) {
        var time = document.getElementsByClassName('time');
        time[y].innerHTML = 'Last week - ' + weekly2[y] + 'hrs';
    }
}

var element3 = document.getElementById('link3');
element3.onclick = () => {
    document.getElementById('link1').removeAttribute('class');
    document.getElementById('link2').removeAttribute('class');

    document.getElementById('link3').setAttribute('class', 'selected');

    const monthly = [];
    const monthly2 = [];
    
    const values = data.map((item) => {
        monthly.push(item.timeframes.monthly.current);
        monthly2.push(item.timeframes.monthly.previous);
    });

    //current
    for(let x = 0; x < monthly.length; x++) {
        var hours = document.getElementsByClassName('hours');
        hours[x].innerHTML = monthly[x] + 'hrs';
    }

    //previous
    for(let y = 0; y < monthly2.length; y++) {
        var time = document.getElementsByClassName('time');
        time[y].innerHTML = 'Last week - ' + monthly2[y] + 'hrs';
    }
}