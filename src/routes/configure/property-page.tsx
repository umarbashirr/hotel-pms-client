import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import PropertyForm from "./_components/PropertyForm";

const PropertyPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const updatePropertyHandler = () => {};

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-end justify-between">
            <div>
              <CardTitle className="text-xl">Manage Property</CardTitle>
              <CardDescription>
                Fill out the below form to update your property details
              </CardDescription>
            </div>
            <div>
              {isEditing ? (
                <Button onClick={updatePropertyHandler}>Update now</Button>
              ) : (
                <Button onClick={() => setIsEditing(true)}>
                  Edit property
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <PropertyForm isEditing={isEditing} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyPage;
