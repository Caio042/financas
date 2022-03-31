import React from "react";
import { Container, Controllers, TitleContainer } from "./styles";

const ContentHeader: React.FC = () => {
    return(
        <Container>
            <TitleContainer>
                <h1>Header</h1>
            </TitleContainer>

            <Controllers>
                <button>botao A</button>
                <button>botao b</button>
            </Controllers>
        </Container>
    );
}

export default ContentHeader;