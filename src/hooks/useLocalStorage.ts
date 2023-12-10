import { useEffect, useState } from "react";
//🤔何これ T | (() => T)
export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    //🤔何これjsonValue != null？ return initialValue？
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //   🤔 なんでここで配列を返しているのかわからない
  return [value, setValue];
}
