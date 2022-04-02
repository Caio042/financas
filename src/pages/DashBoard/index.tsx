import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

/**
 * Functional Component
 */
const DashBoard: React.FC = () => {

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
    return (
        <Container>
            <ContentHeader title="DashBoard" lineColor="#ffffff">
                <SelectInput options={options}>

                </SelectInput>
            </ContentHeader>
        </Container>
    );
}

export default DashBoard;