import React from "react";
import { Container, Header, LogoImg, Menu, MenuItemLink, Title } from "./styles";
import logoImg from '../../assets/logo.svg'
import { MdDashboard } from 'react-icons/md';
import { AiOutlineArrowDown, AiOutlineArrowUp } from  'react-icons/ai';
import { ImExit } from 'react-icons/im';


const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="logo"/>
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href="#"> <MdDashboard /> DashBoard</MenuItemLink>
                <MenuItemLink href="#"> <AiOutlineArrowUp /> Entradas</MenuItemLink>
                <MenuItemLink href="#"><AiOutlineArrowDown /> Saídas</MenuItemLink>
                <MenuItemLink href="#"> <ImExit /> Sair</MenuItemLink>
            </Menu>
        </Container>
    );
}

export default Aside;