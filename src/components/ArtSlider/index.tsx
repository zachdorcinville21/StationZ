import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { SliderContainer } from "./styles";
import ravager from '../../assets/images/ravager.png';
import roamer from '../../assets/images/roamer.png';
import popsicle from '../../assets/images/popsicles.jpg';
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
                <img className='art-piece' src={popsicle} style={theme.artStyle} alt='art' />
            </Carousel>
        </SliderContainer>
    );
}

