import { signupEntity } from "../model/signupEntity.model";
import BaseService from "./baseService.services";

class SignupService extends BaseService {
  constructor(entity = signupEntity) {
    super(entity);
  }
}

export default SignupService;
