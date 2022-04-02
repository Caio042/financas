import styled from "styled-components";

export const Container = styled.div`
    grid-area: Content;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.primary};
    padding: 25px;

    height: calc(100vh - 70px); //100% da altura da tela - 70px do MainHeader
    
    overflow-y: scroll; // o conteudo que passar na vertical é exibido em uma barra de rolagem

    ::-webkit-scrollbar {
        width: 18px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;