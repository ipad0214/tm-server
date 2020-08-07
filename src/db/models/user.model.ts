export class User {
    constructor(public name: string = "", public id: number = 0) { }
    public username: string = "";
    public email: string = "";
    public admin: boolean = false;
    public password: string = "";
}