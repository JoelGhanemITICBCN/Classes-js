export class Modul {
    constructor(modul_nom, modul_num, modul_hores) {
        this.modul_nom = modul_nom;
        this.modul_num = modul_num;
        this.modul_hores = modul_hores;
    }
    toString() {
        let str = `MP${this.modul_num}. ${this.modul_nom} (${this.modul_hores})`;
        return str;
    }
}