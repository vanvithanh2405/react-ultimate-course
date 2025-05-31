import { useEffect, useLayoutEffect, useState } from 'react'
import './css/JobBoard.css'

interface Job {
    id: number;
    by: string;
    title: string;
    time: number;
    url?: string;
}

const JOBS_PER_PAGE = 6;

function JobBoard() {
    const [jobIds, setJobIds] = useState<number[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [pages, setPages] = useState<number>(0);

    const fetchDataAllJobIds = async () => {
        try {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/jobstories.json`);
            const jobIds = await res.json();
            setJobIds(jobIds);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchJobs = async () => {
        const start = pages * JOBS_PER_PAGE;
        const end = start + JOBS_PER_PAGE;
        const currentIds = jobIds.slice(start, end);
        const fetchedJobs: Job[] = [];
        try {
            for (const id of currentIds) {
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                const jobData = await res.json();
                fetchedJobs.push(jobData)
            }
            setJobs((prevJobs) => [...prevJobs, ...fetchedJobs]);
        } catch (err) {
            console.log(err)
        }
    }

    useLayoutEffect(() => {
        fetchDataAllJobIds()
    }, [])

    useEffect(() => {
        fetchJobs()
    }, [pages, jobIds])

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
            {(pages + 1) * JOBS_PER_PAGE < jobIds.length && (
                <button onClick={() => setPages((prev) => prev + 1)}>Load more</button>
            )}
        </div>
    )
}

export default JobBoard
