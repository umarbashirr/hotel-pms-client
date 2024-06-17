import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import TextInput from "@/components/TextInput";

const propertyFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Property name should be minimum 02 character(s)" }),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  hotelLocality: z.string().optional(),
  hotelCity: z.string().optional(),
  hotelState: z.string().optional(),
  hotelCountry: z.string().optional(),
  hotelZipcode: z.string().optional(),
  hotelWebsite: z.string().optional(),
  hotelMapURL: z.string().optional(),
  hotelOwnerName: z.string().optional(),
  hotelOwnerEmail: z.string().optional(),
  hotelOwnerPhone: z.string().optional(),
});

interface PropertyFormProps {
  isEditing: boolean;
}

const PropertyForm = ({ isEditing }: PropertyFormProps) => {
  const form = useForm<z.infer<typeof propertyFormSchema>>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      hotelLocality: "",
      hotelCity: "",
      hotelState: "",
      hotelCountry: "",
      hotelZipcode: "",
      hotelWebsite: "",
      hotelMapURL: "",
      hotelOwnerName: "",
      hotelOwnerEmail: "",
      hotelOwnerPhone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof propertyFormSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-20 grid grid-cols-1 items-start"
        >
          <div className="relative grid grid-cols-2 gap-4">
            <TextInput
              name="name"
              control={form.control}
              label="Hotel Name"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="email"
              control={form.control}
              label="Hotel email"
              type="email"
              disabled={!isEditing}
            />
            <TextInput
              name="phone"
              control={form.control}
              label="Hotel Phone Number"
              type="tel"
              disabled={!isEditing}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              name="hotelLocality"
              control={form.control}
              label="Hotel Locality"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelCity"
              control={form.control}
              label="Hotel City"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelState"
              control={form.control}
              label="Hotel State"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelCountry"
              control={form.control}
              label="Hotel Country"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelZipcode"
              control={form.control}
              label="Hotel Zipcode"
              type="text"
              disabled={!isEditing}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              name="hotelOwnerName"
              control={form.control}
              label="Owner Name"
              type="text"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelOwnerEmail"
              control={form.control}
              label="Owner Email"
              type="email"
              disabled={!isEditing}
            />
            <TextInput
              name="hotelOwnerPhone"
              control={form.control}
              label="Owner Phone No."
              type="tel"
              disabled={!isEditing}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PropertyForm;
