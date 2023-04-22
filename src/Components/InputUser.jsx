/* eslint-disable react/prop-types */
export function InputUser({ send }) {
  return (
    <>
      <div className="container">
        <div className="input-button">
          <input
            id="note-input"
            className="bg-white focus:outline-none focus:shadow-outline placeholder-black rounded-lg py-2 px-4 block w-1/3 appearance-none leading-normal"
            type="text"
            placeholder="What do you want to do today?"
          />
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg ml-3"
            onClick={send}
          >
            Write
          </button>
        </div>
      </div>
    </>
  );
}
