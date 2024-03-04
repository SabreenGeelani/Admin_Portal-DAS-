import Header from "../components/Header";
import Outlet from "../Outlet/Outlet";
export default function PtmManagement() {
  return (
    <div className="flex h-full">
      <Outlet />
      <div className="w-full mb-6">
        <Header msg="PTM Management" />
        <div className="pl-6 pt-6 pb-8 pr-8">
          <div className="rounded-lg border shadow-2xl">
            <div className="h-[45rem]">
              <h1 className="bg-[#EAEAEA] p-6 text-[#101828] text-xl font-medium">
                PTM creation
              </h1>
              <div className="flex gap-x-16 px-6 py-8">
                <div className="w-[30%]">
                  <h4 className="text-[#475569] text-sm mb-4 font-semibold">
                    Select PTM Date
                  </h4>
                  <select
                    className="text-gray-400 border w-full rounded-lg px-3 py-2"
                    placeholder="Select"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="w-[30%]">
                  <h4 className="text-[#475569] text-sm mb-4 font-semibold">
                    Select PTM Duration
                  </h4>
                  <input
                    type="text"
                    placeholder="Input Field"
                    className="border  w-full rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3">
                <section>
                  <h1 className="py-4 px-6 text-[#4E4E4E] bg-[#EAEAEA] border-r border-white">
                    Teachers
                  </h1>
                  <div className="py-4 px-6 border">
                    <select
                      className="text-gray-400 border w-full rounded-lg px-3 py-2"
                      placeholder="Select"
                    >
                      <option value="">Select</option>
                    </select>
                  </div>
                </section>
                <section>
                  <h1 className="py-4 px-6 text-[#4E4E4E] bg-[#EAEAEA]  border-r border-white">
                    Location
                  </h1>
                  <div className="py-4 px-6 border">
                    <select
                      className="text-gray-400 border w-full rounded-lg px-3 py-2"
                      placeholder="Select"
                    >
                      <option value="">Select</option>
                    </select>
                  </div>
                </section>
                <section>
                  <h1 className="py-4 px-6 text-[#4E4E4E] bg-[#EAEAEA]  border-r border-white">
                    Availability
                  </h1>
                  <div className="py-4 px-6 border">
                    <select
                      className="text-gray-400 border w-full rounded-lg px-3 py-2"
                      placeholder="Select"
                    >
                      <option value="">Default-Full Time</option>
                    </select>
                  </div>
                </section>
              </div>
              <div className="p-6">
                <section className="py-4 border-[3px] border-dashed border-gray-300 text-gray-300 text-center rounded-lg cursor-pointer text-lg">
                  {" "}
                  <p>+ Add More</p>
                </section>
              </div>
            </div>
            <div className="flex justify-end gap-x-4 px-6 mb-8">
              <button className="border px-6 py-2 text-[#727E95] rounded-lg">
                Reset
              </button>
              <button className="border px-6 py-2 bg-green-600 text-white rounded-lg">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
