import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [dataStatus, setDataStatus] = useState({ loading: true, error: false });
  const [item, setItem] = useState(initialValue);
  const [sincronizedItem, setSincronizedItem] = useState(true);

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
        setItem(parsedItem);
      } catch (error) {
        setDataStatus({ ...dataStatus, error: true });
      } finally {
        setDataStatus({ ...dataStatus, loading: false });
        setSincronizedItem(true);
      }
    }, 5000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setDataStatus({ ...dataStatus, error: true });
    }
  };

  const sincronizeItem = () => {
    setDataStatus({ ...dataStatus, loading: true });
    setSincronizedItem(false);
  };

  return { item, saveItem, dataStatus, sincronizeItem };
}
