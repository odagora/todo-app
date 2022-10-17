import React from "react";

export const EmptySearchResults = ({ searchText }) => {
  return (
    <p>
      No se encontraron resultados para <strong>"{searchText}"</strong>
    </p>
  );
};
