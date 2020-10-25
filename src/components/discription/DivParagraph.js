import React from 'react';
import styled from 'styled-components';

export const DivParagraph = styled.span`
    margin-bottom: 0.1rem;
    >p{
        margin-bottom: 0.3rem;
        margin-top:0rem;
        >a{
            color:initial;
        }
    }
`;

export default function ParagraphDiv({title, text}) {
    return (
        <DivParagraph>
            <h3>{title}</h3>
            <p>{text}</p>
        </DivParagraph>
    );
  }


