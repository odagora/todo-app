import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="change-alert-bg">
        <div className="change-alert-container">
          <p>
            Parece que cambiaste tus TODOs en otra pestaña o ventana del
            navegador
          </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="todo-button todo-button--add"
            onClick={() => toggleShow(false)}
          >
            Sincronizarlos!
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export { ChangeAlert };
