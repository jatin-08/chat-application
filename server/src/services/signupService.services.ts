import User from '../model/usersModel.model'
import BaseService from "./baseService.services";

class SignupService extends BaseService {
  constructor(model = User) {
    super(model);
  }
}

export default SignupService;
