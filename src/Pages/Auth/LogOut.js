import { LOGOUT } from "../../Api/Api";
import { Axios } from "../../Api/axios";

export default function Logout() {
  //cookie

  async function handleLogout() {
    try {
      const res = await Axios.get(`/${LOGOUT}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return <button onClick={handleLogout}>Logout</button>;
}
