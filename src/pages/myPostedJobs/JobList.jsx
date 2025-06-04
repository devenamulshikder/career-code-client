import { use } from "react";

export const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  console.log(jobs);
  return (
    <div>
      <h3 className="text-5xl">Job Created by You : {jobs.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Company Name</th>
              <th>Job Type</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.company}</td>
                <td>{job.jobType}</td>
                <td>{job.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
