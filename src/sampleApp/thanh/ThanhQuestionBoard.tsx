import { useEffect, useState } from 'react'
import questionsData from './data/dataQuestions.json';
import submissionsData from './data/dataSubmissions.json';
import { getStatusColor } from './helper/QuestionBoardHelpers';

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

        const groupedByStatus = Object.keys(groupedByCategory).reduce((acc: any, category: string) => {
            acc[category] = groupedByCategory[category].map((question: Question) => {
                const submission = submissions.find((s: Submission) => s.questionId === question.id);
                return {
                    ...question,
                    status: submission ? submission.status : 'NONE',
                    color: getStatusColor(submission ? submission.status : 'NONE')
                };
            });
            return acc;
        }, {} as Record<string, GroupedQuestions[]>);
        setGroupedQuestions(groupedByStatus);

    }, []);

    return (
        <>
            <h1>Questions Board</h1>
            {Object.entries(groupedQuestions).map(([category, questions]) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <ul>
                        {questions.map((q) => (
                            <li key={q.id} style={{ color: getStatusColor(q.status) }}>
                                {q.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}

export default ThanhQuestionBoard