// import React, { useEffect, useState } from 'react';
// import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
// import { Avatar, Button, TextField, Grid, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, selectUser } from '../features/userSlice';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import axiosInstance from './axiosInstance';
// function Addusersfromfab() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [nameError, setNameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const navigate = useNavigate();
//     const user = useSelector(selectUser);
//     const accessToken = user ? user.accessToken : null;

//     useEffect(() => {
//         // if (accessToken) {
//         //     navigate("/users")
//         // }
//     }, [accessToken, navigate]);
//     const onChangeName = (e) => {
//         setName(e.target.value);
//         setNameError("");
//         if (!/^[a-zA-Z]+$/.test(e.target.value)) {
//             setNameError("Please Enter Valid Name");
//         }
//     };
//     const onChangeEmail = (e) => {
//         setEmail(e.target.value);
//         setEmailError("");
//         if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
//             setEmailError("Please Enter Valid Email");
//         }
//     };
//     const onChangePassword = (e) => {
//         setPassword(e.target.value);
//         setPasswordError("");
//         if (e.target.value.length < 6) {
//             setPasswordError("Password must be 6 characters");
//         }
//     };
//     const dispatch = useDispatch();
//     const handleSubmit = async (e) => {
//         debugger
//         e.preventDefault();
//         let isError = false;
//         if (!email) {
//             setEmailError("Please Enter Email Address");
//             isError = true;
//         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
//             setEmailError("Please Enter Valid Email");
//             isError = true;
//         }
//         if (!name) {
//             setNameError("Please Enter Name");
//             isError = true;
//         } else if (!/^[a-zA-Z]+$/.test(name)) {
//             setNameError("Please Enter Valid Name");
//             isError = true;
//         }
//         if (!password) {
//             setPasswordError("Please Enter Password");
//             isError = true;
//         } else if (password.length < 6) {
//             setPasswordError("Password must be 6 characters");
//             isError = true;
//         }

//         if (!isError) {
//              // const formData = new FormData();
//             // formData.append("name", name);
//             // formData.append("email", email);
//             // formData.append("password", password);
//             const addUser2 = { name,email,password };

//             try {
//                 const response = await axiosInstance.post(`/nm`, addUser2, {
//                     headers: {
//                         // 'Content-Type': 'multipart/form-data'
//                         'Content-Type': 'application/json',

//                     }
//                 });

//                 if (response.status === 201) {
//                     const result = response.data;
//                     setName("");
//                     setEmail("");
//                     setPassword("");
//                     const user = { name, email };
//                     dispatch(login({ user }));
//                     // toast.success("Sign up successful");
//                     navigate("/users");
//                 } else {
//                     const errorData = response.data;
//                     if (errorData.message === "Email already in use") {
//                         setEmailError(errorData.message);
//                     } else {
//                         toast.error(errorData.message || "Failed to sign up. Please try again.");
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error submitting form:", error);
//                 toast.error("Failed to sign up. Please try again.");
//             }
//         }
//     };
//     return (
//         <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
//             <Grid item xs={12} sm={8} md={6} lg={4}>
//                 <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//                     <form onSubmit={handleSubmit}>
//                         <Grid container direction="column" alignItems="center">
//                             <Avatar style={{ backgroundColor: "grey", margin: "20px" }}>
//                                 <PersonAddAltTwoToneIcon />
//                             </Avatar>
//                             <Typography variant="h4" style={{ color: "blue", marginBottom: "20px" }}>Add User</Typography>
//                         </Grid>
//                         <Grid container spacing={2}>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     label="Name"
//                                     variant="outlined"
//                                     placeholder="Enter Name"
//                                     value={name}
//                                     onChange={onChangeName}
//                                     fullWidth
//                                     error={!!nameError}
//                                     helperText={nameError}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="text"
//                                     id="email"
//                                     name="email"
//                                     label="Email"
//                                     variant="outlined"
//                                     placeholder="Enter Email"
//                                     value={email}
//                                     onChange={onChangeEmail}
//                                     fullWidth
//                                     error={!!emailError}
//                                     helperText={emailError}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <TextField
//                                     type="password"
//                                     id="password"
//                                     name="password"
//                                     label="Password"
//                                     variant="outlined"
//                                     placeholder="Enter Password"
//                                     value={password}
//                                     onChange={onChangePassword}
//                                     fullWidth
//                                     error={!!passwordError}
//                                     helperText={passwordError}
//                                 />
//                             </Grid>
//                             <Grid item xs={12}>
//                                 <Button
//                                     type="submit"
//                                     color="primary"
//                                     variant="contained"
//                                     fullWidth
//                                     style={{ marginTop: "10px", marginBottom: "15px" }}
//                                 >
//                                     Submit
//                                 </Button>
//                             </Grid>
//                         </Grid>
                       
//                     </form>
//                 </div>
//                 <ToastContainer />
//             </Grid>
//         </Grid>
//     )
// }

// export default Addusersfromfab
import React, { useEffect, useState } from 'react';
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import { Avatar, Button, TextField, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from './axiosInstance';

function Addusersfromfab() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    // const accessToken = user ? user.accessToken : null;

    const onChangeName = (e) => {
        setName(e.target.value);
        setNameError("");
        if (!/^[a-zA-Z]+$/.test(e.target.value)) {
            setNameError("Please Enter Valid Name");
        }
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        setEmailError("");
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            setEmailError("Please Enter Valid Email");
        }
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setPasswordError("");
        if (e.target.value.length < 6) {
            setPasswordError("Password must be 6 characters");
        }
    };
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let isError = false;
        if (!email) {
            setEmailError("Please Enter Email Address");
            isError = true;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError("Please Enter Valid Email");
            isError = true;
        }
        if (!name) {
            setNameError("Please Enter Name");
            isError = true;
        } else if (!/^[a-zA-Z]+$/.test(name)) {
            setNameError("Please Enter Valid Name");
            isError = true;
        }
        if (!password) {
            setPasswordError("Please Enter Password");
            isError = true;
        } else if (password.length < 6) {
            setPasswordError("Password must be 6 characters");
            isError = true;
        }

        if (!isError) {
            const addUser2 = { name, email, password };

            try {
                const response = await axiosInstance.post(`/nm`, addUser2, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.status === 201) {
                    const result = response.data;
                    setName("");
                    setEmail("");
                    setPassword("");
                    // Only update the Redux state if the user is adding another user
                    // const user = { name, email };
                    // dispatch(login({ user }));
                    toast.success("User added successfully");
                    navigate("/users");
                } else {
                    const errorData = response.data;
                    if (errorData.message === "Email already in use") {
                        setEmailError(errorData.message);
                    } else {
                        toast.error(errorData.message || "Failed to add user. Please try again.");
                    }
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error("Failed to add user. Please try again.");
            }
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" alignItems="center">
                            <Avatar style={{ backgroundColor: "grey", margin: "20px" }}>
                                <PersonAddAltTwoToneIcon />
                            </Avatar>
                            <Typography variant="h4" style={{ color: "blue", marginBottom: "20px" }}>Add User</Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    id="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={onChangeName}
                                    fullWidth
                                    error={!!nameError}
                                    helperText={nameError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="text"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    fullWidth
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    variant="outlined"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={onChangePassword}
                                    fullWidth
                                    error={!!passwordError}
                                    helperText={passwordError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                    fullWidth
                                    style={{ marginTop: "10px", marginBottom: "15px" }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <ToastContainer />
            </Grid>
        </Grid>
    )
}

export default Addusersfromfab;