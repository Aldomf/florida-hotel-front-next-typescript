import UpdateRoomForm from "@/components/admin/UpdateRoomForm";
import Navbar from "@/components/admin/NavBar";
import React from "react";

function page() {
  return (
    <div className="bg-gray-700">
      <div className="">
        <Navbar />
      </div>
      <div className="flex flex-col items-center my-5 space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
          Update Room
        </h2>
      </div>
      <div className="flex justify-center items-center pb-6">
        <UpdateRoomForm/>
      </div>
    </div>
  );
}

export default page;
