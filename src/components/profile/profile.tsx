import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function ProfilePage() {
  const profileTabs = ["Overview", "Achievements", "Learning Path", "Stats"]

  const user = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    image: "/placeholder.svg?height=100&width=100",
    level: 12,
    points: 2450,
    nextLevel: 3000,
    progress: 82,
    joinDate: "March 2023",
    streak: 12,
    totalCourses: 8,
    completedCourses: 5,
    totalChallenges: 42,
    completedChallenges: 36,
    bio: "Frontend developer passionate about creating intuitive user experiences. Always eager to learn new technologies and improve my skills.",
  }

  const badges = [
    {
      id: 1,
      name: "Fast Learner",
      description: "Completed 5 courses in the first month",
      image: "/placeholder.svg?height=60&width=60",
      earned: "April 2023",
    },
    {
      id: 2,
      name: "Problem Solver",
      description: "Solved 20 coding challenges",
      image: "/placeholder.svg?height=60&width=60",
      earned: "May 2023",
    },
    {
      id: 3,
      name: "Team Player",
      description: "Helped 10 other students in the community",
      image: "/placeholder.svg?height=60&width=60",
      earned: "June 2023",
    },
    {
      id: 4,
      name: "Consistency Champion",
      description: "Maintained a 10-day learning streak",
      image: "/placeholder.svg?height=60&width=60",
      earned: "July 2023",
    },
    {
      id: 5,
      name: "JavaScript Guru",
      description: "Mastered advanced JavaScript concepts",
      image: "/placeholder.svg?height=60&width=60",
      earned: "August 2023",
    },
    {
      id: 6,
      name: "CSS Wizard",
      description: "Created 5 complex layouts with CSS",
      image: "/placeholder.svg?height=60&width=60",
      earned: "September 2023",
    },
  ]

  const learningStats = [
    {
      title: "Hours Spent Learning",
      value: "87",
      change: "+12% from last month",
      trend: "up",
    },
    {
      title: "Challenges Completed",
      value: "36",
      change: "+8% from last month",
      trend: "up",
    },
    {
      title: "Average Quiz Score",
      value: "92%",
      change: "+5% from last month",
      trend: "up",
    },
    {
      title: "Community Contributions",
      value: "14",
      change: "-3% from last month",
      trend: "down",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
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
              {/* <a href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </a> */}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6">
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-bold">
                    Lvl {user.level}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">{user.email}</p>
                  <p className="mt-2 text-sm">{user.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                    <Badge variant="outline">Frontend Developer</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">CSS</Badge>
                  </div>
                </div>
                <div className="w-full md:w-48 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Level Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {user.points}/{user.nextLevel}
                    </span>
                  </div>
                  <Progress value={user.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                        className="lucide lucide-calendar"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>Joined {user.joinDate}</span>
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
                        className="lucide lucide-flame text-amber-500"
                      >
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                      </svg>
                      <span>{user.streak} day streak</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Edit Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="Overview" className="mb-6">
          <TabsList className="w-full">
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab} value={tab} className="flex-1">
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Summary</CardTitle>
                  <CardDescription>Your learning journey at a glance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Courses Completed</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {user.completedCourses}/{user.totalCourses}
                        </span>
                        <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${(user.completedCourses / user.totalCourses) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Challenges Completed</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {user.completedChallenges}/{user.totalChallenges}
                        </span>
                        <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${(user.completedChallenges / user.totalChallenges) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Badges Earned</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{badges.length}/12</span>
                        <div className="w-20 h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${(badges.length / 12) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Current Streak</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{user.streak} days</span>
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
                          className="lucide lucide-flame text-amber-500"
                        >
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Your latest accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {badges.slice(0, 3).map((badge) => (
                      <div key={badge.id} className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <img src={"https://placehold.co/600x400"} alt={badge.name} className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{badge.name}</h4>
                          <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                        <div className="text-xs text-muted-foreground">{badge.earned}</div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All Achievements
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="Achievements">
            <Card>
              <CardHeader>
                <CardTitle>Your Badges</CardTitle>
                <CardDescription>Achievements you've earned on your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center text-center p-4 rounded-lg border hover:bg-accent transition-colors"
                    >
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <img src={badge.image || "/placeholder.svg"} alt={badge.name} className="h-10 w-10" />
                      </div>
                      <h4 className="font-medium">{badge.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                      <div className="mt-2 text-xs text-muted-foreground">Earned: {badge.earned}</div>
                    </div>
                  ))}
                  {/* Locked badges */}
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={`locked-${i}`}
                      className="flex flex-col items-center text-center p-4 rounded-lg border opacity-50"
                    >
                      <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-3">
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
                          className="lucide lucide-lock text-muted-foreground"
                        >
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <h4 className="font-medium">Locked Badge</h4>
                      <p className="text-xs text-muted-foreground mt-1">Keep learning to unlock this achievement</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Learning Path">
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Path</CardTitle>
                <CardDescription>Personalized roadmap based on your goals and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {[
                    {
                      id: 1,
                      title: "Introduction to Web Development",
                      progress: 100,
                      status: "completed",
                      xp: 250,
                    },
                    {
                      id: 2,
                      title: "HTML & CSS Fundamentals",
                      progress: 100,
                      status: "completed",
                      xp: 300,
                    },
                    {
                      id: 3,
                      title: "JavaScript Basics",
                      progress: 75,
                      status: "in-progress",
                      xp: 200,
                    },
                    {
                      id: 4,
                      title: "Building Interactive Websites",
                      progress: 0,
                      status: "locked",
                      xp: 350,
                    },
                    {
                      id: 5,
                      title: "Introduction to React",
                      progress: 0,
                      status: "locked",
                      xp: 400,
                    },
                    {
                      id: 6,
                      title: "Advanced React Patterns",
                      progress: 0,
                      status: "locked",
                      xp: 450,
                    },
                    {
                      id: 7,
                      title: "Building Full-Stack Applications",
                      progress: 0,
                      status: "locked",
                      xp: 500,
                    },
                  ].map((module, index, array) => (
                    <div key={module.id} className="flex items-start mb-8 last:mb-0">
                      <div className="flex flex-col items-center mr-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                            module.status === "completed"
                              ? "bg-primary text-primary-foreground"
                              : module.status === "in-progress"
                                ? "bg-primary/20 text-primary border-2 border-primary"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {module.status === "completed" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
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
                            index + 1
                          )}
                        </div>
                        {index < array.length - 1 && (
                          <div
                            className={`w-0.5 h-16 ${module.status === "completed" ? "bg-primary" : "bg-muted"}`}
                          ></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium">{module.title}</h4>
                          <Badge
                            variant={
                              module.status === "completed"
                                ? "default"
                                : module.status === "in-progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {module.status === "completed"
                              ? "Completed"
                              : module.status === "in-progress"
                                ? "In Progress"
                                : "Locked"}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 rounded-full bg-muted overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: `${module.progress}%` }}></div>
                            </div>
                            <span className="text-xs text-muted-foreground">{module.progress}%</span>
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
                            <span className="text-xs">{module.xp} XP</span>
                          </div>
                        </div>
                        {module.status === "in-progress" && (
                          <Button size="sm" className="mt-2">
                            Continue Learning
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Statistics</CardTitle>
                  <CardDescription>Your performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {learningStats.map((stat, index) => (
                      <div key={index} className="p-4 rounded-lg border">
                        <h4 className="text-sm text-muted-foreground">{stat.title}</h4>
                        <div className="text-2xl font-bold mt-1">{stat.value}</div>
                        <div
                          className={`flex items-center gap-1 mt-1 text-xs ${
                            stat.trend === "up" ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {stat.trend === "up" ? (
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
                              className="lucide lucide-trending-up"
                            >
                              <path d="m22 7-8.5 8.5-5-5L2 17" />
                              <path d="M16 7h6v6" />
                            </svg>
                          ) : (
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
                              className="lucide lucide-trending-down"
                            >
                              <path d="m22 17-8.5-8.5-5 5L2 7" />
                              <path d="M16 17h6v-6" />
                            </svg>
                          )}
                          <span>{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Insights</CardTitle>
                  <CardDescription>AI-powered analysis of your learning patterns</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-md bg-primary/10 border border-primary/20">
                    <h4 className="font-medium text-sm flex items-center gap-2">
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
                        className="lucide lucide-lightbulb text-primary"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                      Learning Style
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      You learn best through visual content and practical exercises. We've adjusted your content to
                      include more interactive elements.
                    </p>
                  </div>

                  <div className="p-3 rounded-md bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-medium text-sm flex items-center gap-2">
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
                        className="lucide lucide-timer text-amber-500"
                      >
                        <path d="M10 2h4" />
                        <path d="M12 14v-4" />
                        <path d="M12 14v-4" />
                        <circle cx="12" cy="14" r="8" />
                      </svg>
                      Optimal Study Time
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your performance is highest in the morning. Consider scheduling challenging topics between 8-11
                      AM.
                    </p>
                  </div>

                  <div className="p-3 rounded-md bg-green-500/10 border border-green-500/20">
                    <h4 className="font-medium text-sm flex items-center gap-2">
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
                        className="lucide lucide-trending-up text-green-500"
                      >
                        <path d="m22 7-8.5 8.5-5-5L2 17" />
                        <path d="M16 7h6v6" />
                      </svg>
                      Strength Area
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      You excel at problem-solving tasks. We've added more advanced challenges to help you further
                      develop this skill.
                    </p>
                  </div>

                  <div className="p-3 rounded-md bg-red-500/10 border border-red-500/20">
                    <h4 className="font-medium text-sm flex items-center gap-2">
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
                        className="lucide lucide-target text-red-500"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                      Focus Area
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      CSS layouts appear to be challenging for you. We've added extra practice exercises to help improve
                      this skill.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

