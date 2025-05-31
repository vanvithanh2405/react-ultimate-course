import { useEffect, useLayoutEffect, useState } from 'react'
import './css/JobBoard.css'

interface Job {
    id: number;
    by: string;
    title: string;
    time: number;
    url?: string;
}

const LIMIT = 6;

function JobBoard() {
    const [jobIds, setJobIds] = useState<number[] | null>(null);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [page, setPage] = useState<number>(0);

    // TODO: fetch all id of job stories
    useEffect(() => {
        fetchJobs(page); // 1
    }, [page])

    async function fetchJobIds(page: number) {
        try {
            let cloneJobs = jobIds; // [1,3,4,5,6]
            if (!cloneJobs) {
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`);
                cloneJobs = await res.json(); // [1,3,4,5,6]
                setJobIds(cloneJobs);
            }
            const start = page * LIMIT;
            const end = start + LIMIT;
            return cloneJobs ? cloneJobs.slice(start, end) : []; // [1,3,4,5,6].slice(6, 12)
        } catch (err) {
            console.log(err);
            return [];
        }
    }
    // TODO: show list job with job stories
    async function fetchJobs(page: number)  {
        const jobIdsForPage = await fetchJobIds(page);
        const fetchJob = jobIdsForPage.map((jobid: number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${jobid}.json`).then(res => res.json()))
        const jobs = await Promise.all([...fetchJob])
        setJobs(prevState => [...prevState, ...jobs]); // 0 -> [1,2,3,4,5], 1 ->[1,2,3,4,5,6,7,8,9,10] -> [...jobs, ...xxx]
    }

    return (
        <div className='job-board-container'>
            <h1 className='job-board-title'>Jobs Board</h1>
            {jobs.map(job => {
                return <div key={job.id} className="job">
                    <strong>{job.title}</strong>
                    <div>
                        By {job.by} - {new Date(job.time * 1000).toLocaleString()}
                    </div>
                </div>
            })}
             {(page + 1) * LIMIT < (jobIds || []).length && (
                <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
            )}
        </div>
    )
}

export default JobBoard
