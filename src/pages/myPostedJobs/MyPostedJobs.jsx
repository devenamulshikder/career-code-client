import { Suspense, use } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { JobList } from "./JobList";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import { Loader } from "../../components";

export const MyPostedJobs = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      here is my posted jobs
      <Suspense fallback={<Loader />}>
        <JobList jobsCreatedByPromise={jobsCreatedByPromise(user?.email)} />
      </Suspense>
    </div>
  );
};
