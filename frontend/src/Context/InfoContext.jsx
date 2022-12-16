import { createContext, useState, useEffect } from "react";

export const InfoContext = createContext();
export function InfoContextProvider(props) {
  const [info, setInfo] = useState(() => {
    const infoData = JSON.parse(window.localStorage.getItem("Info"));
    return infoData || [];
  });
  useEffect(() => {
    window.localStorage.setItem("Info", JSON.stringify(info));
    console.log(info);
  }, [info]);

  return (
    <InfoContext.Provider value={[info, setInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
}
