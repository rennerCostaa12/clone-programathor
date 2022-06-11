interface ButtonFilterProps {
    nameButton: string,
    styleButton?: string,
    titleButton?: string,
    onclick: () => void
}

export default function ButtonFilter({ nameButton, onclick, styleButton, titleButton }: ButtonFilterProps) {
    return (
        <button name={titleButton} className={styleButton} onClick={onclick}>{nameButton}</button>
    )
}