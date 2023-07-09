import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    font-size: 1.6rem;
    width: 40%;
    color: #444;
    line-height: 1.5;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    padding: 2rem;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
`

export const VisibleContent = styled.div`
    display: flex;
    gap: 2rem;
    cursor: pointer;
`

export const Span = styled.span`
    font-size: 2.5rem;
    &:last-child{
        margin-left: auto;
    }
`

export const HideContentDEfault = styled.p`
    // display: none;
`