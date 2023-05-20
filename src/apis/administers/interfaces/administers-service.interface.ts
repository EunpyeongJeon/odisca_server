import { CreateAdministerInput } from '../dto/create-administer.input';
import { UpdateLoginAdministerInput } from '../dto/update-login-administer.input';

export interface IAdministersServiceFindOne {
  administer_email: string;
}

export interface IAdministersServiceCreate {
  createAdministerInput: CreateAdministerInput;
}

export interface IAdministersServiceFindOneById {
  administer_id: string;
}

export interface IAdministersServiceSoftDelete {
  administer_id: string;
}

export interface IAdministerServiceUpdate {
  administer_id: string;
  updateLoginAdministerInput: UpdateLoginAdministerInput;
}
