"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserButton() {
  const [user] = useState({
    name: "Your Name",
    email: "sarah.j@example.com",
    level: 12,
    points: 2450,
    image: "/placeholder.svg?height=40&width=40",
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-full border p-1 pr-4 hover:bg-accent transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium">{user.name}</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Level {user.level}</span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{user.points} XP</span>
            </div>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a href="/profile">Profile</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/achievements">Achievements</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/learning-path">Learning Path</a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href="/settings">Settings</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

