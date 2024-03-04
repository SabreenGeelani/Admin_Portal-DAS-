export default function Input({ id, type, value = "" }) {
  return (
    <input
      type={type}
      id={id}
      required
      className={
        value
          ? "border-gray-600"
          : "outline-none border border-[#DFE5EF] rounded-md p-2.5 mb-6 hover:bg-[#F7FCF8] hover:border-[#EBF0EB] focus:border focus:border-[#1CB02A] focus:shadow-3xl focus:shadow-[#1CB02A]  disabled:bg-[#A5B0A6] disabled:border-[#98B29A]"
      }
    />
  );
}
