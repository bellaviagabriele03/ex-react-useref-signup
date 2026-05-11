import { useState, useEffect } from "react";


export default function MileStone2() {


    console.count("Rendering...")



    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [spec, setSpec] = useState("");
    const [years, setYears] = useState(0);
    const [description, setDescription] = useState("");
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;



    let userValid = false;
    for (let i = 0; i < symbols.length; i++) {
        if (userName.includes(symbols[i])) {

            userValid = true;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (name.trim() === "") {
            alert("nome mancante")
            return;
        }

        if (userName.trim().length < 6) {
            alert("usern name troppo corto, almeno 6 caratteri")
            return;
        }
        if (userName.includes(" ")) {
            alert("Usern name non valido, non deve contenere spazi !")
            return;
        }
        for (let i = 0; i < symbols.length; i++) {
            if (userName.includes(symbols[i])) {
                alert("Usern Name non deve contenere caratteri speciali !")
                return;
            }
        }

        if (password.trim().length < 8) {
            alert("password troppo corta")
            return;
        }

        if (spec.trim() === "") {
            alert("seleziona una specializzazione !")
            return
        }
        if (years <= 0) {
            alert("anni di specializzazione non validi !")
            return;
        }
        if (description.trim() === "") {
            alert("descrizione non valida !")
            return;
        }
        if (description.length < 100) {
            alert("Descrizione troppo corta, inserisci almeno 100 caratteri")
            return;
        }




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





    return (
        <div className="container">
            <h1 className="title">MILE STONE 2</h1>

            <form
                onSubmit={handleSubmit}
                className="form-stone1">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="Nome Completo" />
                <input
                    minLength={6}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" placeholder="User Name" />

                {/* USERNAME PARAGRAPH */}
                <p className={userName.trim() === "" || userName.includes(" ") || userName.length < 6 || userValid ? "noValid" : "valid"}>
                    {userName.trim() === "" || userName.includes(" ") || userName.length < 6 || userValid ? "User Name non valido" : "User Name Valido"}
                </p>

                <input
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Password" />
                <p
                    className={password.length < 8 ? "noValid" : "valid"}>
                    {password.length < 8  ? "password non valida" : "password valida"}
                </p>
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
                    minLength={100}
                    maxLength={1000}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrizione Sviluppatore" />
                <p
                    className={description.length < 100 || description.length > 1000 ? "noValid" : "valid"}>
                    {description.length < 100 || description.trim() === "" || description.length > 1000 ? "Descrizione non valida" : "Descrizione valida"}
                </p>
                <button type="submit">INVIA</button>
            </form>

        </div>
    )
}