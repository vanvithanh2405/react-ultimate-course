import { useEffect, useState } from "react";
import styled from "../css/Box.module.css";

const pages = 6;

function JobBoard() {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [page, setPage] = useState(0);

  //call api
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => res.json())
      .then((data: number[]) => setJobIds(data));
  }, []); //[] call 1 lan

  useEffect(() => {
    const fetchJobs = async () => {
      const start = page * pages;
      const end = start + pages;
      const idsToload = jobIds.slice(start, end);

      const jobPromises = idsToload.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      );
      const jobData = await Promise.all(jobPromises);
      setJobs((prev) => [...prev, ...jobData]);
    };
    if (jobIds.length > 0) {
      fetchJobs();
    }
  }, [page, jobIds]);


  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <div>
      <h1>Job Board</h1>
      <div className={styled.jobBoardList}>
        {jobs.map((job) => (
          <div className={styled.jobBoardItem} key={job.id}>
            <h3 className="jobBoardItem-title">{job.title}</h3>
            <p>
              By {job.by} · {job.time && formatDate(job.time)}
            </p>
          </div>
        ))}
      </div>
      {jobs.length < jobIds.length && (
        <button
          className={styled.loadMoreBtn}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more jobs
        </button>
      )}
    </div>
  );
}

export default JobBoard;
