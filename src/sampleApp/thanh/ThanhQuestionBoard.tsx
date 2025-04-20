import { useEffect, useState } from 'react'
import questionsData from './data/dataQuestions.json';
import submissionsData from './data/dataSubmissions.json';
import { getStatusColor } from './helper/QuestionBoardHelpers';
import styled from './css/Main.module.css';

interface Question {
    id: string;
    name: string;
    category: string;
}

interface Submission {
    questionId: string;
    status: string;
}

interface GroupedQuestions extends Question {
    status: string;
    color: string;
}

function ThanhQuestionBoard() {
    const [groupedQuestions, setGroupedQuestions] = useState<Record<string, GroupedQuestions[]>>({});

    useEffect(() => {
        const questions: Question[] = questionsData;
        const submissions: Submission[] = submissionsData;

        const groupedByCategory = questions.reduce((acc: any, question: Question) => {
            const category = question.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(question);
            return acc;
        }, {})

        const groupedByStatus = Object.keys(groupedByCategory).reduce((acc: Record<string, GroupedQuestions[]>, category: string) => {
            acc[category] = groupedByCategory[category].map((question: Question) => {
                const submission = submissions.find((s: Submission) => s.questionId === question.id);
                return {
                    ...question,
                    status: submission ? submission.status : 'NONE',
                    color: getStatusColor(submission ? submission.status : 'NONE')
                };
            });
            return acc;
        }, {});

        setGroupedQuestions(groupedByStatus);
    }, []);

    return (
        <>
            <h1>Questions Board</h1>
            <div className={styled.questionBoardContainer} >
                {Object.entries(groupedQuestions).map(([category, questions]) => {
                    const correctQuestions = questions.filter((question) => question.status === 'CORRECT').length;
                    const totalQuestions = questions.length;

                    return <div className={styled.column} key={category}>
                        <span>{category} - {correctQuestions} / {totalQuestions}</span>
                        <div>
                            {questions.map((question) => (
                                <div className={styled.boards} key={question.id}>
                                    <div className={styled.statusNode} style={{ backgroundColor: question.color }}></div>
                                    <h2 className={styled.title}>{question.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                })}
            </div>
            
        </>
    )
}

export default ThanhQuestionBoard