import { useState } from "react";
import { Wrapper } from "../../components/Wrapper";
import EventCard from "./Components/EventCard";
import Pagination from "./Components/Pagination";
import { eventData } from "./eventData";

const itemsPerPage = 8;

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const eventsToShow = eventData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper className="flex flex-col gap-5">
      <div className="container mx-auto mt-5">
        <div>
          <h1 className="text-[32px] ">
            Live Music events & programs in Nepal
          </h1>
          <div className="flex space-x-2">
            <button className="bg-white border border-red-500 text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition duration-300">
              All
            </button>
            <button className="bg-white border border-red-500 text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition duration-300">
              Upcoming
            </button>
            <button className="bg-white border border-red-500 text-red-500 py-2 px-4 rounded-full hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white transition duration-300">
              Past Event
            </button>
          </div>
        </div>
        <div className="m-6 grid grid-cols-4 gap-10">
          {eventsToShow.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <div className="p-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Event;
