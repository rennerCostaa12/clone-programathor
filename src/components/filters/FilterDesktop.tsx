import ButtonFilter from "./ButtonFilter"

interface ButtonFilterDesktopProps {
    onTipoContrato: () => void,
    onNivelExperiencia: () => void,
    onHandleAllVagas: () => void
}

export default function FilterDesktop({
    onTipoContrato,
    onNivelExperiencia,
    onHandleAllVagas
}: ButtonFilterDesktopProps) {

    return (
        <div className="content-filter">
            <div className="filtrar-all">
                <h2 className="text-filter">Filtrar:</h2>
                <ButtonFilter onclick={onHandleAllVagas} nameButton="TODAS" styleButton="btns-filter" />
            </div>
            <div className="filtrar-contrato">
                <h2 className="text-filter">Tipo de contrato:</h2>
                <ButtonFilter
                    onclick={onTipoContrato}
                    nameButton="CLT" styleButton="btns-filter"
                    titleButton="CLT"
                />
                <ButtonFilter
                    onclick={onTipoContrato}
                    nameButton="PJ" styleButton='btns-filter'
                    titleButton="PJ"
                />
                <ButtonFilter
                    onclick={onTipoContrato}
                    nameButton="Estágio"
                    styleButton='btns-filter'
                    titleButton="Estágio"
                />
            </div>
            <div className="nivel-de-experiencia">
                <h2 className="text-filter">Nível de experiência</h2>
                <ButtonFilter
                    onclick={onNivelExperiencia}
                    nameButton="Júnior"
                    styleButton="btns-filter"
                    titleButton="Júnior"
                />
                <ButtonFilter
                    onclick={onNivelExperiencia}
                    nameButton="Pleno"
                    styleButton='btns-filter'
                    titleButton="Pleno"
                />
                <ButtonFilter
                    onclick={onNivelExperiencia}
                    nameButton="Sênior"
                    styleButton='btns-filter'
                    titleButton="Sênior"
                />
            </div>
        </div>
    )
}