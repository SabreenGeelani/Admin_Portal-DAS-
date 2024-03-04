import Outlet from "../Outlet/Outlet";
import DatePicker from "sassy-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Header from "../components/Header";
export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex h-full">
      <Outlet />
      <div className="w-full mb-6">
        <Header msg="Dashboard" />
        {/* <div className=" border h-20 px-6 flex items-center text-2xl text-gray-900 font-semibold shadow">
          Dashboard
        </div> */}
        <div className="pl-6 pt-6 pb-8 pr-8">
          <div className="rounded-lg border shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">Appointments</h1>
              <div>
                <ReactDatePicker value={date} />
              </div>
              {/* <input
                type="date"
                className="border rounded-lg px-6 py-2  focus:outline-green-500"
              /> */}
            </div>
            <ul className="grid grid-cols-4 items-center gap-x-4">
              <li className="py-8 text-center rounded-lg border">
                <h1 className="text-3xl text-orange-300 font-semibold mb-1">
                  18
                </h1>
                <p className="text-sm text-gray-500">Total Appointments</p>
              </li>
              <li className="py-8  text-center rounded-lg border">
                <h1 className="text-3xl text-green-600 font-semibold mb-1">
                  60
                </h1>
                <p className="text-sm text-gray-500">Concluded</p>
              </li>
              <li className="py-8  text-center rounded-lg border">
                <h1 className="text-3xl text-gray-600 font-semibold mb-1">
                  04
                </h1>
                <p className="text-sm text-gray-500">Missed</p>
              </li>
              <li className="py-8  text-center rounded-lg border">
                <h1 className="text-3xl text-red-500 font-semibold mb-1">02</h1>
                <p className="text-sm text-gray-500">Cancelled</p>
              </li>
            </ul>
            <div className="my-6 pt-16 flex gap-x-8">
              <div>
                <h1 className="text-xl mb-4 font-semibold">
                  Upcoming Appointments
                </h1>
                <DatePicker />
                {/* <Dashboard /> */}
                {/* <Calendar className="border text-center rounded-xl p-6" /> */}
              </div>
              <div className="w-full">
                <h1 className="text-xl mb-4 font-semibold">Users</h1>
                <div className="grid grid-cols-2 gap-x-4 items-center">
                  <div className="py-8 text-center rounded-lg border">
                    <h1 className="text-3xl text-blue-300 font-semibold mb-1">
                      100
                    </h1>
                    <p className="text-sm text-gray-500">Total Students</p>
                  </div>
                  <div className="py-8 text-center rounded-lg border">
                    <h1 className="text-3xl text-orange-300 font-semibold mb-1">
                      20
                    </h1>
                    <p className="text-sm text-gray-500">Total Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
