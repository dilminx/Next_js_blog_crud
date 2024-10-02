"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";

function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to remove");
    if (confirmed) {
      await axios.delete(`http://localhost:3000/api/topics?id=${id}`);
      router.refresh();
    }
  };
  return (
    <div>
      <button onClick={removeTopic}>
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
}

export default RemoveBtn;
