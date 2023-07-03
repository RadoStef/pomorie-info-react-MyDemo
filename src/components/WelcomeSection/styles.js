import cover from '../../assets/cover5.jpg';
import cover1 from '../../assets/cover.jpg';
import cover2 from '../../assets/cover2.jpg';
import cover3 from '../../assets/cover3.jpg';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover1.jpg';

const backgroundImages = [cover, cover1, cover2, cover3, cover4, cover5];
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
const selectedImage = backgroundImages[randomIndex];

export const styles = {
    container: {
        marginTop: '80px',
        background: 'white',
    },
    boxStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${selectedImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '850px',
        opacity: 0.7,
    },
    welcomeTextBox: {
        width: '30%',
        position: 'absolute',
        top: '200px',
        left: '55%',
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        border: '1px solid #fbbc05',
        boxShadow: '0px 6px 13px -6px rgba(0,0,0,0.55)',
    },
    typewriterSpan: {
        height: '25px',
    }
};