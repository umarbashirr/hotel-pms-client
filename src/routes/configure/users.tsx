import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UsersListPage = () => {
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

  const editHandler = (id: string) => {
    console.log(id);
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
            <div>
              <Button>Add New User</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
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
                  <tr className="border">
                    <td className="border px-4 py-2 text-start">{idx + 1}</td>
                    <td className="border px-4 py-2 text-start">
                      {user?.name}
                    </td>
                    <td className="border px-4 py-2 text-start">
                      {user?.email}
                    </td>
                    <td className="border px-4 py-2 text-start">
                      {user?.role}
                    </td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <Button size="sm" onClick={() => editHandler(user?._id)}>
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
    </div>
  );
};

export default UsersListPage;
