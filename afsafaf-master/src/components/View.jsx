import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./View.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function View() {
    const [Users, fetchUsers] = useState([]);
    let { itemId } = useParams();
    const navigate = useNavigate()
    const getData = () => {
        fetch(`https://northwind.vercel.app/api/suppliers/${itemId}`)
            .then((res) => res.json())
            .then((data) => {
                fetchUsers(data);
            });
    };

    useEffect(() => {
        getData();
    }, []);
    const goback = () => {
        navigate('/')

    }
    return (
        <div className="App">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" id="linkli">
                                <Link to={"/"} id="link">
                                    View All
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Add</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button type="button" className="btn btn-light" id="lightbtn">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <form id="form">
                <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 1, width: "40ch" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            value={Users.companyName}
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            value={Users.contactName}
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            value={Users.contactTitle}
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            value={Users.id}
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            value={Users.address?.country}
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            value={Users.address?.street}
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            value={Users.address?.postalCode}
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-read-only-input"
                            InputProps={{
                                readOnly: true,
                            }}
                            value={Users.address?.phone}
                            variant="filled"
                        />
                    </div>
                </Box>{" "}
            </form>
            <div className="btndiv">
                <button onClick={goback}>Go Back</button>
            </div>
        </div>
    );
}

export default View;
