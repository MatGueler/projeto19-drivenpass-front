import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../Pages/Login/LoginScreen";
import RegisterScreen from "../Pages/Register/RegisterScreen";

function App() {
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    //   <UpdateContext.Provider value={{ updatePage, setUpdatePage }}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginScreen />} />
        <Route path={"/sign-up"} element={<RegisterScreen />} />
        {/*   <Route path={"/timeline"} element={<TimeLine />} />
          <Route path={"/hashtag/:hashtag"} element={<HashTagPage />} />
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
