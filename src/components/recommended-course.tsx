// import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecommendedCourses() {
  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Patterns",
      description: "Master design patterns and advanced concepts in JavaScript.",
      image: "https://placehold.co/200x100?text=1",
      level: "Advanced",
      duration: "4 weeks",
      match: "98% match",
      tags: ["JavaScript", "Programming", "Web Development"],
    },
    {
      id: 2,
      title: "Data Visualization with D3.js",
      description: "Create interactive data visualizations for the web.",
      image: "https://placehold.co/200x100?text=2",
      level: "Intermediate",
      duration: "3 weeks",
      match: "95% match",
      tags: ["Data", "Visualization", "JavaScript"],
    },
    {
      id: 3,
      title: "React Performance Optimization",
      description: "Learn techniques to optimize React applications for speed.",
      image: "https://placehold.co/200x100?text=3",
      level: "Intermediate",
      duration: "2 weeks",
      match: "92% match",
      tags: ["React", "Performance", "Web Development"],
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recommended For You</CardTitle>
          <a href="/courses" className="text-sm text-primary hover:underline">
            View all
          </a>
        </div>
        <CardDescription>AI-powered recommendations based on your learning style and goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="flex gap-4 p-3 rounded-lg hover:bg-accent transition-colors">
            <div className="relative min-w-[100px] h-[60px] rounded-md overflow-hidden">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
              <Badge className="absolute top-1 right-1 text-[10px]">{course.match}</Badge>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{course.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-1">{course.description}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{course.level}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{course.duration}</span>
              </div>
            </div>
            <Button size="sm" variant="outline" className="self-center">
              Enroll
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

