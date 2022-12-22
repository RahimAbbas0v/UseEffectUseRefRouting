import React, { useState, useEffect } from "react";
import "./Table.css";
import { Button } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function DenseTable() {
  const [Users, fetchUsers] = useState([])
  const getData = () => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((res) => res.json())
      .then((data) => {
        fetchUsers(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  function deleteUser(id) {
    if (window.confirm("Delete the item?")) {
      fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
        method: 'DELETE',
      }).then(res => res.json())
        .then((data) => {
          console.log(data);
        })
        const timer = setTimeout(() => {
          window.location.reload(false)
        }, 1000);
      }
    }
  return (
    <>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" >View All</a>
              </li>
              <li class="nav-item" id="linkli">
                <Link to={'Add'} id="link">Add</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" >Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" >About</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button type="button" class="btn btn-light" id="lightbtn">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="tablediv">
        <TableContainer component={Paper} id="table">
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead id="tablehead">
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell align="center">Company Name</StyledTableCell>
                <StyledTableCell align="center">Contact Name</StyledTableCell>
                <StyledTableCell align="center">Country</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((item, i) => (
                <StyledTableRow >
                  <StyledTableCell align="center">{item.id}</StyledTableCell>
                  <StyledTableCell align="center">{item.companyName}</StyledTableCell>
                  <StyledTableCell align="center">{item.contactName}</StyledTableCell>
                  <StyledTableCell align="center">{item.address?.country}</StyledTableCell>
                  <StyledTableCell align="center"><button id="deletebtn" onClick={() => deleteUser(item.id)}>Delete</button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer></div>
    </>
  )
}
