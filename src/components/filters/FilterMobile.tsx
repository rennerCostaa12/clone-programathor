import { useState } from "react";
import "../../css/FilterMobile.css";
import ButtonFilter from "./ButtonFilter";

interface ButtonFilterMobileProps {
    onTipoContrato: () => void,
    onNivelExperiencia: () => void
}


export default function FilterMobile({
    onTipoContrato, onNivelExperiencia
}: ButtonFilterMobileProps) {

    const [togglePainel, setTogglePainel] = useState("0");
    const [toggleSubPainel1, setToggleSubPainel1] = useState("0");
    const [toggleSubPainel2, setToggleSubPainel2] = useState("0");


    function handleTogglePainelMain() {
        if (togglePainel == "0") {
            setTogglePainel("500px");
        } else {
            setTogglePainel("0");
        }
    }

    function handleToggleSubPanel1() {
        if (toggleSubPainel1 == "0") {
            setToggleSubPainel1("100px");
        } else {
            setToggleSubPainel1("0");
        }
    }

    function handleToggleSubPanel2() {
        if (toggleSubPainel2 == "0") {
            setToggleSubPainel2("100px");
        } else {
            setToggleSubPainel2("0");
        }
    }

    return (
        <div className="content-filter-mobile">
            <div className="painel-filter" onClick={handleTogglePainelMain}>
                <div className="filter">
                    <i className="fas fa-filter"></i>
                    <strong>Filtrar</strong>
                </div>
            </div>

            <div style={{ maxHeight: togglePainel }} className="painel-items">
                <div className="item-painel" onClick={handleToggleSubPanel1}>
                    <strong>Tipo de Contrato</strong>
                </div>
                <div style={{ maxHeight: toggleSubPainel1 }} className="items">
                    <ul>
                        <li>
                            <ButtonFilter
                                onclick={onTipoContrato}
                                nameButton="CLT"
                                styleButton="btns-filter"
                                titleButton="CLT"
                            />
                        </li>
                        <li>
                            <ButtonFilter
                                onclick={onTipoContrato}
                                nameButton="PJ"
                                styleButton='btns-filter'
                                titleButton="PJ"
                            />
                        </li>
                        <li>
                            <ButtonFilter
                                onclick={onTipoContrato}
                                nameButton="Estágio"
                                styleButton='btns-filter'
                                titleButton="Estágio"
                            />
                        </li>
                    </ul>
                </div>

                <div className="item-painel" onClick={handleToggleSubPanel2}>
                    <strong>Nível de experiência</strong>
                </div>
                <div style={{ maxHeight: toggleSubPainel2 }} className="items">
                    <ul>
                        <li>
                            <ButtonFilter
                                onclick={onNivelExperiencia}
                                nameButton="Júnior"
                                styleButton="btns-filter"
                                titleButton="Júnior"
                            />

                        </li>
                        <li>
                            <ButtonFilter
                                onclick={onNivelExperiencia}
                                nameButton="Pleno"
                                styleButton='btns-filter'
                                titleButton="Pleno"
                            />

                        </li>
                        <li>
                            <ButtonFilter
                                onclick={onNivelExperiencia}
                                nameButton="Sênior"
                                styleButton='btns-filter'
                                titleButton="Sênior"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}