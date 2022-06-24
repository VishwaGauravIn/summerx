import ClickAwayListener from "react-click-away-listener";

export default function AlertBox({ onClose, topic, sender, desc }) {
  // Click away handle
  const handleClickAway = () => {
    onClose();
  };
  return (
    <>
      <div className="menu-modal z-40 justify-center items-center fixed w-screen h-screen left-0 top-0 custom-bg-modal transition-color duration-300 ease-in-out w-22">
        <ClickAwayListener onClickAway={handleClickAway}>
          <div
            id="mydiv"
            className="flex top-1/2 transform -translate-y-1/2 w-full z-20 fixed justify-center items-center"
          >
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="modal-maximize transform transition-all ease-in-out duration-200 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 h-max rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 m-2 fade-on-appear">
                <div
                  id="mydivheader"
                  className="flex w-full justify-end items-center relative p-2 bg-gray-200 dark:bg-gray-800 h-9 rounded-t-xl transition-color duration-300 ease-in-out"
                >
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 hover:ring-1 ring-gray-100 dark:ring-gray-700 00 p-2 py-3 px-4 absolute left-0 transform ml-2 flex justify-center items-center rounded-t-xl rounded-b-md text-base mt-3 border-2 border-gray-100 dark:border-gray-700 text-gray-400 cursor-not-allowed transition-color duration-300 ease-in-out">
                    SummerX - Alerts
                  </div>
                  <div
                    className="rounded-full w-4 h-4 bg-green-400 ml-1 cursor-pointer"
                    onClick={onClose}
                  ></div>
                  <div
                    className="rounded-full w-4 h-4 bg-yellow-400 ml-1 cursor-pointer"
                    onClick={onClose}
                  ></div>
                  <div
                    className="rounded-full w-4 h-4 bg-red-400 ml-1 cursor-pointer"
                    onClick={onClose}
                  ></div>
                </div>
                <div className="text-base sm:text-lg md:text-xl max-h-96 w-full text-gray-600 dark:text-gray-200 transition-color duration-300 ease-in-out flex flex-wrap justify-center flex-col p-4 sm:p-6">
                  {/* content */}
                  <p className="text-red-600 dark:text-red-400">
                    <b>Topic:</b>&nbsp;{topic}
                  </p>
                  <p className="">
                    <b>Sender:</b>&nbsp;
                    <span className="opacity-90">{sender}</span>
                  </p>
                  <p className="w whitespace-pre-wrap">
                    <b>Description:</b>&nbsp;
                    <span className="text-base opacity-90">{desc}</span>
                  </p>
                </div>
              </div>
            </ClickAwayListener>
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
}
