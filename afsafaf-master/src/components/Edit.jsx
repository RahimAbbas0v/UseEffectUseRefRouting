import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Edit.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";

function View() {
    const [Users, fetchUsers] = useState([]);
    let { itemId } = useParams();
    const navigate = useNavigate();
    const getData = () => {
        fetch(`https://northwind.vercel.app/api/suppliers/${itemId}`)
            .then((res) => res.json())
            .then((data) => {
                fetchUsers(data);
            });
    };

    const edit = () => {
        fetch(`https://northwind.vercel.app/api/suppliers/${itemId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchUsers)
        })
            .then(res => console.log(res))
    }
    useEffect(() => {
        getData();
    }, []);
    const goback = () => {
        navigate("/");
    };
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
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.companyName}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.contactName}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.contactTitle}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.id}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.address?.country}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.address?.street}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.address?.postalCode}
                    />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={Users.address?.phone}
                    />
                </div>
            </form>
            <div className="btndiv">
                <button onClick={goback}>Go Back</button>< button onClick={edit}>Edit</button>
            </div>
        </div>
    );
}

export default View;
