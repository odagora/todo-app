import React, { useState } from "react";

export const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      change.key === "TODO_V1" && console.log("Hubo cambios en TODO_V1");
      setStorageChange(true);
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
};
