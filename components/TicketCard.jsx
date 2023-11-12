import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div
      className='flex flex-col bg-card hover:bg-card-hover 
      rounded-md shadow-lg p-3 m-2'
    >
      <div className='flex mb-3'>
        <DeleteBlock />
        <div className='ml-auto'>
          <PriorityDisplay />
        </div>
      </div>
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;