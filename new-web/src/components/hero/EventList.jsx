
import eventData from "../../assets/data/insights";

const EventsList = () => {
  return (
    <div className="space-y-6 flex flex-col items-center justify-center">
      {eventData.map((event, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={event.image}
            alt={event.title}
            className="w-[10rem] h-[10rem] md:w-1/3 object-cover"
          />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">{event.date}</p>
              <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-gray-900 font-medium">{event.author.name}</h4>
              <p className="text-gray-500 text-sm">{event.author.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
