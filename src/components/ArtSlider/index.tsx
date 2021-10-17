import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { SliderContainer } from "./styles";
import ravager from '../../assets/images/ravager.png';
import roamer from '../../assets/images/roamer.png';
import belugie171 from '../../assets/images/belugie 171.png';
import belugie628 from '../../assets/images/belugie 628.png';
import pixsol from '../../assets/images/pixsol.png';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export const ArtSlider = () => {
    const theme = useContext(ThemeContext);

    return (
        <SliderContainer>
            <Carousel
                plugins={[
                    'infinite',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    },
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                        }
                    },
                ]}
                animationSpeed={1000}
            >
                <img className='art-piece' src={ravager} style={theme.artStyle} alt='art' />
                <img className='art-piece' src={roamer} style={theme.artStyle} alt='art' />
                <img className='art-piece' src={belugie171} style={theme.artStyle} alt='art' />
                <img className='art-piece' src={pixsol} style={theme.artStyle} alt='art' />
                <img className='art-piece' src={belugie628} style={theme.artStyle} alt='art' />
            </Carousel>
        </SliderContainer>
    );
}

