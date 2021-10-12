import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { ThemeContext } from '../../../context/theme';
import moment from 'moment';

interface CalEventProps {
    title: string;
    start: string;
    end: string;
    link: string;
}

const CustomPaper = styled(Paper)`
    background-color: rgb(66, 73, 73);
    border-radius: 4px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CalEvent = (props: CalEventProps) => {
    const theme = useContext(ThemeContext);

    return (
        <CustomPaper>
            <h2 style={theme.textStyle}>{props.title}</h2>
            <p style={theme.textStyle}>{`Today, ${moment(props.start).format('h:mma')}`}</p>
            <a style={theme.textStyle} href={props.link} target="_blank" rel="noreferrer">Go to meeting</a>
        </CustomPaper>
    );
}



export default CalEvent;

