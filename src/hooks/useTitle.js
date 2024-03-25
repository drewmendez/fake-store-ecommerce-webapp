import { useLocation } from "react-router-dom";

export function useTitle() {
  const location = useLocation();
  const url = location.pathname;
  let text = "";

  if (url[5] === undefined) {
    text = "all";
  } else {
    for (let i = 6; i < url.length; i++) {
      if (url[i] === "%") {
        break;
      }
      text += url[i];
    }
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}
