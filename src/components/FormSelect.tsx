interface FormSelectProps{
    onchange: () => void,
    valueForm: string,
}

export default function FormSelect({ onchange, valueForm }: FormSelectProps) {
    return (
        <>
            {console.log(onchange)}
            <form>
                <select name="skills_vagas" onChange={onchange}  value={valueForm}>
                    <option value="programadores">Todos os skills</option>
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="php">PHP</option>
                    <option value="nodejs">NodeJs</option>
                    <option value="reactjs">ReactJS</option>
                    <option value="vuejs">VueJS</option>
                </select>
            </form>
        </>
    )
}