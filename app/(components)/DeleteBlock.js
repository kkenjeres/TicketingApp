"use client";

import { useRouter } from "next/navigation";
import { FaXmark } from "react-icons/fa6";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FaXmark
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
