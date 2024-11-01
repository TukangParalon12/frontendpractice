import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Signup";
// import Notes from "./pages/Notes";
import { Layout } from "antd";
import Home from "./pages/Home";
// import Profile from "./pages/Profile";
import AddNotes from "./pages/Notess/AddNotes";
// import Settings from "./pages/Settings";
import ChangePass from "./pages/IsiSettings/ChangePass";
import Language from "./components/LanguageSelector";
import Settings2 from "./pages/Cadangan/Settings2";
import Notes2 from "./pages/Notess/Notes2";
import Profile2 from "./pages/Cadangan/Profile2";
import UpdateNotes from "./pages/Notess/UpdateNotes";
import NoticeCalendar from "./pages/Calendar";
import Isi_Notes from "./pages/Notess/Isi_Notes";
import ChooseLanguage from "./pages/IsiSettings/ChooseLanguage";
import Notifications from "./pages/IsiSettings/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  // {
  //   path: "/Notes",
  //   element: <Notes />,
  // },
  // {
  //   path: "/Profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/Settings",
  //   element: <Settings />,
  // },
  {
    path: "/AddNotes",
    element: <AddNotes />,
  },
  {
    path: "/UpdateNotes",
    element: <UpdateNotes />,
  },
  {
    path: "/ChangePass",
    element: <ChangePass />,
  },
  {
    path: "/ChooseLanguage",
    element: <ChooseLanguage />,
  },
  {
    path: "/Notifications",
    element: <Notifications />,
  },
  {
    path: "/Isi_Notes/:noteId",
    element: <Isi_Notes />,
  },
  {
    path: "/Settings2",
    element: <Settings2 />,
  },
  {
    path: "/Notes2",
    element: <Notes2 />,
  },
  {
    path: "/Profile2",
    element: <Profile2 />,
  },
  {
    path: "/NoticeCalendar",
    element: <NoticeCalendar />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [],
  },
]);
