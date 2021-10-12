import styled from 'styled-components';


export const CalendarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const CalEvents = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;

export const SignInBtn = styled.button`
    width: 10%;
    border-radius: 6px;
    background-color: #000000;
    padding: 0.5rem;
    border: none;
    transition: ease 0.2s;
    font-family: Dosis;
    color: #fff;
    text-align: center;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 4px black;
    }

    &:focus {
        outline: none;
    }
`;

