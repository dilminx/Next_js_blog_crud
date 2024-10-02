import EditTopicForm from '@/components/EditTopicForm';
import React from 'react';
import axios from 'axios';

// Function to fetch data server-side in Next.js App Router
const getTopic = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/topics/${id}`);
    return response.data.data;
  } catch (e) {
    console.error("Error fetching topic:", e);
    return null;
  }
};

// Page component to render the EditTopicForm
const EditTopicPage = async ({ params }) => {
  const topic = await getTopic(params.id); // Fetch the topic data using the ID from params

  if (!topic) {
    return <p>Topic not found</p>;
  }

  return (
    <div className=''>
      <EditTopicForm id={topic._id} title={topic.title} descriptions={topic.descriptions} />
    </div>
  );
};

export default EditTopicPage;
