import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        {/*   <Route path={"/hashtag/:hashtag"} element={<HashTagPage />} />
          <Route path={"/user/:id"} element={<UserPage />} /> */}
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
