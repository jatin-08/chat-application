import User from "../model/usersModel.model";
import { SignupDto } from "../validation/signup/signup.dto";
import BaseService from "./baseService.services";

class SignupService extends BaseService {
  constructor(model = User) {
    super(model);
  }

  getDto(): any {
    return SignupDto;
  }
  override preproccess(data: any, files: File[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const isUsernameExist = await this.model.findOne({
        username: data.username,
        is_delete: 0,
      });
      if (isUsernameExist) {
        reject("Username already present!");
      }
      const isEmailExist = await this.model.findOne({
        email: data.email,
        is_delete: 0,
      });
      if (isEmailExist) {
        reject("Email already present!");
      }
      resolve(data);
    });
  }
}

export default SignupService;
