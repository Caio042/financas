import React from "react";

import { Container, ContentBody } from "./styles"
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import FinancialRecord from "../../components/FInancialRecord";

/**
 * Functional Component
 */
const List: React.FC = () => {
    
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
    }];

    return (
        <Container>
            <ContentHeader title="List" lineColor="#ffffff">
                <SelectInput options={options}>

                </SelectInput>
            </ContentHeader>

            <ContentBody>
                {
                    [...Array(1000)].map(() =>
                     
                    <FinancialRecord 
                        tagColor="#E44C4E"
                        title="Aluguel"
                        subtitle="02/04/2022"
                        amount="R$ 1500,00"
                    />
                    )
                    
                }
            </ContentBody>

        </Container>
    );
}

export default List;