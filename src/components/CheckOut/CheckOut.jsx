import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOutCourse = useLoaderData();
  
  return (
    <div className="d-flex justify-content-center my-4">
      <div>
        <h2>Congratulations!!!</h2>
        <h4>You successfully enrolled {checkOutCourse.courseName} course</h4>
      </div>
    </div>
  );
};

export default CheckOut;
