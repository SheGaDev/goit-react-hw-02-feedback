import type { State } from '../app/App';

const Feedback = ({ state, onChange }: { state: State; onChange: (name: keyof State) => void }) => {
  return (
    <>
      <h1>
        <b>Please leave feedback</b>
      </h1>
      <div className='flex gap-4'>
        {Object.keys(state).map((name) => (
          <button className='p-[4px]' key={name} onClick={() => onChange(name as keyof State)}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default Feedback;
