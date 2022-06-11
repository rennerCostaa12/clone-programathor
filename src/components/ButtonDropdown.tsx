import { Dropdown } from "react-bootstrap";
import "../css/ButtonDropdown.css";
import "../css/responsive.css";
import { Link } from "react-router-dom";

export default function ButtonDropdown() {
    return (
        <Dropdown>
            <Dropdown.Toggle >
                <i className="fas fa-bars"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Link to="/vagas">
                    <Dropdown.Item href="vagas">VER VAGAS</Dropdown.Item>
                </Link>
                <Dropdown.Item>LOGIN COMO CANDIDATO</Dropdown.Item>
                <Dropdown.Divider />
                <Link to="/empresas">
                    <Dropdown.Item href="empresa">SOU EMPRESA</Dropdown.Item>
                </Link>
                <Dropdown.Item>LOGIN COMO EMPRESA</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}