/*
 * File: UserRegister.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:18:40 am
 * Last Modified: Monday, September 4th 2023, 10:36:32 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';
import { ApiUrl } from '../../Api';

export const UserRegister = () => {
  const endpoint = ApiUrl + '/users/register';
  const [email, setEmail] = useState('');

  function handleSubmit(form) {
    form.preventDefault();

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        className="my-4"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button className="bg-teal-300 my-4">Register</button>
    </form>
  );
};
