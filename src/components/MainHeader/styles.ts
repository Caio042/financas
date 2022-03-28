import styled from "styled-components";

export const Container = styled.div`
    grid-area: MainHeader;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.secondary};

    display: flex;
    justify-content: space-between;
    align-items:  center;
    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    //display: flex;
    //flex-direction: row;

    color: ${props => props.theme.text};
`;

export const Welcome = styled.h3`
    

`;

export const Username = styled.span`
    

`;