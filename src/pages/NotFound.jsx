import React from "react";
import PageAnimation from "../animation";

export default function NotFound() {
  return (
    <PageAnimation>
      <h1 className="text-4xl font-bold text-white text-center mt-4">
        404 Not Found
      </h1>
      <p className="text-[16px] text-white text-center mt-2">
        The page you are looking for does not exist.
      </p>
    </PageAnimation>
  );
}
