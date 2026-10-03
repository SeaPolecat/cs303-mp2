import type {Item} from "../types/Item.ts";
import {ItemDiv, ItemImg, StyledH2, StyledH4, StyledP} from "./Styles.tsx";


export default function ItemView({item, rarity}: {item: Item, rarity: string}) {
    return (
        <>
            {/* passing props to conditionally determine styles. */}
            {/* found here: https://styled-components.com/docs/basics#passed-props */}
            <ItemDiv $rarity={rarity}>
                <StyledH2>{item.itemName}</StyledH2>
                <StyledH4><em>{item.rarity} Item</em></StyledH4>
                <ItemImg src={item.itemImage} alt={item.itemName}/>
                <StyledP>{item.description}</StyledP>
            </ItemDiv>
        </>
    )
}