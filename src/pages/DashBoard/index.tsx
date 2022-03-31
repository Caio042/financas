import React from "react";
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";

/**
 * Functional Component
 */
const DashBoard: React.FC = () => {
    return (
        <Container>
            <ContentHeader />
        </Container>
    );
}

export default DashBoard;