import {useFormStatus} from 'react-dom';

const Footer = () => {
    const {pending} = useFormStatus();
    return <div><button type="submit" disabled={pending}>Actualizar</button></div>
}

export default Footer;