import React, { useState, useEffect } from "react";
import "./Add.css";
import { Button } from 'reactstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";




function Add() {
    const [arr, setArr] = useState([])
    const [company, setCompany] = useState("")
    const [contact, setContact] = useState("")
    const [country, setCountry] = useState("")
    const [title, setTitle] = useState("")
    const [street, setStreet] = useState("")
    const [region, setRegion] = useState("")
    const [phone, setPhone] = useState("")
    const [postal, setPostal] = useState("")
    const handlechange1 = (e) => {
      e.preventDefault()
      setCompany(e.target.value)
    }
    const handlechange2 = (e) => {
      e.preventDefault()
      setContact(e.target.value)
    }
    const handlechange3 = (e) => {
      e.preventDefault()
      setCountry(e.target.value)
    }
    const handlechange4 = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
      }
      const handlechange5 = (e) => {
        e.preventDefault()
        setStreet(e.target.value)
      }
      const handlechange6 = (e) => {
        e.preventDefault()
        setRegion(e.target.value)
      }
      const handlechange7 = (e) => {
        e.preventDefault()
        setPhone(e.target.value)
      }
      const handlechange8 = (e) => {
        e.preventDefault()
        setPostal(e.target.value)
      }

    const handlesubmit = (e) => {
      e.preventDefault()
      if (company && contact && country && title && country && street && region && phone && postal) {
        const newarr = {
          companyName: company,
          contactName: contact,
          contactitle:title,
          address:{
            country: country,
          street:street,
          region:region,
          phone:phone,
          postal:postal,
          }
        }
        console.log(newarr);

        fetch("https://northwind.vercel.app/api/suppliers",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newarr)
        })
        .then(res=>console.log(res))
      } else {
        alert("Enter All Inputs")
      }
      setCompany("")
      setContact("")
      setCountry("")
      setTitle("")
      setStreet("")
      setPhone("")
      setPostal("")
      setRegion("")

    }
    
    return (
      <div className="App">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" id="linkli">
              <Link to={'/'} id="link">View All</Link> 
              </li>
              <li class="nav-item">
              <a class="nav-link" >Add</a>
              </li>
          <li class="nav-item">
            <a class="nav-link" >Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Contact</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button type="button" class="btn btn-light" id="lightbtn">Search</button>
        </form>
      </div>
    </div>
  </nav>
        <form onSubmit={e => handlesubmit(e)} id="form">
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Company Name"
                    value={company} onChange={handlechange1}
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Contact Name"
                    value={contact} onChange={handlechange2} 
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Country"
                    value={country} onChange={handlechange3}
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Contact Title"
                    value={title} onChange={handlechange4}
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Street Name"
                    value={street} onChange={handlechange5} 
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Region Name"
                    value={region} onChange={handlechange6}
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Phone"
                    value={phone} onChange={handlechange7}
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Postal Code"
                    value={postal} onChange={handlechange8} 
                    placeholder="Placeholder"
                    multiline
                />
            </div>
        </Box>  <div className="btndiv"><input type="submit" id='button' style={{pointer:"cursor"}} value="Add" /></div>
          </form>
      </div>
    );
  }
  
export default Add;
