import { UserButton } from "./user-button";
import { AchievementBanner } from "./achivement-banner";
import { DashboardStats } from "./dashboard-stats";
import { LearningPath } from "./learning-path";
import { RecommendedCourses } from "./recommended-course";
import { DailyChallenge } from "./daily-chalange";
import { LearningInsights } from "./learning-insights";
export default function Landing() {
    return (
        <div className="min-h-screen flex flex-col w-full bg-background">
            <header className="border-b w-full">
                <div className="flex h-16 items-center justify-between px-4  ">
                    <div className="flex items-center gap-6">
                        <a href="/" className="flex items-center gap-2">
                            <img className="object-contain "
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvxpW3pGLpn7Ebs_Thx4KuK97WMXdnPysYSvhigTyKKiYXL7EX1cuGgnmp3Gt0cLgpUo&usqp=CAU" width={32} height={32} alt="WSCube" />
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
                            <a href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                                Community
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="/notifications" className="relative">
                            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-primary-foreground">
                                3
                            </span>
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
                                className="lucide lucide-bell"
                            >
                                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                            </svg>
                        </a>
                        <UserButton />
                    </div>
                </div>
            </header>

            <main className="flex flex-col px-4 py-6">
                <AchievementBanner />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="md:col-span-2 space-y-6">
                        <DashboardStats />
                        <LearningPath />
                        <RecommendedCourses />
                    </div>
                    <div className="space-y-6">
                        <DailyChallenge />
                        <LearningInsights />
                    </div>
                </div>
            </main>

        </div>
    );
}
