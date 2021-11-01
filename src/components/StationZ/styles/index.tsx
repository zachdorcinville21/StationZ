import styled from 'styled-components';

interface SCProps {
    background: string;
}

export const StationContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ background }: SCProps) => background};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
`;



