import { Card, CardContent } from "@/components/ui/card";
import hotelImage from "../../assets/images/hotel-dummy.jpg";
import { useNavigate } from "react-router-dom";

const PropertiesListPage = () => {
  const navigate = useNavigate();

  const selectPropertyHandler = (id: string) => {
    console.log(id);

    navigate(`/properties/${id}/overview`);
  };

  return (
    <div className="p-10 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Card
          className="cursor-pointer"
          onClick={() => selectPropertyHandler("123")}
        >
          <CardContent className="p-6">
            <img
              src={hotelImage}
              alt="Hotel Image Placeholder"
              className="rounded-xl"
            />
            <div className="ml-2 mt-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold">Hotel Name</p>
                <p className="text-base text-muted-foreground">Pahalgam</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base text-muted-foreground">
                  Jammu and Kashmir
                </p>
                <p className="text-base text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertiesListPage;
