import { useNavigate } from 'react-router-dom';

const History1 = () => {
    const navigate = useNavigate();

    const changePage = () => navigate('/react-router/history/2');

    return (
        <div className="flex flex-col w-full h-full">
            <h1>History1</h1>
            <button onClick={changePage}>To History2</button>
        </div>
    );
};

export default History1;