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
import AccessForm from "./_components/AccessForm";
import AddNewUser from "./_components/AddNewUser";

const UsersListPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const users = [
    {
      _id: "60b8d2955f1b2c001f8e4e1d",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "ADMIN",
    },
    {
      _id: "60b8d2955f1b2c001f8e4e1e",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      role: "FRONT_OFFICE",
    },
    {
      _id: "60b8d2955f1b2c001f8e4e1f",
      name: "Carol White",
      email: "carol.white@example.com",
      role: "RESERVATION_MANAGER",
    },
    {
      _id: "60b8d2955f1b2c001f8e4e20",
      name: "David Brown",
      email: "david.brown@example.com",
      role: "HOTEL_MANAGER",
    },
    {
      _id: "60b8d2955f1b2c001f8e4e21",
      name: "Eve Davis",
      email: "eve.davis@example.com",
      role: "ADMIN",
    },
  ];

  const editHandler = (user: any) => {
    setIsEditing(true);
    setSelectedUser(user);
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <div>
              <CardTitle className="text-xl">Users List</CardTitle>
              <CardDescription>
                Here you can manage all your users for current property
              </CardDescription>
            </div>
            <AddNewUser />
          </div>
        </CardHeader>
        <CardContent className=" overflow-auto">
          <table className="border w-full">
            <thead className="border">
              <tr className="border">
                <th className="border px-4 py-3 text-start ">S.No</th>
                <th className="border px-4 py-3 text-start">Name</th>
                <th className="border px-4 py-3 text-start">Email</th>
                <th className="border px-4 py-3 text-start">Access</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: any, idx: number) => {
                return (
                  <tr className="border" key={idx}>
                    <td className="border px-4 py-2 text-start">{idx + 1}</td>
                    <td className="border px-4 py-2 text-start whitespace-nowrap">
                      {user?.name}
                    </td>
                    <td className="border px-4 py-2 text-start">
                      {user?.email}
                    </td>
                    <td className="border px-4 py-2 text-start">
                      {user?.role}
                    </td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <Button size="sm" onClick={() => editHandler(user)}>
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
          title="Edit User"
          open={isEditing}
          description="Fill the form to edit user details"
          setOpen={() => setIsEditing(false)}
        >
          <AccessForm isEditing={isEditing} user={selectedUser} />
        </Modal>
      )}
    </div>
  );
};

export default UsersListPage;
