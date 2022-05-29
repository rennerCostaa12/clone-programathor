interface ButtonFilterProps {
    nameButton: string,
    styleButton?: string,
    onclick: () => void
}

export default function ButtonFilter({nameButton, onclick, styleButton}:ButtonFilterProps) {
    return(
        <button className={styleButton} onClick={onclick}>{nameButton}</button>
    )
}