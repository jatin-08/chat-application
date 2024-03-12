import User from "../model/usersModel.model";
import { createjwt } from "../util/jwt/jwt";
import { LoginDto } from "../validation/login/login.dto";
import BaseService from "./baseService.services";

class LoginService extends BaseService {
    constructor(model = User) {
        super(model);
    }

    getDto(): any {
        return LoginDto;
    }

    login(data: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let result = await this.model.findOne({ username: data.username, password: data.password, is_delete: 0 })
            if (result === null) {
                return reject('Invalid Login Details!')
            }

            // Transform the result according to jwt object
            result = {
                id: result.id,
                username: result.username,
                email: result.email,
                password: result.password,
                status: result.status,
                is_delete: result.is_delete,
            }

            const generateToken = createjwt(result)
            result.token = generateToken
            resolve(result)
        });
    }

}

export default LoginService;
