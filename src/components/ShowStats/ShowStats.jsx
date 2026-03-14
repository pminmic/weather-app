import './ShowStats.css';

const ShowStats = ({ label, value, front = "", back }) => {

    return (
        <div className='show-stats'>
            <div className="label">
                {label}
            </div>
            <div className="value">
                {`${front}${value}${back}`}
            </div>
        </div>
    );
};

export default ShowStats;