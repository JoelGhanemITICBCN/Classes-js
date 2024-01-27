let btnEliminarCicle;
let strTotal = "";
let llistatCicles = [];
let llistatModuls = [];

function afegirCicle() {
    let nom = document.getElementById("cicle_nom").value;
    let categoria = document.getElementById("cicle_categoria").value;
    let numAlumnes = document.getElementById("cicle_alumnes").value;
    let abreviatura = document.getElementById("cicle_abr").value;

    let cicle = { nom: nom, categoria: categoria, numAlumnes: numAlumnes, abreviatura: abreviatura }
    console.log(cicle);

    if (document.getElementById("editCicle").value === "-1") {
        //Afegim el cicle al llistat
        llistatCicles.push(cicle);
    } else {
        //Editar cicle
    cicle = { nom: nom, categoria: categoria, numAlumnes: numAlumnes, abreviatura: abreviatura }

    }

    //Actualitzem el selector
    actualitzarSelector();

    //Printem la llista
    console.log("llistatCicles");
    console.log(llistatCicles);
    printLlistat(llistatCicles);

    //Netegem els formularis
    netejarFormularis();

    document.getElementById("editCicle").value = -1;
}

function afegirModul() {
    let cicle = document.getElementById("modul_cicle").value;
    let modul_nom = document.getElementById("modul_nom").value;
    let modul_num = document.getElementById("modul_num").value;
    let modul_hores = document.getElementById("modul_hores").value;

    let modul = { cicle: cicle, nom: modul_nom, num: modul_num, hores: modul_hores }
    console.log("modul");
    console.log(modul);
    llistatModuls.push(modul);
    //Printem la llista
    console.log("llistatModuls");
    console.log(llistatModuls);

    //No se si vols imprimir els moduls o no 

    /*
    actualitzarSelector();
    printLlistat(llistatModuls);
    //Netegem els formularis
    */
    netejarFormularis();
}

function printLlistat(llistat) {
    let str = "";
    console.log(llistat);
    llistat.forEach(function (element, index) {
        //Para printear los modulos por pantalla
        /*if ('hores' in element) {
            str += `<div class="block p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${element.cicle.toUpperCase()}. ${element.nom}</h5>
                        <h6 class="text-gray-700">${element.num}</h6>
                        <p class="font-normal text-gray-700">Hores: ${element.hores}</p>
                    </div>`;
        } else {
            */
        str += `<div class="block p-6 mb-3 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${element.abreviatura.toUpperCase()}. ${element.nom}</h5>
                        <h6 class="text-gray-700">${element.categoria}</h6>
                        <p class="font-normal text-gray-700">Num d'alumnes: ${element.numAlumnes}</p>
                    </div>`;
        //}
        str += `<button type="button" id="btnEliminarCicle${index}" data-index="${index}"class="eliminar focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Eliminar</button>
        <button type="button" id="btnEditaCicle${index}" data-index="${index}" class="editar focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Editar</button>
        <button type="button" id="btnCalculaHores${index}"  data-index="${index}" class="calcular focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Càlcul hores</button>`;
 
   
    });
    let llistatElement = document.getElementById("llistat");
    llistatElement.innerHTML = "";
    llistatElement.innerHTML = str;
    setTimeout(addEventListeners(llistat), 0);
}
     function addEventListeners(llistat){
        llistat.forEach(function (element,index) {
     document.getElementById(`btnEliminarCicle${index}`).addEventListener('click', function (event) {
            console.log("llistat");
            console.log(llistat);
            console.log("index");
            console.log(index);
            console.log('Eliminar', event.target.dataset.index);
            removeCicle(index);
            actualitzarSelector();
            printLlistat(llistat);
        });

        document.getElementById(`btnEditaCicle${index}`).addEventListener('click', function (event) {
            editCicle(index);
            console.log('editar', event.target.dataset.index);
        });

        document.getElementById(`btnCalculaHores${index}`).addEventListener('click', function (event) {
            calculHores();
            console.log('Calcular horas', event.target.dataset.index);
        });
    });
    }

//Funció per actualitzar el selector de cicles cada vegada que afegim un cicle
function actualitzarSelector() {
    let select = document.getElementById('modul_cicle');
    select.innerHTML = "";
    llistatCicles.forEach(function (element, index) {
        let opt = document.createElement('option');
        opt.value = index;
        opt.text = element.nom;
        select.appendChild(opt);
    });
}

//Funció per eliminar un cicle
function removeCicle(index) {
    /*
    console.log("se ha llamado al elimina");
    console.log(index);
    console.log("llistatCicles antes de borrar");
    console.log(llistatCicles);
    */
    if (index >= 0 && index < llistatCicles.length) {
        llistatCicles.splice(index, 1);
    }
    /*
    console.log("llistatCicles dsps de borrar");
    console.log(llistatCicles);
    */
}


//Funció per editar un cicle
function editCicle(i) {
    document.getElementById("cicle_nom").value = llistatCicles[i].nom;
    document.getElementById("cicle_categoria").value = llistatCicles[i].categoria;
    document.getElementById("cicle_alumnes").value = llistatCicles[i].numAlumnes;
    document.getElementById("cicle_abr").value = llistatCicles[i].abreviatura;

    document.getElementById("editCicle").value = i;
}

//Funció per netejar els formularis
function netejarFormularis() {
    var inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

    var selects = document.getElementsByTagName("select");
    for (let i = 0; i < selects.length; i++) {
        selects[i].value = 0;
    }
}

//Creacio de la classe cicle
class Cicle {
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdicions = 0;
        this.ultimaEdicio = null;
        this.moduls = [];
    }

    setNumEdicions() {
        this.numEdicions++;
        this.ultimaEdicio = new Date();
    }


    toString() {
        let str = `${this.abreviatura.toUpperCase()}. ${this.nom}\nCategoria: ${this.categoria}\nNúmero d'alumnes: ${this.numAlumnes}\nNúmero d'edicions: ${this.numEdicions}\nÚltima edició: ${this.ultimaEdicio}\nMòduls:\n`;
        this.moduls.sort((a, b) => a.num - b.num).forEach(modul => {
            str += `Nom: ${modul.nom}, Número: ${modul.num}, Hores: ${modul.hores}\n`;
        });
        return str;
    }

    calculHores() {
        console.log("calculHores");
        return this.moduls.reduce((total, modul) => total + modul.hores, 0);
    }
}

//Creacio de la classe modul
class Modul {
    constructor(cicle, modul_nom, modul_num, modul_hores) {
        this.cicle = cicle;
        this.modul_nom = modul_nom;
        this.modul_num = modul_num;
        this.modul_hores = modul_hores;
    }
    toString() {
        let str = `MP${this.modul_num}. ${this.modul_nom} (${this.modul_hores})`;
        console.log("modul tostring");
        console.log(str);
        return str;
    }
}
let btnAfegirCicle = document.getElementById('btnAfegirCicle');
let btnAfegirModul = document.getElementById('btnAfegirModul');
let btnCalculaHores = document.getElementById('btnCalculaHores');
document.addEventListener('DOMContentLoaded', (event) => {
    btnEliminarCicle = document.getElementById('btnEliminarCicle');
});


btnAfegirCicle.addEventListener('click', afegirCicle);
btnAfegirModul.addEventListener('click', afegirModul);
btnCalculaHores.addEventListener('click', calculHores);
if (btnEliminarCicle !== "undefined") {
    btnEliminarCicle.addEventListener('click', function () { removeCicle(this.nom); });
}

let llistat = document.getElementById('llistat');

llistat.addEventListener(str);

