import { useState, useRef } from "react";



export default function MileStone3() {

    console.count("Rendering...")


    //input non controllati name, specializzazione, anni di specializzazione 
    const name = useRef()
    const spec = useRef()
    const years = useRef(0)


    //input controllati userName, Password, Description 
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
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

    let haveLetters = false;
    let haveNumbers = false;
    for (let j = 0; j < password.length; j++) {
        if (letters.includes(password[j])) {
            haveLetters = true;
        }
        if (numbers.includes(password[j])) {
            haveNumbers = true
        }
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (name.current.value.trim() === "") {
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
        if (!haveLetters) {
            alert("La password deve includere almeno una lettera !")
            return
        }
        if (!haveNumbers) {
            alert("la password deve inlcudere almeno un numero")
            return
        }

        if (spec.current.value.trim() === "") {
            alert("seleziona una specializzazione !")
            return
        }
        if (years.current.value <= 0) {
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
            <h1 className="title">MILE STONE 3</h1>

            <form
                onSubmit={handleSubmit}
                className="form-stone1">

                {/* INPUT PER IL NOME COMPLETO */}
                <input
                    ref={name}
                    type="text" placeholder="Nome Completo" />


                {/* INPUT USERNAME */}
                <input
                    minLength={6}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text" placeholder="User Name" />

                <p className={userName.trim() === "" || userName.includes(" ") || userName.length < 6 || userValid ? "noValid" : "valid"}>
                    {userName.trim() === "" || userName.includes(" ") || userName.length < 6 || userValid ? "User Name non valido" : "User Name Valido"}
                </p>

                {/* INPUT PASSWORD */}
                <input
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" placeholder="Password" />
                <p
                    className={password.length < 8 || !haveLetters || !haveNumbers ? "noValid" : "valid"}>
                    {password.length < 8 || !haveLetters || !haveNumbers ? "password non valida" : "password valida"}
                </p>


                {/* SELECT PER LA SPECIALIZZAZIONE */}
                <select
                    ref={spec}
                    name="specializzazione" id="spec">
                    <option value="">Selezione Specializzazione</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                </select>


                {/* INPUT PER GLI ANNI DI SPECIALIZZAZIONE */}
                <input
                    ref={years}
                    type="number" placeholder="anni di esperienza" />



                {/* INPUT PER LA DESCRIZIONE UTENTE */}
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