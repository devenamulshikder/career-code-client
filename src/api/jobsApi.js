export const jobsCreatedByPromise = (email) => {
  return fetch(`https://career-code-server-neon.vercel.app/jobs?email=${email}`).then((res) =>
    res.json()
  );
};
