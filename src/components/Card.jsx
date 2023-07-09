import {useState} from 'react';
import {Container, VisibleContent, Span, HideContentDEfault} from './StyledComponents';

export const Card = ({currentId, setCurrentId, id, question, answer}) =>{
    const isOpen = currentId === id;

    return <Container style={{borderTop: isOpen ? '5px solid green' : 'none'}}>
        <VisibleContent onClick={() => setCurrentId(id)}>
            <Span style={{color: isOpen ? 'green' : 'inherit'}}>{id < 10 ? `0${id}` : id}</Span>
            <Span style={{color: isOpen ? 'green' : 'inherit'}}>{question}</Span>
            <Span>{isOpen ? '-' : '+'}</Span>
        </VisibleContent>
        {
            isOpen &&
            <HideContentDEfault>
                {answer}
            </HideContentDEfault>
        }
    </Container>
}