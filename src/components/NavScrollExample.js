// Filename App.js
import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function App() {
	return (
		<div>
			<Navbar className="p-3"
					style={{ background:"lightgray"}}>
				<Navbar.Brand href="#home"
							style={{color: "green"}}>
					GeeksforGeeks
				</Navbar.Brand>
				<Navbar.Brand href="#home"
							style={{color: "green"}}>
					C++
				</Navbar.Brand>
				<Navbar.Brand href="#home"
							style={{color: "green"}}>
					GoLang
				</Navbar.Brand>
			</Navbar>
			<br />
		</div>
		)}
