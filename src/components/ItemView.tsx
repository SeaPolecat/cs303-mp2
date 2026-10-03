import type {Item} from "../types/Item.ts";
import {ItemDiv} from "./Styles.tsx";


export default function ItemView({item}: {item: Item}) {
    return (
        <>
            <ItemDiv>
                <h3>{item.itemName}</h3>
                <h4>{item.rarity}</h4>
                <img src={item.itemImage} alt={item.itemName}/>
                <p>{item.description}</p>
            </ItemDiv>
        </>
    )
}