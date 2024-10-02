"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({ id, title: initialTitle, descriptions: initialDescriptions }) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [description, setDescription] = useState(initialDescriptions || "");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
      await axios.put(`http://localhost:3000/api/topics/${id}`, {
        title,
        descriptions: description,
      });
      router.push('/');
      router.refresh();
    } catch (e) {
      console.error("Error updating topic", e);
    }
  };

  return (
    <div className="mx-8">
      <form onSubmit={handleSubmit} className="grid items-center gap-4">
        <input
          className="w-full p-4 border border-black lg:w-2/3 lg:mx-auto"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic Title"
        />
        <input
          className="w-full p-4 border border-black lg:w-2/3 lg:mx-auto"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Topic Descriptions"
        />
        <button
          type="submit"
          className="p-2 mx-auto font-bold text-white bg-green-600 w-52 lg:w-32 lg:mx-auto"
        >
          Update & Submit
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
