import React from "react";
import styled from "styled-components";

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 40vw;
    justify-items: flex-start;
`;
const Icones = styled.img`
    display: flex;
    align-items: center;
    width: 50px;
    padding: 1px 3px;
    margin-right: 10px;
`;

function CardPequeno(props) {
    return(
        <SmallcardContainer>
            <Icones src={props.img} />
            <div>
                <h5>
                    {props.dados}
                </h5>
            </div>
        </SmallcardContainer>
    )
}

export default CardPequeno;