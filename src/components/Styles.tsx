import {styled} from "styled-components";


export const StyledWrapper = styled.div`
    color: white;
    font-family: "Courier New", Arial, sans-serif;
    text-align: center;
    margin-bottom: 5vh;
`;

export const StyledH1 = styled.h1`
    font-size: calc(15px + 1vw);
`;

export const StyledH2 = styled.h2`
    font-size: calc(8px + 1vw);
`;

export const StyledH4 = styled.h4`
    font-size: calc(2px + 1vw);
`;

export const StyledP = styled.p`
    font-size: calc(1px + 1vw);
`;

export const StyledButton = styled.button`
    font-family: "Courier New", Arial, sans-serif;
    color: white;
    background: none;
    margin: 0.5vh 0.6vw;
    font-size: calc(5px + 1vw);
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

export const ItemListDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 25%);
    place-content: center;
    row-gap: 3.5vh;
    column-gap: 1.5vw;
`;

export const ItemDiv = styled.div<{$rarity?: string}>`
    text-align: center;
    font-family: "Andale Mono", Arial, sans-serif;
    
    // passing props to conditionally determine styles.
    // found here: https://styled-components.com/docs/basics#passed-props
    background-color: ${(props) =>
        props.$rarity === 'common'
        ? '#e0f0ff'
        : props.$rarity === 'uncommon'
        ? '#bbf2a2'
        : props.$rarity === 'legendary'
        ? '#ffd478'
        : props.$rarity === 'equipment'
        ? '#f2ef8a'
        : props.$rarity === 'void'
        ? '#edc2ff'
        : props.$rarity === 'lunar'
        ? '#a3f2f7'
        : props.$rarity === 'boss'
        ? '#e1f0b4'
        : 'white' // else
    };
    padding: 1.8vh 1.8vw;
    border-style: outset;
`;

export const ItemImg = styled.img`
    width: 15%;
`;