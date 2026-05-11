import { useState } from "react"


export default function MileStone1() {

    console.count("Rendering...")



    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [spec, setSpec] = useState("");
    const [years, setYears] = useState(0);
    const [description, setDescription] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        //controllo super generico in un unico IF, per mancanza di voglia di scrivere un controllo personalizzato per ogni campo !!!
        if (name === "" || userName === "" || password === "" || spec === "" || years <= 0 || description === "") {
            alert("compila tutti i campi !")
        } else {
            const result = {
                name,
                userName,
                password,
                spec,
                years,
                description
            }
            console.log(result);
        }
    }


    return (
        <div className="container">
            <h1 className="title">MILE STONE 1</h1>
            <form
                onSubmit={handleSubmit}
                className="form-stone1">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Nome Completo" />
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" placeholder="User Name" />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Password" />

                <select
                    value={spec}
                    onChange={(e) => setSpec(e.target.value)}
                    name="specializzazione" id="spec">
                    <option value="">Selezione Specializzazione</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                </select>

                <input
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    type="number" placeholder="anni di esperienza" />

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrizione Sviluppatore" />
                <button type="submit">INVIA</button>
            </form>
        </div>

    )
}