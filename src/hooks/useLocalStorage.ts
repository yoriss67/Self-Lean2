// import { useEffect, useState } from "react";
// //🤔何これ T | (() => T)
// export default function useLocalStorage<T>(key: string, initialValue: T) {
//   const [value, setValue] = useState<T>(() => {
//     const jsonValue = localStorage.getItem(key);
//     //🤔何これjsonValue != null？ return initialValue？
//     if (jsonValue != null) return JSON.parse(jsonValue);
//     return initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   //   🤔 なんでここで配列を返しているのかわからない
//   return [value, setValue];
// }


// // // https://github.com/WebDevSimplified/react-ts-shopping-cart/blob/main/src/hooks/useLocalStorage.ts
// // import { useEffect, useState } from "react"

// // export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
// //   const [value, setValue] = useState<T>(() => {
// //     const jsonValue = localStorage.getItem(key)
// //     if (jsonValue != null) return JSON.parse(jsonValue)

// //     if (typeof initialValue === "function") {
// //       return (initialValue as () => T)()
// //     } else {
// //       return initialValue
// //     }
// //   })

// //   useEffect(() => {
// //     localStorage.setItem(key, JSON.stringify(value))
// //   }, [key, value])

// //   return [value, setValue] as [typeof value, typeof setValue]
// // }



// 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
