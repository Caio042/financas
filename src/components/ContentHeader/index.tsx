import React from "react";
import { Container, Controllers, TitleContainer } from "./styles";
import SelectInput from "../SelectInput";

interface ContentHeaderProps{
    title: string,
    lineColor: string,
    children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({title, lineColor, children}) => {

    const options = [{
            value: 'Lorem',
            label: 'Ipsum'
        },
        {
            value: 'safrgrg',
            label: 'AAAAAAA'
        },
        {
            value: 'FUCK',
            label: 'you'
        }
    ];

    return(
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>

            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;