export class Cicle {
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
        let totalHores = 0;
        this.moduls.forEach(modul => {
            totalHores += parseInt(modul.hores);  
        });
        console.log(totalHores);
        alert(`Hores totals del cicle: ${totalHores}`);
    }
    afegirModul(modul_nom, modul_num, modul_hores) {
        let modul = new Modul(modul_nom, modul_num, modul_hores);
        this.moduls.push(modul);
    }
}    

