/*
 * File: Api.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:14:49 am
 * Last Modified: Monday, September 4th 2023, 10:43:45 am
 * Copyright © 2023 AMDE Agência
 */

import { UserRegister } from './endpoints/users/UserRegister';
import { UserConfirm } from './endpoints/users/UserConfirm';
import { UserSignup } from './endpoints/users/UserSignup';
import { UserLogin } from './endpoints/users/UserLogin';
import { Post } from './endpoints/post/Post';
import { Preview } from './endpoints/post/Preview';

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
      <div className="bg-gradient-to-r from-teal-500 to-violet-700 py-6">
        <div className="bg-white flex flex-col lg:flex-row justify-center items-center w-4/5 mx-auto p-12 shadow-2xl my-6">
          <h2>POST</h2>
          <Post />
        </div>
        <div className="bg-white flex flex-col lg:flex-row justify-center items-center w-4/5 mx-auto p-12 shadow-2xl my-6">
          <h2>PREVIEW</h2>
          <Preview />
        </div>
      </div>
    </div>
  );
};
