import {useEffect, useState} from "react";
import type {Item} from "../types/Item.ts";
import ItemView from "./ItemView";
import {ItemListDiv} from "./Styles.tsx";

export default function ItemList() {

    const [items, setItems] = useState<Item[]>([])
    const [rarity, setRarity] = useState<string>("common")

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://riskofrain2api.herokuapp.com/api/${rarity}Items`);
            const jsonRes = await res.json();

            setItems(jsonRes);
        }

        fetchData()
            .then(() => console.log("yay"))
            .catch(e => console.error(e));

    }, [items.length, rarity]);

    return (
        <>
            <ItemListDiv>
                {
                    items.map((item) =>
                        <ItemView item={item}/>
                    )
                }
            </ItemListDiv>
        </>
    )
}