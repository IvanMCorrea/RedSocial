import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, updatePageNumber, totalPages }: any) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  let pageChange = (data: any) => {
    updatePageNumber(data.selected + 1);
  };
  const prev = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  const next = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <>
      <ReactPaginate
        className="flex rounded-md my-5 mx-auto justify-center"
        nextLabel={next}
        previousLabel={prev}
        previousClassName="relative inline-flex items-center border border-gray-300 bg-white hover:bg-gray-50 focus:z-20"
        previousLinkClassName="px-3 py-2 text-sm font-medium text-indigo-500"
        nextClassName="relative inline-flex items-center border border-gray-300 bg-white hover:bg-gray-50 focus:z-20"
        nextLinkClassName="px-3 py-2 text-sm font-medium text-indigo-500"
        breakClassName="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
        activeClassName="bg-indigo-50 text-indigo-600"
        pageClassName="relative inline-flex items-center border border-gray-300 bg-white hover:bg-gray-50 focus:z-20"
        pageLinkClassName="px-4 py-2 text-sm font-medium"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={totalPages}
        onPageChange={pageChange}
      />
    </>
  );
};

export default Pagination;
