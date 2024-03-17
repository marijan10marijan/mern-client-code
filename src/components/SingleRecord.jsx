import { Link } from "react-router-dom";

export const SingleRecord = ({ record, deleteRecord }) => (
  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
    <td className="p-2 sm:p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-purple-500 font-semibold">
      {record.name}
    </td>
    <td className="p-2 sm:p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {record.position}
    </td>
    <td className="p-2 sm:p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {record.gender}
    </td>
    <td className="p-2 sm:p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      {record.level}
    </td>
    <td className="p-2 sm:p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
      <div className="flex gap-1 sm:gap-2">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background  text-white  bg-gradient-to-r from-blue-200 to-purple-300 bg-background hover:bg-purple-400 rounded-md  h-9 px-2 sm:px-3"
          to={`/edit/${record._id}`}
        >
          Edit
        </Link>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background  text-white  bg-gradient-to-r from-blue-200 to-purple-300 bg-background hover:bg-purple-400 rounded-md  hover:text-accent-foreground h-9 px-2 sm:px-3"
          color="red"
          type="button"
          onClick={() => {
            deleteRecord(record._id);
          }}
        >
          Delete
        </button>
      </div>
    </td>
  </tr>
);
