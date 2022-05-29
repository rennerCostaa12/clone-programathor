import React from "react";
import imageLogo from '../assets/logo-programathor.png'
import Button from "./ButtonNormal";
import '../css/header.css'
import { Outlet, Link } from 'react-router-dom';

export default function Header(){
    return(
        <nav className="container-nav">
            <div className="logo">
                <Link to="/"><img src={imageLogo} alt="imagem da logo" /></Link>
            </div>

            <ul>
                <li><Link to="/vagas" style={{color: "#32B796"}}>VER VAGAS</Link></li>
                <li><Link to="/empresas">SOU EMPRESA</Link></li>
                <li><a href="#">LOGIN</a></li>

                <div className="btn-cadastrar">
                    <Button textButton="CADASTRAR-SE"/>
                </div> 
            </ul>
            <Outlet />
        </nav>
    )
}