import { useState } from "react";

export default function useLocalStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {

    try {

      const saved = localStorage.getItem(key);

      if (saved === null || saved === "undefined") {
        return initialValue;
      }

      return JSON.parse(saved);

    } catch {

      return initialValue;

    }

  });

  function setValue(value) {

    const valueToStore =
      value instanceof Function
        ? value(storedValue)
        : value;

    setStoredValue(valueToStore);

    localStorage.setItem(
      key,
      JSON.stringify(valueToStore)
    );

  }

  return [storedValue, setValue];

}