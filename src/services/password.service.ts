import bcrypt from 'bcrypt'

export default class PasswordService {
    constructor() {}

    public async generateNewPassword(userName: string): Promise<string> {
        return await this.encrpytPassword(userName + "-2229");
    }

    public async encrpytPassword(password: string): Promise<string> {
        return new Promise<string>(async (resolve, reject) => {
            const salt = await bcrypt.genSalt(20);
            return await bcrypt.hash(password, salt);
        }) 
    }
}