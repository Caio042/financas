import React, { useMemo } from "react";

import { Container, ContentBody, Filters } from "./styles"
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import FinancialRecord from "../../components/FInancialRecord";
import { useParams } from "react-router-dom";

/*interface RouteParams {
    match: {
        params: {
            type: string;
        }
    }
}*/

/**
 * Functional Component
 */
const List: React.FC = () => {
    
    
    let { type } = useParams();

    const title = useMemo(() => {
        return type === 'income' ? 'Entradas' : 'Saídas';

    }, [type]);
    const lineColor = useMemo(() => {
        return type === 'income' ? '#F7931B': '#E44C4E';
    },[type]);

    const months = [{
        value: '1',
        label: 'Janeiro'
    },
    {
        value: '2',
        label: 'Fevereiro'
    },
    {
        value: '3',
        label: 'Março'
    }];

    const years = [{
        value: '2022',
        label: '2022'
    },
    {
        value: '2021',
        label: '2021'
    },
    {
        value: '2020',
        label: '2020'
    }];


    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months}>

                </SelectInput>
                <SelectInput options={years}></SelectInput>
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter recurrent">
                    Recorrentes
                </button>
                <button type="button" className="tag-filter eventual">
                    Eventuais
                </button>
            </Filters>

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