import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function CourseLearningPage() {
    //const router = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState("content")
    

    // Mock course data - in a real app, this would be fetched from an API
    const course = {
        id: 1,
        title: "JavaScript Basics",
        description: "Learn the fundamentals of JavaScript programming",
        progress: 35,
        modules: [
            {
                id: 1,
                title: "Introduction to JavaScript",
                description: "Learn about the history and basics of JavaScript",
                duration: "20 min",
                completed: true,
            },
            {
                id: 2,
                title: "Variables and Data Types",
                description: "Understand different data types and how to use variables",
                duration: "30 min",
                completed: true,
            },
            {
                id: 3,
                title: "Control Flow",
                description: "Learn about conditional statements and loops",
                duration: "45 min",
                completed: false,
                current: true,
            },
            {
                id: 4,
                title: "Functions",
                description: "Create and use functions in JavaScript",
                duration: "40 min",
                completed: false,
            },
            {
                id: 5,
                title: "Arrays and Objects",
                description: "Work with complex data structures",
                duration: "50 min",
                completed: false,
            },
        ],
        resources: [
            {
                title: "JavaScript Documentation",
                type: "documentation",
                url: "#",
            },
            {
                title: "Interactive JavaScript Playground",
                type: "tool",
                url: "#",
            },
            {
                title: "JavaScript Cheat Sheet",
                type: "pdf",
                url: "#",
            },
        ],
    }

    useEffect(() => {
        // Simulate loading course data
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const handleStartAssessment = () => {
        window.location.href = `/learn/1/assessment`;
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading course content...</p>
                </div>
            </div>
        )
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
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                                Courses
                            </a>
                            <a href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                                Leaderboard
                            </a>
                            <a href="/challenges" className="text-muted-foreground hover:text-foreground transition-colors">
                                Challenges
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" onClick={() => window.location.href = "/courses"}>
                            Back to Courses
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex flex-col px-4 py-6">
                <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">{course.title}</h1>
                            <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-sm text-muted-foreground">Progress: {course.progress}%</div>
                            <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Course Materials</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="content" className="w-full" onValueChange={setActiveTab}>
                                    <TabsList className="grid w-full grid-cols-3 mb-4">
                                        <TabsTrigger value="content">Course Content</TabsTrigger>
                                        <TabsTrigger value="resources">Resources</TabsTrigger>
                                        <TabsTrigger value="discussion">Discussion</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="content">
                                        <div className="space-y-4">
                                            {course.modules.map((module) => (
                                                <div
                                                    key={module.id}
                                                    className={`p-4 rounded-lg border ${module.current
                                                        ? "border-primary bg-primary/5"
                                                        : module.completed
                                                            ? "border-green-200 bg-green-50"
                                                            : "border-muted-foreground/20"
                                                        }`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className={`h-6 w-6 rounded-full flex items-center justify-center mt-1 ${module.completed
                                                                ? "bg-green-500 text-white"
                                                                : module.current
                                                                    ? "bg-primary text-primary-foreground"
                                                                    : "bg-muted text-muted-foreground"
                                                                }`}
                                                        >
                                                            {module.completed ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="14"
                                                                    height="14"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-check"
                                                                >
                                                                    <path d="M20 6 9 17l-5-5" />
                                                                </svg>
                                                            ) : (
                                                                module.id
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between">
                                                                <h3 className="font-medium">{module.title}</h3>
                                                                <Badge variant="outline">{module.duration}</Badge>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                                                            {module.current && (
                                                                <Button size="sm" className="mt-3">
                                                                    Continue Learning
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="resources">
                                        <div className="space-y-4">
                                            {course.resources.map((resource, index) => (
                                                <div key={index} className="p-4 rounded-lg border hover:bg-accent transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                            {resource.type === "documentation" ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-file-text text-primary"
                                                                >
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                    <line x1="16" x2="8" y1="13" y2="13" />
                                                                    <line x1="16" x2="8" y1="17" y2="17" />
                                                                    <line x1="10" x2="8" y1="9" y2="9" />
                                                                </svg>
                                                            ) : resource.type === "tool" ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-code text-primary"
                                                                >
                                                                    <polyline points="16 18 22 12 16 6" />
                                                                    <polyline points="8 6 2 12 8 18" />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-file text-primary"
                                                                >
                                                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                                    <polyline points="14 2 14 8 20 8" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium">{resource.title}</h3>
                                                            <p className="text-sm text-muted-foreground mt-1">
                                                                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                                            </p>
                                                        </div>
                                                        <Button variant="outline" size="sm" asChild>
                                                            <a href={resource.url}>Access</a>
                                                        </Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="discussion">
                                        <div className="text-center py-8">
                                            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide lucide-message-circle text-muted-foreground"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-medium mb-2">Join the Discussion</h3>
                                            <p className="text-muted-foreground mb-4">
                                                Connect with other learners and instructors to ask questions and share insights.
                                            </p>
                                            <Button>Start a Conversation</Button>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Ready to Test Your Knowledge?</CardTitle>
                                <CardDescription>Take an AI-powered assessment to measure your understanding</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="h-32 rounded-md bg-primary/10 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-brain-circuit text-primary"
                                    >
                                        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                                        <path d="M16 8V5c0-1.1.9-2 2-2" />
                                        <path d="M12 13h4" />
                                        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                                        <path d="M12 8h8" />
                                        <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                        <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                        <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                        <path d="M18.5 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium">AI-Powered Assessment</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Our AI will generate questions based on your learning progress and provide personalized feedback to
                                        help you improve.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-check text-green-500"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        <span className="text-sm">Adaptive difficulty based on your skills</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-check text-green-500"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        <span className="text-sm">Detailed feedback on your answers</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-check text-green-500"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                        <span className="text-sm">Personalized learning recommendations</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={handleStartAssessment}>
                                    Start Assessment
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

