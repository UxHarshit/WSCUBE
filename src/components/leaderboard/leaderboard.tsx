import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import WScubeLogo from "../../assets/wscube-logo.svg?url"

export default function LeaderboardPage() {
  const leaderboardPeriods = ["Weekly", "Monthly", "All Time"]

  const users = [
    {
      id: 1,
      name: "Harshit Katheria",
      image: "/placeholder.svg?height=40&width=40",
      points: 3450,
      level: 18,
      badges: 12,
      streak: 24,
      rank: 1,
      change: "up",
    },
    {
      id: 2,
      name: "Ashutosh Maurya",
      image: "/placeholder.svg?height=40&width=40",
      points: 3280,
      level: 17,
      badges: 10,
      streak: 32,
      rank: 2,
      change: "same",
    },
    {
      id: 3,
      name: "Ayush Kesarwani",
      image: "/placeholder.svg?height=40&width=40",
      points: 3150,
      level: 16,
      badges: 9,
      streak: 18,
      rank: 3,
      change: "up",
    },
    {
      id: 4,
      name: "Om Sharma",
      image: "/placeholder.svg?height=40&width=40",
      points: 2450,
      level: 12,
      badges: 7,
      streak: 12,
      rank: 4,
      change: "down",
    },
    {
      id: 5,
      name: "Akshay Saini",
      image: "/placeholder.svg?height=40&width=40",
      points: 2320,
      level: 11,
      badges: 6,
      streak: 8,
      rank: 5,
      change: "up",
    },
    {
      id: 6,
      name: "Lakshay Saini",
      image: "/placeholder.svg?height=40&width=40",
      points: 2180,
      level: 10,
      badges: 5,
      streak: 14,
      rank: 6,
      change: "down",
    },
    {
      id: 7,
      name: "Rishabh Bharadwaj",
      image: "/placeholder.svg?height=40&width=40",
      points: 2050,
      level: 9,
      badges: 4,
      streak: 7,
      rank: 7,
      change: "same",
    },
    {
      id: 8,
      name: "Aman Kumar Sharma",
      image: "/placeholder.svg?height=40&width=40",
      points: 1920,
      level: 8,
      badges: 3,
      streak: 5,
      rank: 8,
      change: "up",
    },
    {
      id: 9,
      name: "Ritik Kumar",
      image: "/placeholder.svg?height=40&width=40",
      points: 1780,
      level: 7,
      badges: 2,
      streak: 3,
      rank: 9,
      change: "down",
    },
    {
      id: 10,
      name: "Rishabh Yadav",
      image: "/placeholder.svg?height=40&width=40",
      points: 1650,
      level: 6,
      badges: 1,
      streak: 2,
      rank: 10,
      change: "same",
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
              <a href="/leaderboard" className="text-foreground font-medium transition-colors">
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
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">See how you rank against other learners</p>
        </div>

        <Tabs defaultValue="Weekly" className="mb-6">
          <TabsList>
            {leaderboardPeriods.map((period) => (
              <TabsTrigger key={period} value={period}>
                {period}
              </TabsTrigger>
            ))}
          </TabsList>
          {leaderboardPeriods.map((period) => (
            <TabsContent key={period} value={period}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>{period} Leaderboard</CardTitle>
                  <CardDescription>Top performers for the {period.toLowerCase()} period</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Top 3 Users */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6">
                      {/* 2nd Place */}
                      <div className="order-2 md:order-1 flex flex-col items-center">
                        <div className="relative">
                          <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            2
                          </div>
                          <Avatar className="h-24 w-24 border-4 border-secondary">
                            <AvatarImage src={users[1].image} alt={users[1].name} />
                            <AvatarFallback>{users[1].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <h3 className="font-medium mt-2">{users[1].name}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span className="text-sm">Level {users[1].level}</span>
                          <span>•</span>
                          <span className="text-sm">{users[1].points} XP</span>
                        </div>
                      </div>

                      {/* 1st Place */}
                      <div className="order-1 md:order-2 flex flex-col items-center">
                        <div className="relative">
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
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
                              className="lucide lucide-crown text-amber-500"
                            >
                              <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                            </svg>
                          </div>
                          <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            1
                          </div>
                          <Avatar className="h-32 w-32 border-4 border-primary">
                            <AvatarImage src={users[0].image} alt={users[0].name} />
                            <AvatarFallback>{users[0].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <h3 className="font-bold text-lg mt-2">{users[0].name}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span className="text-sm">Level {users[0].level}</span>
                          <span>•</span>
                          <span className="text-sm">{users[0].points} XP</span>
                        </div>
                        <Badge className="mt-2">Top Performer</Badge>
                      </div>

                      {/* 3rd Place */}
                      <div className="order-3 flex flex-col items-center">
                        <div className="relative">
                          <div className="absolute -top-3 -right-3 bg-muted text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            3
                          </div>
                          <Avatar className="h-24 w-24 border-4 border-muted">
                            <AvatarImage src={users[2].image} alt={users[2].name} />
                            <AvatarFallback>{users[2].name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <h3 className="font-medium mt-2">{users[2].name}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <span className="text-sm">Level {users[2].level}</span>
                          <span>•</span>
                          <span className="text-sm">{users[2].points} XP</span>
                        </div>
                      </div>
                    </div>

                    {/* Leaderboard Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium">Rank</th>
                            <th className="text-left py-3 px-4 font-medium">User</th>
                            <th className="text-right py-3 px-4 font-medium">Level</th>
                            <th className="text-right py-3 px-4 font-medium">XP</th>
                            <th className="text-right py-3 px-4 font-medium">Badges</th>
                            <th className="text-right py-3 px-4 font-medium">Streak</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.slice(3).map((user) => (
                            <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-1">
                                  <span className="font-medium">{user.rank}</span>
                                  {user.change === "up" && (
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
                                      className="lucide lucide-trending-up text-green-500"
                                    >
                                      <path d="m22 7-8.5 8.5-5-5L2 17" />
                                      <path d="M16 7h6v6" />
                                    </svg>
                                  )}
                                  {user.change === "down" && (
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
                                      className="lucide lucide-trending-down text-red-500"
                                    >
                                      <path d="m22 17-8.5-8.5-5 5L2 7" />
                                      <path d="M16 17h6v-6" />
                                    </svg>
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.image} alt={user.name} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <span>{user.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-right">{user.level}</td>
                              <td className="py-3 px-4 text-right font-medium">{user.points}</td>
                              <td className="py-3 px-4 text-right">{user.badges}</td>
                              <td className="py-3 px-4 text-right">
                                <div className="flex items-center justify-end gap-1">
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
                                  <span>{user.streak}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
}

