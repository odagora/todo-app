import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";

const ChangeAlert = ({ show, toggleShow }) => {
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

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
