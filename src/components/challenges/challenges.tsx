import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import WScubeLogo from "../../assets/wscube-logo.svg?url"

export default function ChallengesPage() {
  const challengeTypes = ["Daily", "Weekly", "Special"]

  const challenges = [
    {
      id: 1,
      title: "JavaScript Debugging Challenge",
      description: "Find and fix the bugs in the provided JavaScript function to make all tests pass.",
      image: "https://placehold.co/240x120",
      difficulty: "Medium",
      timeEstimate: "15 min",
      xpReward: 50,
      type: "Daily",
      completed: false,
      progress: 0,
    },
    {
      id: 2,
      title: "CSS Layout Master",
      description: "Create a responsive layout using Flexbox and Grid based on the provided design.",
      image: "https://placehold.co/240x120",
      difficulty: "Hard",
      timeEstimate: "30 min",
      xpReward: 75,
      type: "Daily",
      completed: false,
      progress: 0,
    },
    {
      id: 3,
      title: "API Integration Challenge",
      description: "Connect to a public API and display the data in a user-friendly format.",
      image: "https://placehold.co/240x120",
      difficulty: "Medium",
      timeEstimate: "45 min",
      xpReward: 100,
      type: "Weekly",
      completed: false,
      progress: 0,
    },
    {
      id: 4,
      title: "Accessibility Audit",
      description: "Identify and fix accessibility issues in the provided web page.",
      image: "https://placehold.co/240x120",
      difficulty: "Easy",
      timeEstimate: "20 min",
      xpReward: 60,
      type: "Weekly",
      completed: false,
      progress: 0,
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Optimize the provided web application to improve loading and rendering times.",
      image: "https://placehold.co/240x120",
      difficulty: "Hard",
      timeEstimate: "60 min",
      xpReward: 150,
      type: "Weekly",
      completed: false,
      progress: 0,
    },
    {
      id: 6,
      title: "Hackathon: Build a Learning Tool",
      description: "Create a tool that helps students learn programming concepts more effectively.",
      image: "https://placehold.co/240x120",
      difficulty: "Expert",
      timeEstimate: "3 days",
      xpReward: 500,
      type: "Special",
      completed: false,
      progress: 0,
      badgeReward: "Innovator",
    },
  ]

  const completedChallenges = [
    {
      id: 7,
      title: "Responsive Navigation Menu",
      description: "Create a responsive navigation menu that works on all screen sizes.",
      image: "https://placehold.co/240x120",
      difficulty: "Medium",
      timeEstimate: "25 min",
      xpReward: 70,
      type: "Daily",
      completed: true,
      progress: 100,
      completedDate: "Yesterday",
    },
    {
      id: 8,
      title: "Form Validation Challenge",
      description: "Implement client-side validation for a complex form with multiple field types.",
      image: "https://placehold.co/240x120",
      difficulty: "Medium",
      timeEstimate: "30 min",
      xpReward: 80,
      type: "Daily",
      completed: true,
      progress: 100,
      completedDate: "2 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2">
              <img className="object-contain w-[8vw]"
                src={WScubeLogo} width={32} height={32} alt="WSCube" />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                Courses
              </a>
              <a href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Leaderboard
              </a>
              <a href="/challenges" className="text-foreground font-medium transition-colors">
                Challenges
              </a>
              {/* <a href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a> */}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Challenges</h1>
          <p className="text-muted-foreground">Complete challenges to earn XP, badges, and improve your skills</p>
        </div>

        <Tabs defaultValue="Daily" className="mb-6">
          <TabsList>
            {challengeTypes.map((type) => (
              <TabsTrigger key={type} value={type}>
                {type} Challenges
              </TabsTrigger>
            ))}
            <TabsTrigger value="Completed">Completed</TabsTrigger>
          </TabsList>

          {challengeTypes.map((type) => (
            <TabsContent key={type} value={type}>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges
                  .filter((challenge) => challenge.type === type)
                  .map((challenge) => (
                    <Card key={challenge.id} className="overflow-hidden flex flex-col">
                      <div className="relative h-32">
                        <img
                          src={challenge.image || "/placeholder.svg"}
                          alt={challenge.title}
                          className="object-cover w-full h-full"
                        />
                        <Badge
                          className="absolute top-2 right-2"
                          variant={
                            challenge.difficulty === "Easy"
                              ? "outline"
                              : challenge.difficulty === "Medium"
                                ? "secondary"
                                : challenge.difficulty === "Hard"
                                  ? "destructive"
                                  : "default"
                          }
                        >
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle>{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
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
                              className="lucide lucide-clock"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{challenge.timeEstimate}</span>
                          </div>
                          <div className="flex items-center gap-1">
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
                              className="lucide lucide-star text-amber-500"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>{challenge.xpReward} XP</span>
                          </div>
                        </div>
                        {challenge.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-muted-foreground">Progress</span>
                              <span className="text-xs text-muted-foreground">{challenge.progress}%</span>
                            </div>
                            <Progress value={challenge.progress} className="h-2" />
                          </div>
                        )}
                        {challenge.badgeReward && (
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="border-amber-500 text-amber-500">
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
                                className="lucide lucide-medal mr-1"
                              >
                                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                                <path d="M11 12 5.12 2.2" />
                                <path d="m13 12 5.88-9.8" />
                                <path d="M8 7h8" />
                                <circle cx="12" cy="17" r="5" />
                                <path d="M12 18v-2h-.5" />
                              </svg>
                              {challenge.badgeReward} Badge
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Start Challenge</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="Completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedChallenges.map((challenge) => (
                <Card key={challenge.id} className="overflow-hidden flex flex-col opacity-80">
                  <div className="relative h-32">
                    <img
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-500">Completed</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-check-circle text-green-500"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                        <span>{challenge.completedDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
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
                          className="lucide lucide-star text-amber-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span>{challenge.xpReward} XP Earned</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Solution
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

