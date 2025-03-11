import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function LearningPath() {
  const modules = [
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
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Your Learning Path</CardTitle>
        <CardDescription>Personalized roadmap based on your goals and progress</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {modules.map((module, index) => (
            <div key={module.id} className="flex items-start mb-6 last:mb-0">
              <div className="flex flex-col items-center mr-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
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
                      width="16"
                      height="16"
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
                {index < modules.length - 1 && (
                  <div className={`w-0.5 h-12 ${module.status === "completed" ? "bg-primary" : "bg-muted"}`}></div>
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
                    <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
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
  )
}

