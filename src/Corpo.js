import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"

export default function Corpo() {
    return (
        <>
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar />
            </div>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </>
    )
}