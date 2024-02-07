import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export default function Pagination({ onPageChange, value}) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(e) => onPageChange(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={value - 1}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
}
