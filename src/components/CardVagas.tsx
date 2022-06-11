import "../css/CardVaga.css";
import "../css/responsive.css";

interface CardVagasProps {
    sourceImage: string,
    nameVacancy: string,
    typeVacancy: string,
    levelVacancy: string,
    wageVacancy: number
}

export default function CardVagas({
    sourceImage, nameVacancy, typeVacancy, levelVacancy, wageVacancy

}: CardVagasProps) {
    return (
        <div className="card-content">
            <div className="content-logo">
                <img src={sourceImage} alt="logo-company" />
            </div>
            <div className="content-detail-vacancy">
                <h1 className="name-vacancy">{nameVacancy}</h1>
                <div className="content-descriptions-vacancy">
                    <span><i className="far fa-file-alt"></i>{typeVacancy}</span>
                    <span><i className="far fa-chart-bar"></i>{levelVacancy}</span>
                    <span><i className="far fa-money-bill-alt"></i>R${wageVacancy}</span>
                </div>
            </div>
        </div>
    )
}