import { useState } from "react"
// import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AssessmentFeedback } from "@/components/assessment-feedback"
//import { useNavigate } from "react-router-dom"

export default function AssessmentPage() {
    //const router = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isCompleted, setIsCompleted] = useState(false)
    const [showFeedback, setShowFeedback] = useState(false)

    // Mock questions - in a real app, these would be fetched from an API based on the courseId
    const questions = [
        {
            id: 1,
            type: "multiple-choice",
            question: "Which CSS property is used to control the space between elements?",
            options: ["margin", "padding", "spacing", "gap"],
            correctAnswer: "margin",
        },
        {
            id: 2,
            type: "multiple-choice",
            question: "What JavaScript method would you use to add an element to the end of an array?",
            options: ["push()", "append()", "add()", "insert()"],
            correctAnswer: "push()",
        },
        {
            id: 3,
            type: "code",
            question: "Write a JavaScript function that returns the sum of two numbers.",
            correctAnswer: "function sum(a, b) {\n  return a + b;\n}",
        },
        {
            id: 4,
            type: "multiple-choice",
            question: "Which HTML tag is used to create a hypera?",
            options: ["<a>", "<a>", "<href>", "<url>"],
            correctAnswer: "<a>",
        },
        {
            id: 5,
            type: "text",
            question: "Explain the concept of responsive design in your own words.",
            correctAnswer: "",
        },
    ]

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setIsSubmitting(true)
            // Simulate API call to evaluate answers
            setTimeout(() => {
                setIsSubmitting(false)
                setIsCompleted(true)
            }, 2000)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleAnswerChange = (answer: string) => {
        setAnswers({
            ...answers,
            [currentQuestion]: answer,
        })
    }

    const handleSubmitAssessment = () => {
        setShowFeedback(true)
    }

    const renderQuestion = () => {
        const question = questions[currentQuestion]

        switch (question.type) {
            case "multiple-choice":
                return (
                    <RadioGroup
                        value={answers[currentQuestion] || ""}
                        onValueChange={handleAnswerChange}
                        className="space-y-3 mt-4"
                    >
                        {question.options?.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <RadioGroupItem value={option} id={`option-${index}`} />
                                <Label htmlFor={`option-${index}`} className="text-base">
                                    {option}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                )
            case "code":
                return (
                    <div className="mt-4">
                        <Textarea
                            value={answers[currentQuestion] || ""}
                            onChange={(e) => handleAnswerChange(e.target.value)}
                            placeholder="Write your code here..."
                            className="font-mono h-40"
                        />
                    </div>
                )
            case "text":
                return (
                    <div className="mt-4">
                        <Textarea
                            value={answers[currentQuestion] || ""}
                            onChange={(e) => handleAnswerChange(e.target.value)}
                            placeholder="Write your answer here..."
                            className="h-40"
                        />
                    </div>
                )
            default:
                return null
        }
    }

    if (showFeedback) {
        return <AssessmentFeedback courseId={"1"} answers={answers} questions={questions} />
    }

    return (
        <div className="min-h-screen bg-background">
            <header className="border-b">
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-6">
                        <a href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">WS</span>
                            </div>
                            <span className="font-bold text-xl">WSCube</span>
                        </a>
                        <span className="text-muted-foreground">JavaScript Basics Assessment</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" onClick={() => window.location.href = "/dashboard"}>
                            Exit Assessment
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex flex-col px-4 py-6">
                {!isCompleted ? (
                    <Card className="max-w-3xl mx-auto">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>
                                        Question {currentQuestion + 1} of {questions.length}
                                    </CardTitle>
                                    <CardDescription>
                                        {questions[currentQuestion].type === "multiple-choice"
                                            ? "Select the best answer"
                                            : questions[currentQuestion].type === "code"
                                                ? "Write code to solve the problem"
                                                : "Answer in your own words"}
                                    </CardDescription>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {Math.floor((currentQuestion / questions.length) * 100)}% Complete
                                </div>
                            </div>
                            <Progress value={(currentQuestion / questions.length) * 100} className="h-2 mt-2" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
                                {renderQuestion()}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                                Previous
                            </Button>
                            <Button onClick={handleNextQuestion} disabled={!answers[currentQuestion]}>
                                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <Card className="max-w-3xl mx-auto">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">Assessment Completed!</CardTitle>
                            <CardDescription>We're analyzing your answers to provide personalized feedback</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center justify-center py-6">
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-check-circle text-primary"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <path d="m9 11 3 3L22 4" />
                                </svg>
                            </div>
                            <div className="text-center space-y-2 mb-6">
                                <h3 className="text-xl font-medium">Great job!</h3>
                                <p className="text-muted-foreground">
                                    You've completed all {questions.length} questions in the assessment.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-4 w-full max-w-md mb-6">
                                <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                    <span className="text-2xl font-bold">{questions.length}</span>
                                    <span className="text-xs text-muted-foreground">Questions</span>
                                </div>
                                <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                    <span className="text-2xl font-bold">3</span>
                                    <span className="text-xs text-muted-foreground">Correct</span>
                                </div>
                                <div className="flex flex-col items-center p-3 rounded-lg bg-primary/10">
                                    <span className="text-2xl font-bold">75</span>
                                    <span className="text-xs text-muted-foreground">XP Earned</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-center">
                            <Button onClick={handleSubmitAssessment}>View Detailed Feedback</Button>
                        </CardFooter>
                    </Card>
                )}
            </main>
        </div>
    )
}

