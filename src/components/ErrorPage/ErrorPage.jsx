import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      {error && (
        <div className="d-flex justify-content-center align-items-center mt-5 text-danger">
          <div>
            <h1 className="text-center">Opps!!!</h1>
            <h3 className="text-center fs-1">{error.status}</h3>
            <h1 className="text-center">{error.statusText}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
