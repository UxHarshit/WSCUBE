import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WScubeLogo from "../../assets/wscube-logo.svg?url"

export default function CoursesPage() {
  const categories = ["All Courses", "Web Development", "Mobile Development", "Data Science", "UI/UX Design", "DevOps"]

  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript Patterns",
      description: "Master design patterns and advanced concepts in JavaScript.",
      image: "https://placehold.co/400x200",
      level: "Advanced",
      duration: "4 weeks",
      match: "98% match",
      tags: ["JavaScript", "Programming", "Web Development"],
      enrolled: 1245,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Data Visualization with D3.js",
      description: "Create interactive data visualizations for the web.",
      image: "https://placehold.co/400x200",
      level: "Intermediate",
      duration: "3 weeks",
      match: "95% match",
      tags: ["Data", "Visualization", "JavaScript"],
      enrolled: 987,
      rating: 4.7,
    },
    {
      id: 3,
      title: "React Performance Optimization",
      description: "Learn techniques to optimize React applications for speed.",
      image: "https://placehold.co/400x200",
      level: "Intermediate",
      duration: "2 weeks",
      match: "92% match",
      tags: ["React", "Performance", "Web Development"],
      enrolled: 1532,
      rating: 4.9,
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      description: "Learn the fundamentals of machine learning algorithms and applications.",
      image: "https://placehold.co/400x200",
      level: "Beginner",
      duration: "6 weeks",
      match: "85% match",
      tags: ["Machine Learning", "AI", "Data Science"],
      enrolled: 2156,
      rating: 4.6,
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile applications with Flutter and Dart.",
      image: "https://placehold.co/400x200",
      level: "Intermediate",
      duration: "5 weeks",
      match: "78% match",
      tags: ["Flutter", "Mobile", "Dart"],
      enrolled: 1876,
      rating: 4.5,
    },
    {
      id: 6,
      title: "DevOps Fundamentals",
      description: "Learn the principles and practices of DevOps engineering.",
      image: "https://placehold.co/400x200",
      level: "Intermediate",
      duration: "4 weeks",
      match: "82% match",
      tags: ["DevOps", "CI/CD", "Cloud"],
      enrolled: 1432,
      rating: 4.7,
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
              <a href="/courses" className="text-foreground font-medium transition-colors">
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

      <main className="flex flex-col px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Courses</h1>
            <p className="text-muted-foreground">Discover courses tailored to your learning style and goals</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
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
                className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input className="w-full md:w-[300px] pl-10" placeholder="Search courses..." />
            </div>
          </div>
        </div>

        <Tabs defaultValue="All Courses" className="mb-6">
          <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col">
              <div className="relative h-48">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-2 right-2">{course.match}</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
                      className="lucide lucide-signal-medium"
                    >
                      <path d="M6 15h4" />
                      <path d="M10 3v18" />
                      <path d="M14 9h4" />
                      <path d="M18 6v12" />
                    </svg>
                    <span>{course.level}</span>
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
                      className="lucide lucide-clock"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{course.duration}</span>
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
                      className="lucide lucide-users text-amber-500"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>{course.enrolled}</span>
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
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

