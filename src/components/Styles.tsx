import {styled} from "styled-components";

export const ItemListDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 25%);
    place-content: center;
    row-gap: 20px;
    column-gap: 20px;
    margin: auto;
`;

export const ItemDiv = styled.div`
    text-align: center;
    background-color: blue;
    border: solid 2px red;
    padding: 10px;
`;