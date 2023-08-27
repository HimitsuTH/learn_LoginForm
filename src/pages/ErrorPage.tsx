/* eslint-disable prefer-const */
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage : string;
  
  errorMessage = isRouteErrorResponse(error)
    ? error.error?.message || error.statusText
    : error instanceof Error
    ? error.message
    : typeof error === "string"
    ? error
    : "Unknown error";
  //control error when path not found.

  console.log(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};
