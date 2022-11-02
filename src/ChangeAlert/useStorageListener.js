import { useState } from "react";

export const useStorageListener = (sincronize) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    change.key === "TODO_V1" && console.log("Hubo cambios en TODO_V1");
    setStorageChange(true);
  });

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
};
