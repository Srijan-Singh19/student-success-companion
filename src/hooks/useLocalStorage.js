import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const saved = localStorage.getItem(key);

    return saved ? JSON.parse(saved) : initialValue;
  });

  function setValue(value) {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}