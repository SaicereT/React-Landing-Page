import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const navBarItems = [
	{href: "#", text: "Home",},
	{href: "#", text: "About",},
	{href: "#", text: "Services",  active: true},
	{href: "#", text: "Contact",},
]

const cardItems = [
	{img:'https://picsum.photos/seed/214/300/200', title:'Renewed Card Title', text: 'If you see this it means it worked, you mad man you made it happen, you should be proud!', href:'#', btnText: "We're going places!"},
	{img:'https://picsum.photos/seed/357/300/200', title:'Renewed Card Title', text: 'If you see this it means it worked, you mad man you made it happen, you should be proud!', href:'#', btnText: "We're going places!"},
	{img:'https://picsum.photos/seed/8976/300/200', title:'Renewed Card Title', text: 'If you see this it means it worked, you mad man you made it happen, you should be proud!', href:'#', btnText: "We're going places!"},
	{img:'https://picsum.photos/seed/147/300/200', title:'Renewed Card Title', text: 'If you see this it means it worked, you mad man you made it happen, you should be proud!', href:'#', btnText: "We're going places!"},
]

const Home = () => {
	return (
		<div className="text-center">
			<Navbar items={navBarItems} />
			<div className="container">
			<Jumbotron />
			<div className="d-flex flex-column align-items-center flex-lg-row justify-content-between">
				{cardItems.map (item =>{
					return (
					<Cards title={item.title} img={item.img} text={item.text} href={item.href} btnText={item.btnText} />)
				})}
			</div>
			
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
