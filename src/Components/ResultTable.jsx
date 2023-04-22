export function ResultTable() {
  return (
    <>
      <table className="border-collapse results-table w-screen">
        <thead className="bg-gray-300">
          <tr>
            <th
              className="border border-slate-600 p-1"
              style={{ textAlign: "center" }}
            >
              Your note <i className="fa-solid fa-pencil"></i>
            </th>
            <th
              className="border border-slate-600  p-1"
              style={{ textAlign: "center" }}
            >
              Created at <i className="fa-solid fa-calendar"></i>
            </th>
            <th
              className="border border-slate-600  p-1"
              style={{ textAlign: "center" }}
            >
              Actions <i className="fa-solid fa-screwdriver-wrench"></i>
            </th>
          </tr>
        </thead>
        <tbody id="tb" className="text-center"></tbody>
      </table>

      <div className="error hidden mb-5 flex text-center m-5">
        <label>Please put any data in the input field!</label>
      </div>
    </>
  );
}
