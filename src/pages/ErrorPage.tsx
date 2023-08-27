/* eslint-disable prefer-const */
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  errorMessage = isRouteErrorResponse(error)
    ? error.error?.message || error.statusText
    : error instanceof Error
    ? error.message
    : typeof error === "string"
    ? error
    : "Unknown error";
  //control error when path not found.

  //   console.log(error);

  return (
    <div id="error-page" className=" grid h-screen place-items-center">
      <div className="flex flex-col items-center text-white gap-y-2">
        <h1 className=" text-[2rem]">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
        <Link
          to={`/`}
          className=" bg-white text-black-3 w-[100px] h-[30px] flex items-center justify-center rounded-md hover:bg-slate-200 mt-5"
        >
          Back
        </Link>
      </div>
    </div>
  );
};
