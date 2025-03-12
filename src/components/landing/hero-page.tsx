import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LandingNavbar } from "./landing-nav"
import { LandingFooter } from "./landing-footer"
import imgdash from "../../assets/main-board.png?url"
import profile from "../../assets/profile-user.png?url"


export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className=" relative z-10 px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <Badge className="mb-4">AI-Powered Learning</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Learn Faster with <span className="text-primary">Personalized</span> Gamified Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            WSCube combines AI-powered personalization with game mechanics to create a learning experience that adapts
            to your unique style and keeps you motivated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="/signup">Get Started Free</a>
            </Button>
            {/* <Button size="lg" variant="outline" asChild>
              <a href="/learn/demo">Try Demo</a>
            </Button> */}
          </div>

          <div className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-70" />
            <img
              src={imgdash}
              alt="WSCube Dashboard"
              className="relative rounded-lg border shadow-xl w-250"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How WSCube Transforms Learning</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven gamification techniques to make learning effective and
              enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
                    className="lucide lucide-brain-circuit text-primary"
                  >
                    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                    <path d="M16 8V5c0-1.1.9-2 2-2" />
                    <path d="M12 13h4" />
                    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                    <path d="M12 8h8" />
                    <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                    <path d="M18.5 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Personalization</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your learning style, strengths, and areas for improvement to create a personalized
                  learning path just for you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
                <h3 className="text-xl font-bold mb-2">Gamified Experience</h3>
                <p className="text-muted-foreground">
                  Earn points, badges, and climb leaderboards as you learn. Our gamification elements keep you motivated
                  and engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/20">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
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
                    className="lucide lucide-target text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptive Challenges</h3>
                <p className="text-muted-foreground">
                  Face challenges that adapt to your skill level, ensuring you're always in the optimal learning
                  zone—not too easy, not too hard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" id="howitwork">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform makes learning effective and engaging through a simple process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and tell us about your learning goals and preferences.",
                icon: (
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
                    className="lucide lucide-user-plus text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="22" x2="16" y1="11" y2="11" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Take Assessment",
                description:
                  "Complete a brief assessment so our AI can understand your learning style and current knowledge.",
                icon: (
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
                    className="lucide lucide-clipboard-check text-primary"
                  >
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Get Personalized Path",
                description: "Receive a customized learning path designed specifically for your needs and goals.",
                icon: (
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
                    className="lucide lucide-route text-primary"
                  >
                    <circle cx="6" cy="19" r="3" />
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                    <circle cx="18" cy="5" r="3" />
                  </svg>
                ),
              },
              {
                step: "4",
                title: "Learn & Earn",
                description: "Start learning while earning points, badges, and climbing the leaderboard.",
                icon: (
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
                    className="lucide lucide-medal text-primary"
                  >
                    <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                    <path d="M11 12 5.12 2.2" />
                    <path d="m13 12 5.88-9.8" />
                    <path d="M8 7h8" />
                    <circle cx="12" cy="17" r="5" />
                    <path d="M12 18v-2h-.5" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-20">
        <div className="px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied learners who have transformed their skills with WSCube
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Harshit Katheria",
                role: "Backend & AI",
                image: {profile},
                quote:
                  "The personalized learning path helped me focus on exactly what I needed to improve. I've made more progress in 3 months than in a year of traditional learning.",
              },
              {
                name: "Ayush Keserwani",
                role: "UX Designer & Frontend",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The gamification elements kept me motivated. Earning badges and seeing my progress on the leaderboard made learning fun and competitive in a healthy way.",
              },
              {
                name: "Ashutosh Maurya",
                role: "Frontend & AI",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The AI-powered assessments were spot on. They identified my weak areas and adjusted the content to help me improve. It felt like having a personal tutor.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                      <img
                        src={profile}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-quote text-primary/20 mb-4"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-muted-foreground">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 z-0" />
        <div className="relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are achieving their goals faster with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/signup">Get Started Free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  )
}

