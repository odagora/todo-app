import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [dataStatus, setDataStatus] = useState({ loading: true, error: false });
  const [item, setItem] = useState(initialValue);

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
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setDataStatus({ ...dataStatus, error: true });
    }
  };

  return { item, saveItem, dataStatus };
}
