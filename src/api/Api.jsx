/*
 * File: Api.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:14:49 am
 * Last Modified: Monday, September 4th 2023, 7:01:16 am
 * Copyright © 2023 AMDE Agência
 */

import { UserRegister } from './endpoints/users/UserRegister';
import { UserConfirm } from './endpoints/users/UserConfirm';
import { UserSignup } from './endpoints/users/UserSignup';
import { UserLogin } from './endpoints/users/UserLogin';

export const ApiUrl = 'http://localhost:3000/api/v1';

export const Api = () => {
  return (
    <div className="container mx-auto my-20">
      <h2>USER REGISTER</h2>
      <UserRegister />
      <h2>USER CONFIRM</h2>
      <UserConfirm />
      <h2>USER SIGNUP</h2>
      <UserSignup />
      <h2>USER LOGIN</h2>
      <UserLogin />
    </div>
  );
};
