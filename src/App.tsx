import ItemList from "./components/ItemList.tsx";
import {useState} from "react";
import {StyledButton, StyledH1, StyledP, StyledWrapper} from "./components/Styles.tsx";


export default function App() {

    const [rarity, setRarity] = useState<string>("common")

    return (
        <>
            <StyledWrapper>
                <StyledH1>Risk of Rain Items</StyledH1>
                <StyledP>An app to display items from the game Risk of Rain.</StyledP>

                <StyledButton onClick={() => setRarity("common")}>Common</StyledButton>
                <StyledButton onClick={() => setRarity("uncommon")}>Uncommon</StyledButton>
                <StyledButton onClick={() => setRarity("legendary")}>Legendary</StyledButton>
                <StyledButton onClick={() => setRarity("equipment")}>Equipment</StyledButton>
                <StyledButton onClick={() => setRarity("void")}>Void</StyledButton>
                <StyledButton onClick={() => setRarity("lunar")}>Lunar</StyledButton>
                <StyledButton onClick={() => setRarity("boss")}>Boss</StyledButton>
            </StyledWrapper>

            <ItemList rarity={rarity}/>
        </>
    )
}