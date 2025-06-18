import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";

export const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`https://career-code-server-neon.vercel.app/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Application Status Updated!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3282B8]/10 to-[#0F4C75]/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Applications</h1>

        {/* Same table functionality with improved styling */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application, idx) => (
                  <tr key={application._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.applicant}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* EXACT SAME SELECT ELEMENT - only styled differently */}
                      <select
                        onChange={(e) => handleStatusChange(e, application._id)}
                        defaultValue={application.status}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      >
                        <option disabled>Update Status</option>
                        <option>Pending</option>
                        <option>Interview</option>
                        <option>Hired</option>
                        <option>Reject</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Empty state - same logic as original */}
        {applications.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No applications found</p>
          </div>
        )}
      </div>
    </div>
  );
};
