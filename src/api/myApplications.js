export const myApplicationsPromise = (email) => {
  return fetch(
    `https://career-code-server-neon.vercel.app/applications?email=${email}`,
    {}
  ).then((res) => res.json());
};
