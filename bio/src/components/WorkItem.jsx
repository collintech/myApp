import PropTypes from "prop-types";

const WorkItem = () => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-x5 md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
              2022
            </span>
            <span className="text-lg font-semibold text-[#001b5e]">Gemma</span>
            <span className="my-1 text-sm font-normal leading-none text-stone-400">
              One Year
            </span>
          </p>
          <p className="my-2 text-base font-normal">
            I worked here in my capacity as a developer, it was an internship of
            one year. I built the company's website from the ground-up alone
            because I was the only software engineer in the organization. It is
            an establishment involved in the cleaning business. They are pretty
            much into Homes, Gardening, upholstery and Fumigation. I learnt a
            lot during my time there because I delivered in my capacity on the
            job and tasks I was given. It was a wonderful experience being my
            first internship job.
          </p>
          <button className="flex px-2 py-1 mt-4 font-semibold text-white bg-[#001b5e] rounded-md hover:bg-pink-500 ease-in duration-300">
            <a
              href="https://drive.google.com/file/d/1HfzO2eOeKYd8MzJU-KHJVXQ7GVmSO5W7/view?usp=share_link"
              target="blank"
            >
              Learn More
            </a>
          </button>
        </li>
      </ol>
    </div>
  );
};

WorkItem.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string,
  duration: PropTypes.string,
  details: PropTypes.string,
};

export default WorkItem;
