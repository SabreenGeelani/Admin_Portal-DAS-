import { Link, useLocation } from "react-router-dom";
import { RiHome5Line } from "react-icons/ri";
import {
  PiUserGearLight,
  PiUsersLight,
  PiChalkboardTeacherLight,
} from "react-icons/pi";
import { CiCalendar, CiLocationOn, CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline, IoIosLogOut } from "react-icons/io";
export default function Outlet() {
  const location = useLocation();

  const Links = [
    {
      id: 0,
      name: "Dashboard",
      path: "/dashboard",
      icon: RiHome5Line,
    },
    {
      id: 1,
      name: "PTM Management",
      path: "/ptm-management",
      icon: PiUserGearLight,
    },
    {
      id: 2,
      name: "User Management",
      path: "/user-management",
      icon: PiUsersLight,
    },
    {
      id: 3,
      name: "Manage Appointments",
      path: "manage-appointments",
      icon: CiCalendar,
    },
    {
      id: 4,
      name: "Class Management",
      path: "/class-management",
      icon: PiChalkboardTeacherLight,
    },
    {
      id: 5,
      name: "Location Management",
      path: "/location-management",
      icon: CiLocationOn,
    },
    {
      id: 6,
      name: "Notifications",
      path: "/notifications",
      icon: IoIosNotificationsOutline,
    },
    {
      id: 7,
      name: "Settings",
      path: "/settings",
      icon: CiSettings,
    },
  ];
  return (
    // <div>
    <div className="flex w-[30%]">
      <div className=" h-full border shadow">
        <div className="px-4 py-6">
          <img src="src/assets/image 2.png" alt="" className="px-4 mb-6" />
          <nav className="px-4 font-medium text-gray-700">
            <ul className="mb-6">
              {Links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className={
                        location.pathname === link.path
                          ? "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer bg-green-300/20  text-[#3EB049]"
                          : "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer"
                      }
                    >
                      <link.icon className="text-2xl" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
              <IoIosLogOut className="text-2xl text-black" />
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
