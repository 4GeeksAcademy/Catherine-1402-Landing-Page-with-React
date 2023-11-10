import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import CardList from "./card-list";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100 m-0">
			<Navbar></Navbar>
			<HeroSection></HeroSection>
			<CardList></CardList>
			<Footer></Footer>
		</div>
	);
};

export default Home;
