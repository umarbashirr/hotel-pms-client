import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const frontdeskRoutes = [
    {
      label: "Overview",
      path: "overview",
    },
    {
      label: "Guest List",
      path: "guest-list",
    },

    {
      label: "New Reservation",
      path: "new-reservation",
    },
    {
      label: "Reports",
      path: "reports",
    },
  ];

  const navigation = frontdeskRoutes;

  return (
    <aside className="fixed top-0 left-0 w-full max-w-72 h-full bg-white border-r">
      <div className="h-16 flex items-center justify-start px-6 border-b">
        Simple PMS
      </div>
      <nav className="flex flex-col gap-2 px-3 mt-6">
        {navigation.map(
          (item: { label: string; path: string }, index: number) => {
            return (
              <Link
                to={item?.path}
                key={index}
                className={cn(
                  "flex items-center justify-start text-start gap-2 px-3 py-2 rounded-md   duration-300 ease-in-out transition-all",
                  location?.pathname?.endsWith(item?.path)
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-slate-100"
                )}
              >
                {item?.label}
              </Link>
            );
          }
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
