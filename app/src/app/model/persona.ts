export class Persona {
    public cedula: string;
    public contrasenia: string;
    public cuenta: string;
    public monto: DoubleRange;
    public mail: string;

    get getCedula(): string {
        return this.cedula;
    }

    set setCedula(newCedula: string){
        this.cedula = newCedula;
    }

    get getMail(): string {
        return this.mail;
    }

    set setMail(newMail: string){
        this.mail = newMail;
    }


    get getContrasenia(): string {
        return this.contrasenia;
    }

    set setContrasenia(newContrasenia: string){
        this.contrasenia = newContrasenia;
    }

}
