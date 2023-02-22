import React, { useContext } from "react";
import {Button, Image, Nav, Navbar} from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import img from "../../img/marketplace.png";
import FeatherIcon from "feather-icons-react";
import {AuthContext} from "../../components/auth/authContext";

export const NavBarAdmin = () =>{
    const {dispatch} = useContext();
    const navigate = userNavigate();
    const handleLogout= () =>{
        dispatch({type: "LOGOUT"});
        navigate("/auth", {
            replace: true,
        });
    };
    return (
        <Navbar variant="dark" style={{ backgroundColor: "#232F3E", padding: "10px" }}>
            <Navbar.Brand>
                <Image className="ms-2" src={img} style={{ height: "auto", width: "40px" }}
                />{""}MarketPlace
            </Navbar.Brand>
            <Nav className="me-auto">
                <Link to={"/category"} className="nav-link">
                    Categorias
                </Link>
                <Link to={"/subcategory"} className="nav-link">
                    Subcategorias
                </Link>
                <Link to={"/contact"} className="nav-link">
                    Contacto
                </Link>
                <Link to={"/products"} className="nav-link">
                    Productos
                </Link>
            </Nav>
            <Button variant="outline-light" onClick={handleLogout}>
                <FeatherIcon icon={"log-out"} />
                Cerrar sesión 
            </Button>
        </Navbar>
    )
}
