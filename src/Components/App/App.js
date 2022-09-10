import { BrowserRouter, Routes, Route } from "react-router-dom";
import CredentialScreen from "../Pages/Credentials/CredentialsScreen";
import InfoRecordScreen from "../Pages/InfosRecord/InfosRecordScreen";
import LoginScreen from "../Pages/Login/LoginScreen";
import MenuScreen from "../Pages/Menu/MenuScreen";
import RegisterScreen from "../Pages/Register/RegisterScreen";

function App() {
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    //   <UpdateContext.Provider value={{ updatePage, setUpdatePage }}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginScreen />} />
        <Route path={"/sign-up"} element={<RegisterScreen />} />
        <Route path={"/menu"} element={<MenuScreen />} />
        <Route path={"/credentials"} element={<CredentialScreen />} />
        <Route path={"/credential/:id"} element={<InfoRecordScreen />} />
      </Routes>
    </BrowserRouter>
    // {
    //   /* </UpdateContext.Provider> */
    // }
    // {
    //   /* </UserContext.Provider>; */
    // }
  );
}

export default App;
