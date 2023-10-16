import { FaCalendar, FaClock, FaMapMarker } from "react-icons/fa";

interface EventCardProps {
  eventName: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  isFree: boolean;
  price?: string;
  isOver: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  eventName,
  description,
  date,
  time,
  location,
  image,
  isFree,
  price,
  isOver,
}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg w-72 relative">
  <div className="relative">
    <div className="mb-3">
      {isOver ? (
        <span className="ml-28 bg-blue-400 text-white py-1 px-2 rounded-md text-sm">
          Expired
        </span>
      ) : (
        <span className="ml-28 bg-blue-400 text-white py-1 px-2 rounded-md text-sm">
          Upcoming
        </span>
      )}
      {isFree ? (
        <span className="ml-2 bg-red-400 text-white py-1 px-4 rounded-md text-sm">
          Free
        </span>
      ) : (
        <span className="ml-2 bg-red-400 text-white py-1 px-4 rounded-md text-sm">
          {price}
        </span>
      )}
    </div>
    <div className="w-64 h-40 rounded-lg overflow-hidden">
      <img src={image} alt={eventName} className="w-full h-full object-cover" />
    </div>
  </div>

  <h2 className="text-xl font-semibold mt-2">{eventName}</h2>
  <hr />
  <p className="text-gray-600 text-sm mt-2">{description}</p>
  <div className="ml-2 p-2">
    <div className="flex items-center mt-1 text-sm">
      <FaCalendar className="w-4 h-4 text-gray-600 mr-1" /> {date}
    </div>
    <div className="flex items-center mt-1 text-sm">
      <FaClock className="w-4 h-4 text-gray-600 mr-1" /> {time}
    </div>
    <div className="flex items-center mt-1 text-sm">
      <FaMapMarker className="w-4 h-4 text-gray-600 mr-1" /> {location}
    </div>
  </div>

  <div className="mt-3">
    {isFree ? (
      <button className="w-64 bg-blue-400 text-white py-1 px-2 rounded-md text-sm">
        Register
      </button>
    ) : (
      <button className="w-64 bg-blue-400 z-10 text-white py-1 px-2 rounded-md text-sm">
        Buy a ticket
      </button>
    )}
  </div>
</div>

  );
};

export default EventCard;
