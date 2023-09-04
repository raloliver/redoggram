/*
 * File: UserPost.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:18:40 am
 * Last Modified: Monday, September 4th 2023, 7:25:04 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';
import { ApiUrl } from '../../Api';

export const UserConfirm = () => {
  const endpoint = ApiUrl + '/users/confirm';
  const [Otp, setOtp] = useState('');

  function handleSubmit(form) {
    form.preventDefault();

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Otp,
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
        className="my-4"
        type="number"
        placeholder="OTP"
        value={Otp}
        onChange={({ target }) => setOtp(target.value)}
      />
      <button className="bg-teal-300 my-4">Confirm</button>
    </form>
  );
};
