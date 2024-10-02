"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
      // Send title and description in the request body
      await axios.post("http://localhost:3000/api/topics", {
        title,          // Sending the title
        descriptions: description, // Sending the description
      });
      router.push("/");
      router.refresh();
      // Use 'push' instead of 'navigate'
    } catch (e) {
      console.error("Failed to submit topic", e);
    }
  };

  return (
    <div className="mx-8">
      <form onSubmit={handleSubmit} className="grid items-center gap-4">
        <input
          className="w-full p-4 border border-black lg:w-2/3 lg:mx-auto"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Topic Title"
        />
        <input
          className="w-full p-4 border border-black lg:w-2/3 lg:mx-auto"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Topic Descriptions"
        />
        <button
          type="submit"
          className="p-2 mx-auto font-bold text-white bg-green-600 w-52 lg:w-32 lg:mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
