import { useState } from "react"


const FormulaireExpo = props => {
    // const { postData } = props
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [field, setField] = useState("")
    const [image, setImage] = useState("")
    const [color, setColor] = useState("")


    const onSubmitForm = event => {
        event.preventDefault()
        console.log("Formulaire soumis:", name)
        fetch("http://localhost:3000/expos", {
            method: "POST",
            "Content-Type": "application/json",
            body: JSON.stringify({
                name: name,
                class: field,
                about: about,
                email: email,
                img: image,
                color: color

            })
        })
    }

    return (
        <form onSubmit={onSubmitForm}>
            <label>Nom</label>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type='text' />
            <label>email</label>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='text' />
            <label>Discipline</label>
            <input
                value={field}
                onChange={e => setField(e.target.value)}
                type='text' />
            <label>Description</label>
            <input
                value={about}
                onChange={e => setAbout(e.target.value)}
                type='text' />
            <label>Image</label>
            <input
                value={image}
                onChange={e => setImage(e.target.value)}
                type='text' />
            <label>Couleur</label>
            <input
                value={color}
                onChange={e => setColor(e.target.value)}
                type='file' />
            <button>Submit</button>
            {user.name.length > 2 ? null : (
                <span
                    style={{ fontSize: ".675rem", color: "red", display: "block" }}
                >
                    Ce champs contient au moins de 3 caractères
                </span>
            )}
        </form>
    )
}

export default FormulaireExpo