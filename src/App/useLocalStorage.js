import { useReducer } from "react";
import { useEffect } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const { dataStatus, item, sincronizedItem } = state;

  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 5000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSynchronize();
  };

  return { item, saveItem, dataStatus, sincronizeItem };
}

const initialState = ({ initialValue }) => ({
  dataStatus: { error: false, loading: true },
  item: initialValue,
  sincronizedItem: true,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    dataStatus: { ...state.dataStatus, error: true },
  },
  [actionTypes.success]: {
    ...state,
    dataStatus: { loading: false, error: false },
    item: payload,
    sincronizedItem: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    dataStatus: { ...state.dataStatus, loading: true },
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
