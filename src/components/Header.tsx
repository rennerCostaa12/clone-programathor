import React from "react";
import imageLogo from '../assets/logo-programathor.png'
import '../css/header.css'
import { Outlet, Link } from 'react-router-dom';
import ButtonDropdown from "./ButtonDropdown";
import "../css/responsive.css";

export default function Header() {
    return (
        <nav className="container-nav">
            <div className="logo">
                <Link to="/"><img src={imageLogo} alt="imagem da logo" /></Link>
            </div>

            <ul>
                <li><Link to="/vagas" style={{ color: "#32B796" }}>VER VAGAS</Link></li>
                <li><Link to="/empresas">SOU EMPRESA</Link></li>
                <li><a href="#">LOGIN</a></li>

                <div className="btn-cadastrar">
                    <button>CADASTRAR-SE</button>
                </div>
            </ul>

            {/*BUTTON NAV MOBILE*/}
            <ButtonDropdown />
            <Outlet />
        </nav>
    )
}