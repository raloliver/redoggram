/*
 * File: Preview.jsx
 * Project: redoggram
 * Created: Monday, September 4th 2023, 6:18:40 am
 * Last Modified: Monday, September 4th 2023, 10:50:21 am
 * Copyright © 2023 AMDE Agência
 */

import React, { useState } from 'react';
import { ApiUrl } from '../../Api';

export const Preview = () => {
  const [id, setId] = useState('');
  const endpoint = ApiUrl + '/post/' + id;
  const [token, setToken] = useState('');
  const [post, setPost] = useState({});

  function handleSubmit(form) {
    form.preventDefault();

    fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({ post }) => {
        console.log(post);
        setPost(post);
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
        type="text"
        className="my-4"
        placeholder="id"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button className="bg-teal-300 text-white font-bold rounded-lg px-4 py-3 my-4 flex justify-center">
        <span className="mr-3">Preview</span>
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
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </button>
      {post && (
        <div className='mx-auto'>
          <img
            src={post?.image[0]?.url}
            alt={post?.caption}
          />
          <p className="text-center">
            <small>{post?.caption}</small>
          </p>
        </div>
      )}
    </form>
  );
};
