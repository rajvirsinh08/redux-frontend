import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { selectUser } from 'features/userSlice';
import PrivateRoute from 'components/PrivateRoute';
import Users from 'components/Users';
// import Edituser from 'components/Edituser';
import SignIn from 'components/SignIn';
// import SignUp from './components/SignUp';
import Not_found from 'components/Not_found';
import 'App.css';
// import Addusersfromfab from 'components/Addusersfromfab';
import SignUp from 'components/SignUp';

function App() {
  const user = useSelector(selectUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<SignUp />} />
        <Route  path="/signin" element={<SignIn />} />
        <Route  path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        {/* <Route  path="/edituser/:id" element={<Edituser />} /> */}
        <Route path="*" element={<Not_found />} />
        {/* <Route path="/adduser" element={<Addusersfromfab />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
