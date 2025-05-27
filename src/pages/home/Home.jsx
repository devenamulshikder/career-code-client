import { Suspense } from "react";
import { Banner, HotJobs } from "../../components";
const hotJobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
export const Home = () => {
  return (
    <div>
      <title>Career Code | Home</title>
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
          </div>
        }
      >
        <HotJobs hotJobsPromise={hotJobsPromise} />
      </Suspense>
    </div>
  );
};
