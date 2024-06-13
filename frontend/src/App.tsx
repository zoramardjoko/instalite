import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Notifications from "./pages/Notifications";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Profile from "./pages/MyProfile";
import UserProfile from "./pages/UserProfile";
import Signup from "./pages/Signup";
import Actor from "./pages/Actor";
import Search from "./pages/Search";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/:username/home' element={<Home />} />
        <Route path='/:username/chats' element={<Chats />} />
        <Route path='/:username/notifications' element={<Notifications />} />
        <Route path='/:username/friends' element={<Friends />} />
        <Route path='/:username/profile' element={<Profile />} />
        <Route path='/:username/:activeUser/userProfile' element={<UserProfile />} />
        <Route path='/:username/settings' element={<Settings />} />
        <Route path='/:username/actors' element={<Actor />} />
        <Route path='/:username/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
