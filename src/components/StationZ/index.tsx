import { useContext } from 'react';
import { StationContainer } from './styles';
import { ThemeContext } from '../../context/theme';
import { ArtSlider } from '../ArtSlider';
import Calendar from '../Calendar';

const StationZ = () => {
    const theme = useContext(ThemeContext);

    return (
        <StationContainer background={theme.background}>
            <h1 style={theme.textStyle}>Welcome, Zachary</h1>
            <ArtSlider />
            <Calendar />
        </StationContainer>
    );
}


export default StationZ;

