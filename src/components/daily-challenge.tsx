import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DailyChallenge() {
    const [completed, setCompleted] = useState(false)

    return (
        <Card className="border-primary/20">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle>Daily Challenge</CardTitle>
                    <Badge>+50 XP</Badge>
                </div>
                <CardDescription>Complete for bonus points and rewards</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="h-32 rounded-md bg-muted flex items-center justify-center">
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
                            className="lucide lucide-code-2 text-muted-foreground"
                        >
                            <path d="m18 16 4-4-4-4" />
                            <path d="m6 8-4 4 4 4" />
                            <path d="m14.5 4-5 16" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-medium">Debug the JavaScript Function</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Find and fix the bugs in the provided JavaScript function to make all tests pass.
                        </p>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant={completed ? "outline" : "default"} onClick={() => setCompleted(!completed)}>
                    {completed ? "Completed" : "Start Challenge"}
                </Button>
            </CardFooter>
        </Card>
    )
}

