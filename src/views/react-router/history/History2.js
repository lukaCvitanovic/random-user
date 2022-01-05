import useProgramaticNav from '@/views/react-router/useProgramaticNav';

const History2 = () => {
    const navigate = useProgramaticNav();

    const changePage = () => navigate('/react-router/history/1');

    return (
        <div className="flex flex-col w-full h-full">
            <h1>History2</h1>
            <button onClick={changePage}>To History1</button>
        </div>
    );
};

export default History2;