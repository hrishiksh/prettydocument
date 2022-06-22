import { useState } from "react";

const PageChange = ({ totalPage, currentPageNumber, setCurrentPageNumber }) => {
  const [gotoPagenumber, setGotoPagenumber] = useState();
  const [inputActive, setInputActive] = useState(false);

  const handleNextPageBtnClick = () => {
    if (currentPageNumber < totalPage && currentPageNumber > 0) {
      setCurrentPageNumber(currentPageNumber + 1);
      setInputActive(false);
    } else {
      console.debug("Value out of scope");
    }
  };

  const handlePrevPageBtnClick = () => {
    if (currentPageNumber <= totalPage && currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 1);
      setInputActive(false);
    } else {
      console.debug("Value out of scope");
    }
  };

  const handleInputSwap = () => {
    setInputActive(!inputActive);
  };

  const handleKeyEnter = (e) => {
    if (
      e.key === "Enter" &&
      Number(gotoPagenumber) <= totalPage &&
      Number(gotoPagenumber) > 0
    ) {
      setCurrentPageNumber(Number(gotoPagenumber));
    }
  };

  return (
    <>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/2 bg-white border rounded-md flex justify-end p-2">
        <div onClick={handleInputSwap} className="justify-self-start w-full">
          {inputActive ? (
            <input
              className="w-full border rounded-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 font-Inter font-normal text-base"
              type="text"
              autoFocus={true}
              value={gotoPagenumber}
              onChange={(e) => setGotoPagenumber(e.target.value)}
              onKeyDown={handleKeyEnter}
            />
          ) : (
            <p className="h-10 px-4 py-2  border rounded-md border-slate-200 font-Inter font-normal text-base">
              {currentPageNumber}
            </p>
          )}
        </div>

        <button
          className="px-4 border rounded-sm border-slate-200 active:bg-slate-200 mx-2"
          onClick={handlePrevPageBtnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        </button>
        <button
          className="px-4 border rounded-sm border-slate-200 active:bg-slate-200"
          onClick={handleNextPageBtnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="15" y1="16" x2="19" y2="12" />
            <line x1="15" y1="8" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default PageChange;
