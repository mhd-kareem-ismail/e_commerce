import axios from "axios";
import { baseUrl, LOGOUT } from "../../Api/Api";
import Cookie from "cookie-universal";

export default function Logout() {
  //cookie
  const cookie = Cookie();
  const token = cookie.get("e-commerce");

  async function handleLogout() {
    try {
      const res = await axios.get(`${baseUrl}/${LOGOUT}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return <button onClick={handleLogout}>Logout</button>;
}
