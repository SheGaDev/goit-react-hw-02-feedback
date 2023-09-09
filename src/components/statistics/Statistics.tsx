import type { State } from '../app/App';

const Statistics = ({ state }: { state: State }) => {
  return (
    <>
      <h2>
        <b>Statistics</b>
      </h2>
      <div className='flex flex-col'>
        {Object.entries(state).map(([name, value]) => (
          <span key={name}>
            {name}: {value}
          </span>
        ))}
      </div>
    </>
  );
};

export default Statistics;
