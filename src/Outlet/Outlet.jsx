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

  // const Link = [
  //   {
  //     name: "Dashboard",
  //     path: "/dashboard",
  //     icon: RiHome5Line,
  //   },
  //   {
  //     name: "Ptm Management",
  //     path: "/ptm-management",
  //     icon: PiUsersLight,
  //   },
  // ];
  return (
    // <div>
    <div className="flex w-[30%]">
      <div className=" h-full border shadow">
        <div className="px-4 py-6">
          <img src="src/assets/image 2.png" alt="" className="px-4 mb-6" />
          <nav className="px-4 font-medium text-gray-700">
            <ul className="mb-6">
              <li>
                <Link
                  exact
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer bg-green-300/20  text-[#3EB049]"
                      : "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer"
                  }
                >
                  <RiHome5Line className="text-2xl" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/ptm-management"
                  className={
                    location.pathname === "/ptm-management"
                      ? "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer bg-green-300/20  text-[#3EB049]"
                      : "flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer"
                  }
                >
                  <PiUserGearLight className="text-2xl" />
                  PTM Management
                </Link>
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <CiCalendar className="text-2xl" />
                Manage Appointments
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <PiUsersLight className="text-2xl" />
                User Management
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <PiChalkboardTeacherLight className="text-2xl" />
                Class Management
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <CiLocationOn className="text-2xl" />
                Location Management
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <IoIosNotificationsOutline className="text-2xl" />
                Notifications
                {/* </Link> */}
              </li>
              <li className="flex items-center gap-x-2 px-5 py-3 rounded-lg cursor-pointer">
                {/* <Link> */}
                <CiSettings className="text-2xl" />
                Settings
                {/* </Link> */}
              </li>
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
