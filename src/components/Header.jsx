export default function Header({ msg }) {
  return (
    <div className=" border h-20 px-6 flex items-center text-2xl text-gray-900 font-semibold shadow">
      {msg}
    </div>
  );
}
