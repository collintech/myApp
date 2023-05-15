//import { data } from "../components/workData";
import WorkItem from "../components/WorkItem";

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Résumé</h1>
      <WorkItem />
    </div>
  );
};

export default Work;
