/*
 * File: UserSignup.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:18:40 am
 * Last Modified: Monday, September 4th 2023, 10:36:27 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';
import { ApiUrl } from '../../Api';

export const UserSignup = () => {
  const endpoint = ApiUrl + '/users/signup';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(form) {
    form.preventDefault();

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({data}) => {
        console.log(data);
        return data;
      });
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="my-4"
        placeholder="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        className="my-4"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className="bg-teal-300 my-4">Signup</button>
    </form>
  );
};
