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
import AddNewRoomType from "./_components/AddNewRoomType";
import RoomTypeForm from "./_components/RoomTypeForm";

const roomTypes = [
  {
    _id: "60c72b2f9b1d4f001f8e4c1a",
    code: "SR",
    name: "Single Room",
    description:
      "A compact room with a single bed, suitable for solo travelers.",
    checkinTime: "15:00",
    checkoutTime: "11:00",
    basePrice: 75,
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c1b",
    code: "DR",
    name: "Double Room",
    description: "A comfortable room with a double bed, ideal for couples.",
    checkinTime: "15:00",
    checkoutTime: "11:00",
    basePrice: 120,
  },
  {
    _id: "60c72b2f9b1d4f001f8e4c1c",
    code: "ST",
    name: "Suite",
    description: "A spacious suite with a separate living area and bedroom.",
    checkinTime: "15:00",
    checkoutTime: "11:00",
    basePrice: 250,
  },
];

const RoomTypesPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<any>(null);

  const editHandler = (type: any) => {
    setIsEditing(true);
    setSelectedType(type);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <div>
              <CardTitle className="text-xl">Room Types</CardTitle>
              <CardDescription>
                Manage room types and their details
              </CardDescription>
            </div>
            <AddNewRoomType />
          </div>
        </CardHeader>
        <CardContent className=" overflow-auto">
          <table className="border w-full">
            <thead className="border">
              <tr className="border">
                <th className="border px-4 py-3 text-start whitespace-nowrap ">
                  S.No
                </th>
                <th className="border px-4 py-3 text-start whitespace-nowrap">
                  Name
                </th>
                <th className="border px-4 py-3 text-start whitespace-nowrap">
                  Code
                </th>
                <th className="border px-4 py-3 text-start whitespace-nowrap">
                  Price
                </th>
                <th className="border px-4 py-3 text-start whitespace-nowrap">
                  Check-In
                </th>
                <th className="border px-4 py-3 text-start whitespace-nowrap">
                  Check-Out
                </th>
              </tr>
            </thead>
            <tbody>
              {roomTypes?.map((type: any, idx: number) => {
                return (
                  <tr className="border" key={idx}>
                    <td className="border px-4 py-2 text-start">{idx + 1}</td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {type?.name}
                    </td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {type?.code}
                    </td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {type?.basePrice}
                    </td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {type?.checkinTime}
                    </td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {type?.checkoutTime}
                    </td>

                    <td className="px-4 py-2 flex items-center justify-center">
                      <Button size="sm" onClick={() => editHandler(type)}>
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
          title="Edit Room Type"
          open={isEditing}
          description="Update the details below to edit the room type."
          setOpen={() => setIsEditing(false)}
        >
          <RoomTypeForm isEditing={isEditing} type={selectedType} />
        </Modal>
      )}
    </div>
  );
};

export default RoomTypesPage;
