import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import AddRoom from "./_components/AddRoom";
import RoomForm from "./_components/RoomForm";

const rooms = [
  {
    _id: "60c72b2f9b1d4f001f8e4c1f",
    roomNumber: 101,
    code: "SR 101",
    roomType: {
      _id: "60c72b2f9b1d4f001f8e4c1a",
      name: "Single Room",
    },
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c20",
    roomNumber: 202,
    code: "DR 202",
    roomType: {
      _id: "60c72b2f9b1d4f001f8e4c1b",
      name: "Double Room",
    },
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c21",
    roomNumber: 303,
    code: "ST 303",
    roomType: {
      _id: "60c72b2f9b1d4f001f8e4c1c",
      name: "Suite",
    },
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c22",
    roomNumber: 404,
    code: "DL 404",
    roomType: {
      _id: "60c72b2f9b1d4f001f8e4c1d",
      name: "Deluxe Room",
    },
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c23",
    roomNumber: 505,
    code: "FR 505",
    roomType: {
      _id: "60c72b2f9b1d4f001f8e4c1e",
      name: "Family Room",
    },
  },
];

const RoomsPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  const editHandler = (room: any) => {
    setIsEditing(true);
    setSelectedRoom(room);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <div>
              <CardTitle className="text-xl">Manage Rooms</CardTitle>
              <CardDescription>
                Manage the rooms available in the hotel.
              </CardDescription>
            </div>
            <AddRoom />
          </div>
        </CardHeader>
        <CardContent className=" overflow-auto">
          <table className="border w-full">
            <thead className="border">
              <tr className="border">
                <th className="border px-4 py-3 text-start ">S.No</th>
                <th className="border px-4 py-3 text-start">Room Number</th>
                <th className="border px-4 py-3 text-start">Room Code</th>
                <th className="border px-4 py-3 text-start">Room Type</th>
              </tr>
            </thead>
            <tbody>
              {rooms?.map((room: any, idx: number) => {
                return (
                  <tr className="border" key={idx}>
                    <td className="border px-4 py-2 text-start">{idx + 1}</td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {room?.roomNumber}
                    </td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {room?.code}
                    </td>
                    <td className="border px-4 py-2 text-start">
                      {room?.roomType?.name}
                    </td>

                    <td className="px-4 py-2 flex items-center justify-center">
                      <Button size="sm" onClick={() => editHandler(room)}>
                        Edit
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
      {isEditing && (
        <Modal
          title="Edit Room"
          open={isEditing}
          description="Update the details of the room."
          setOpen={() => setIsEditing(false)}
        >
          <RoomForm isEditing={isEditing} room={selectedRoom} />
        </Modal>
      )}
    </div>
  );
};

export default RoomsPage;
