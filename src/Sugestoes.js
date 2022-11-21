function Sugestao(props) {

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div>{props.username}</div>
                    <div>{props.follow}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );

}

export default function Sugestoes() {
    const sugestoes = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            username: "bad.vibes.memes",
            follow: "Segue você"
        },
        {
            img: "assets/img/chibirdart.svg",
            username: "chibirdart",
            follow: "Segue você"
        },
        {
            img: "assets/img/razoesparaacreditar.svg",
            username: "razoesparaacreditar",
            follow: "Novo no Instagram"
        },
        {
            img: "assets/img/adorable_animals.svg",
            username: "adorable_animals",
            follow: "Segue você"
        },
        {
            img: "assets/img/smallcutecats.svg",
            username: "smallcutecats",
            follow: "Segue você"
        }

    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao) => <Sugestao img={sugestao.img} username={sugestao.username} follow={sugestao.follow} />)}
        </div>

    );
}