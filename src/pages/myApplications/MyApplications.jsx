import { Suspense, use } from "react";
import { ApplicationList, Loader } from "../../components";
import { AuthContext } from "../../providers/AuthProvider";
import { myApplicationsPromise } from "../../api/myApplications";
export const MyApplications = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <title>Career Code | My Applications</title>
      <Suspense fallback={<Loader />}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};
