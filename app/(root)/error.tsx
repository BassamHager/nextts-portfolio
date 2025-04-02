import { NextPageContext } from "next";
import { useEffect } from "react";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  useEffect(() => {
    console.error(`Error ${statusCode || "Unknown"} occurred.`);
  }, [statusCode]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        {statusCode ? `Error ${statusCode}` : "An error occurred"}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {statusCode === 404
          ? "The page you are looking for does not exist."
          : "Something went wrong. Please try again later."}
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go Home
      </a>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;
  return { statusCode };
};

export default ErrorPage;
