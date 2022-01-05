import { useNavigate } from 'react-router-dom';

const useProgramaticNav = () => {
    const navigate = useNavigate();
    return navigate;
};

export default useProgramaticNav;