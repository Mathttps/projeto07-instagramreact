import React from "react";

export default function Usuario() {

    const [linkFoto, setLinkFoto] = React.useState("assets/img/catanacomics.svg");
    const [nome, setNome] = React.useState("Catana");

    const user = [
        {
            username: "catanacomis",
            nome: nome,
            linkFoto:linkFoto
        }
    ]


    function User(props) {
        return (
            <>
                <div>
                    <img onClick={trocarImg} src={props.linkFoto} />
                    <div className="texto">
                        <strong>{props.username}</strong>
                        {props.nome}
                    </div>
                </div>

                <div onClick={trocarNome}>
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </>
        );
    }


    function trocarImg() {
        let linkNovaFoto = prompt("digite novo link da foto");
        linkNovaFoto !== "" ? setLinkFoto(linkNovaFoto) : setLinkFoto(linkFoto)
    }


    function trocarNome() {
        const novonome = prompt("Digite o seu nome:");
    
        novonome !== "" ? setNome(novonome): setNome(nome);
    }

    return (
        <div className="usuario">
            {user.map((usuario) => <User linkFoto={usuario.linkFoto} username={usuario.username} nome={usuario.nome} />)}
        </div>
    )
}