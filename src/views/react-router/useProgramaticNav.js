import { useNavigate } from 'react-router-dom';

const useProgramaticNav = () => {
    const navigate = useNavigate();

    const changePage = (path) => navigate(path);

    return changePage();
};