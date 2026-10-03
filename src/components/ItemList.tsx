import {useEffect, useState} from "react";
import type {Item} from "../types/Item.ts";
import ItemView from "./ItemView";
import {ItemListDiv} from "./Styles.tsx";


export default function ItemList({rarity}: {rarity: string}) {

    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://riskofrain2api.herokuapp.com/api/${rarity}Items`);
            const objRes = await res.json();

            setItems(objRes);
        }

        fetchData()
            .then(() => console.log("fetched items"))
            .catch(e => console.error("ERROR: " + e));

    }, [items.length, rarity]);

    return (
        <>
            <ItemListDiv>
                {
                    items.map((item) =>
                        <ItemView item={item} rarity={rarity}/>
                    )
                }
            </ItemListDiv>
        </>
    )
}