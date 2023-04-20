let myWindow; //task 1
function openWin() {
  myWindow = window.open("", "", "width=300, height=300");
  setTimeout(resize, 2000);
  setTimeout(position, 4000);
  setTimeout(span, 6000);
}
function resize()
{
    myWindow.resizeTo(500, 500);
}
function position()
{
    myWindow.moveTo(200, 200);
}
function span()
{
    myWindow.close();
}

function changeCSS()//task 2
{
    var p = document.getElementById("text");
    p.style.color = "orange";
    p.style.fontSize = "20px";
    p.style.fontFamily = "Comic Sans MS";
}

function changeBackground(str)//task 3
{
    var div = document.getElementById("background");
    div.style.height = "50px";
    div.style.backgroundColor = str;
}

function RemoveOption()//task 4
{
    var n = document.getElementById("nam");
    var names = document.getElementById("nam").value;
    n.remove(names);   
}

function LiveText(s)//task 5
{
    var pp = document.createElement('p');
    pp.innerHTML = s;
    document.body.appendChild(pp);
}

const t = document.getElementById("txt");//task 6
function WidthHeight()
{
    t.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
}
WidthHeight();
window.addEventListener("resize", WidthHeight);

function Countries()//task 7
{
    var coun = document.getElementById("country").value;
    var city = document.getElementById("cities");
    if(coun == "ger")
    {
        city.options.length=0;
        const ber = document.createElement('option');
        ber.value = "ber";
        ber.innerHTML = "Berlin";
        const mun = document.createElement('option');
        mun.value = "mun";
        mun.innerHTML = "Munich";
        const fran = document.createElement('option');
        fran.value = "fran";
        fran.innerHTML = "Frankfurt";
        city.appendChild(ber);
        city.appendChild(mun);
        city.appendChild(fran);
    }
    if(coun == "usa")
    {
        city.options.length=0;
        const york = document.createElement('option');
        york.value = "york";
        york.innerHTML = "New-York";
        const wash = document.createElement('option');
        wash.value = "wash";
        wash.innerHTML = "Washington";
        const chik = document.createElement('option');
        chik.value = "chik";
        chik.innerHTML = "Chikago";
        city.appendChild(york);
        city.appendChild(wash);
        city.appendChild(chik);
    }
    if(coun == "ukr")
    {
        city.options.length=0;
        const kiev = document.createElement('option');
        kiev.value = "kiev";
        kiev.innerHTML = "Kiev";
        const ter = document.createElement('option');
        ter.value = "ter";
        ter.innerHTML = "Ternopil";
        const ode = document.createElement('option');
        ode.value = "ode";
        ode.innerHTML = "Odessa";
        city.appendChild(kiev);
        city.appendChild(ter);
        city.appendChild(ode);
    }
}
function CountriesAndCities()
{
    const txt = document.getElementById("countries");
    var coun = document.getElementById("country").value;
    var city = document.getElementById("cities").value;
    for(let i = 0; i < document.getElementById("country").length; i++)
    {
        if(document.getElementById("country").options[i].value == coun)
        {
            txt.innerHTML = document.getElementById("country").options[i].text + ', '; 
        }
    }
    for(let i = 0; i < document.getElementById("cities").length; i++)
    {
        if(document.getElementById("cities").options[i].value == city)
        {
            txt.innerHTML = txt.innerHTML + document.getElementById("cities").options[i].text; 
        }
    }
}
Countries();
CountriesAndCities();
document.getElementById("country").addEventListener('change', Countries, false);
document.getElementById("country").addEventListener('change', CountriesAndCities, false);
document.getElementById("cities").addEventListener('change', CountriesAndCities, false);