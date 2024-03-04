// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export default function Button({ name, loading }) {
  return (
    <button className="bg-[#3EB049] hover:bg-[#47D054] focus:bg-[#47D054] rounded-lg p-2.5 text-white disabled:bg-[#D1DED2]">
      {loading && (
        <FontAwesomeIcon icon={faSpinner} className="mr-2 animate-spin" />
      )}
      {name}
    </button>
  );
}
