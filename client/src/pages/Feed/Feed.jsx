
import { Select } from '@mantine/core';
import FeedCard from '../../components/Card/FeedCard';

const FeedPage = () => {

  return (
    <main className="w-full overflow-auto h-[95vh]">
      <div className="w-full min-h-[130px] flex-col item-center gap-3 bg-[rgba(34,139,230,.1)] rounded-md">
        <div className="w-full  flex items-center font-bold text-[30px] p-5 tracking-wide">
          Recommended Mentors
        </div>
        <div className="flex flex-row">
          <div className="text-[15px] w-full font-medium pl-5 tracking-wider">
            Showing 100+ Mentors
          </div>
          <div className="min-w-[39vh] tracking-wider text-[15px] gap-2 flex h-[25px] items-center">
            Sort by :
            <Select
            className="w-[25vh]"
              placeholder="Recommended"
              data={["Price Low to High", "Price High to Low"]}
            />
          </div>
        </div>
      </div>
      <div className='flex gap-4 mt-2 flex-wrap'>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
    </main>
  );
};

export default FeedPage;
