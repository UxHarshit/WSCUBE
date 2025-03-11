import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LearningInsights() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>AI Learning Insights</CardTitle>
        <CardDescription>Personalized recommendations based on your learning patterns</CardDescription>
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
            You learn best through visual content and practical exercises. We've adjusted your content to include more
            interactive elements.
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
            Your performance is highest in the morning. Consider scheduling challenging topics between 8-11 AM.
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
            You excel at problem-solving tasks. We've added more advanced challenges to help you further develop this
            skill.
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
            CSS layouts appear to be challenging for you. We've added extra practice exercises to help improve this
            skill.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

