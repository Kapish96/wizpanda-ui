 export class StudentVO {
    name: string;
    email: string;
    number: string;
    password: string;

    constructor(name: string, email: string, number: string, password: string){
        this.name = name;
        this.email = email;
        this.number = number;
        this.password = password;
    }
}