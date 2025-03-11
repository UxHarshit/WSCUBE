import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DashboardStats() {
  const stats = [
    {
      title: "Weekly Progress",
      value: "75%",
      description: "5 of 7 days active",
      progress: 75,
    },
    {
      title: "Points Earned",
      value: "450",
      description: "This week",
      progress: 65,
    },
    {
      title: "Streak",
      value: "12",
      description: "Days in a row",
      progress: 85,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{stat.title}</CardTitle>
            <CardDescription>{stat.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <Progress value={stat.progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

