import { Footer } from "./Footer";
import send from "../Functions/Send";
import { ResultTable } from "./ResultTable";
import { InputUser } from "./InputUser";
import { StyledHeader } from "../Styled Components/StyledHeader";

export function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <h1 className="text-4xl">Note Taking App</h1>
        <InputUser send={send} />
      </div>
      <div className="table-container">
        <ResultTable />
        <div className="export-part w-full flex justify-start">
          <button
            id="export-btn"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3 hidden"
          >
            Export
          </button>
        </div>
      </div>
      <Footer />
    </StyledHeader>
  );
}
