import axios from "axios";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

// Fetch topics using axios
const getTopic = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/topics");

    return response.data;
  } catch (e) {
    console.error("Error getting topics", e);
    
  }
};

const TopicList = async () => {
  const data = await getTopic();

  // Check if the response or topics array is null or undefined
  if (!data || !data.data) {
    return <p>No topics available</p>; // Gracefully handle missing data
  }

  const topics = data.data; // Access the `data` field where the topics are stored

  return (
    <>
      {topics.map((t) => (
        <div
          className="flex justify-between px-4 m-4 border bg-slate-100"
          key={t._id}
        >
          <div>
            <h2 className="font-bold">{t.title}</h2> {/* Display the title */}
            <p>{t.descriptions}</p> {/* Display the descriptions */}
          </div>
          <div className="flex gap-3 p-4">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
