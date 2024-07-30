import axios from "axios";
import { useEffect } from "react";
import { baseUrl, GOOGLE_CALL_BACK } from "../../Api/Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal";

export default function GoogleCallback() {
  const cookie = Cookie();
  const location = useLocation();
  useEffect(() => {
    async function GoogleCall() {
      try {
        const res = await axios.get(
          `${baseUrl}/${GOOGLE_CALL_BACK}${location.search}`
        );
        const token = res.data.access_token;
        cookie.set("e-commerce", token);
      } catch (error) {
        console.log(error);
      }
    }
    GoogleCall();
  }, []);

  return <h1>Test</h1>;
}
