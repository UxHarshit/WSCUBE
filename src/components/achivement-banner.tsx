import { useState } from "react";
import { Button } from "./ui/button";
//import { Card } from "./ui/card";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Progress } from "@/components/ui/progress";


export function AchievementBanner() {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) {
        return null
    }
    return (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-trophy text-primary"
                            >
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Consistency Champion!</h2>
                            <p className="text-muted-foreground">You've completed lessons for 7 days in a row. Keep it up!</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium">Next Badge: 14 days</span>
                            <span className="text-sm font-medium">7/14</span>
                        </div>
                        <Progress value={50} className="h-2 w-full md:w-48" />
                        <div className="flex items-center gap-2 mt-2">
                            <Button className="hover:cursor-pointer"
                             size="sm" variant="outline" onClick={() => setDismissed(true)}>
                                Dismiss
                            </Button>
                            <Button size="sm">Share Achievement</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    )
}