/*
 * File: Post.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:18:40 am
 * Last Modified: Monday, September 4th 2023, 10:42:38 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';
import { ApiUrl } from '../../Api';

export const Post = () => {
  const endpoint = ApiUrl + '/post';
  const [token, setToken] = useState('');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [id, setId] = useState('');

  function handleSubmit(form) {
    form.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('caption', caption);

    fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ post }) => {
        console.log(post);
        setId(post.id)
        return post;
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
        placeholder="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="file"
        className="my-4"
        onChange={({ target }) => setImage(target.files[0])}
      />
      <input
        type="text"
        className="my-4"
        placeholder="caption with #hashtag"
        value={caption}
        onChange={({ target }) => setCaption(target.value)}
      />
      <button className="bg-teal-300 text-white font-bold rounded-lg px-4 py-3 my-4 flex justify-center">
        <span className='mr-3'>Post</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
      <p className="break-words">{id}</p>
    </form>
  );
};
