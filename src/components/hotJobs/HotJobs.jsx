import { use } from "react";
import { JobCard } from "./JobCard";
export const HotJobs = ({ hotJobsPromise }) => {
  const hotJobs = use(hotJobsPromise);

  return (
    <div className="container mx-auto">
        <h1 className="text-5xl font-semibold text-center my-8">Our Hot Job are here!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 ">
        {hotJobs.map((jobs) => (
          <JobCard key={jobs._id} jobs={jobs} />
        ))}
      </div>
    </div>
  );
};
