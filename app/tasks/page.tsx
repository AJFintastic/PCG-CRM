"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, Check, ChevronDown, Clock, Filter, Plus, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function TasksPage() {
  const [view, setView] = useState<"list" | "calendar">("list")

  const tasks = [
    {
      id: "task1",
      title: "Follow up with Emma Wilson",
      description: "Send proposal for Enterprise Software Solution",
      dueDate: "Jun 5, 2025",
      priority: "High",
      status: "To Do",
      relatedTo: {
        type: "Contact",
        name: "Emma Wilson",
        company: "Acme Inc.",
      },
    },
    {
      id: "task2",
      title: "Prepare presentation for TechCorp meeting",
      description: "Create slides for Cloud Migration Project proposal",
      dueDate: "Jun 8, 2025",
      priority: "High",
      status: "In Progress",
      relatedTo: {
        type: "Deal",
        name: "Cloud Migration Project",
        company: "TechCorp",
      },
    },
    {
      id: "task3",
      title: "Send security audit questionnaire",
      description: "Email security assessment form to Global Solutions team",
      dueDate: "Jun 6, 2025",
      priority: "Medium",
      status: "To Do",
      relatedTo: {
        type: "Deal",
        name: "Security Audit Services",
        company: "Global Solutions",
      },
    },
    {
      id: "task4",
      title: "Schedule demo with Michael Johnson",
      description: "Demo of Data Analytics Platform features",
      dueDate: "Jun 10, 2025",
      priority: "Medium",
      status: "To Do",
      relatedTo: {
        type: "Contact",
        name: "Michael Johnson",
        company: "Innovate LLC",
      },
    },
    {
      id: "task5",
      title: "Review contract with legal team",
      description: "Final review of Network Infrastructure Upgrade contract",
      dueDate: "Jun 7, 2025",
      priority: "High",
      status: "In Progress",
      relatedTo: {
        type: "Deal",
        name: "Network Infrastructure Upgrade",
        company: "Acme Inc.",
      },
    },
    {
      id: "task6",
      title: "Send follow-up email to Olivia Brown",
      description: "Check interest in Mobile App Development proposal",
      dueDate: "Jun 12, 2025",
      priority: "Low",
      status: "To Do",
      relatedTo: {
        type: "Contact",
        name: "Olivia Brown",
        company: "NextGen Systems",
      },
    },
    {
      id: "task7",
      title: "Prepare quote for IT Support Contract",
      description: "Finalize pricing and service levels",
      dueDate: "Jun 9, 2025",
      priority: "Medium",
      status: "To Do",
      relatedTo: {
        type: "Deal",
        name: "IT Support Contract",
        company: "TechCorp",
      },
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>CRM Pro</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium">
            Dashboard
          </Link>
          <Link href="/contacts" className="text-sm font-medium">
            Contacts
          </Link>
          <Link href="/deals" className="text-sm font-medium">
            Deals
          </Link>
          <Link href="/tasks" className="text-sm font-medium text-primary">
            Tasks
          </Link>
          <Link href="/emails" className="text-sm font-medium">
            Emails
          </Link>
          <Link href="/reports" className="text-sm font-medium">
            Reports
          </Link>
          <Link href="/settings" className="text-sm font-medium">
            Settings
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4 md:flex-initial">
          <Button variant="outline" size="sm" className="h-8">
            <Calendar className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">View Calendar</span>
          </Button>
          <Button size="sm" className="h-8">
            <Plus className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Task</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Tasks</h1>
          <div className="flex items-center gap-2">
            <Tabs
              defaultValue="list"
              className="w-[200px]"
              onValueChange={(value) => setView(value as "list" | "calendar")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">List</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search tasks..." className="h-8 w-[250px] lg:w-[300px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>View</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>All Tasks</DropdownMenuItem>
              <DropdownMenuItem>My Tasks</DropdownMenuItem>
              <DropdownMenuItem>High Priority</DropdownMenuItem>
              <DropdownMenuItem>Due Today</DropdownMenuItem>
              <DropdownMenuItem>Overdue</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {view === "list" ? (
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="w-[40px] px-4 py-3 text-left font-medium"></th>
                    <th className="px-4 py-3 text-left font-medium">Task</th>
                    <th className="px-4 py-3 text-left font-medium">Due Date</th>
                    <th className="px-4 py-3 text-left font-medium">Priority</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-left font-medium">Related To</th>
                    <th className="px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr key={task.id} className="border-b hover:bg-muted/50">
                      <td className="px-4 py-3">
                        <Checkbox />
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.description}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{task.dueDate}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{task.status}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={task.relatedTo.name} />
                            <AvatarFallback>
                              {task.relatedTo.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{task.relatedTo.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {task.relatedTo.type} • {task.relatedTo.company}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit Task</DropdownMenuItem>
                            <DropdownMenuItem>
                              <Check className="mr-2 h-4 w-4" />
                              Mark as Complete
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Set Reminder</DropdownMenuItem>
                            <DropdownMenuItem>Assign to Team Member</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete Task</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        ) : (
          <Card className="p-4">
            <CardHeader className="px-0 pt-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">June 2025</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Today
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <div className="grid grid-cols-7 gap-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center font-medium">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={`empty-start-${i}`} className="h-32 border p-1 text-muted-foreground">
                    <div className="text-right">{i + 30}</div>
                  </div>
                ))}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={`day-${i}`} className={`h-32 border p-1 ${i + 1 === 5 ? "bg-muted/50" : ""}`}>
                    <div className="text-right">{i + 1}</div>
                    {i + 1 === 5 && (
                      <div className="mt-1 rounded bg-red-100 p-1 text-xs text-red-800">
                        <div className="font-medium">Follow up with Emma Wilson</div>
                        <div>9:00 AM</div>
                      </div>
                    )}
                    {i + 1 === 6 && (
                      <div className="mt-1 rounded bg-yellow-100 p-1 text-xs text-yellow-800">
                        <div className="font-medium">Send security audit questionnaire</div>
                        <div>2:00 PM</div>
                      </div>
                    )}
                    {i + 1 === 7 && (
                      <div className="mt-1 rounded bg-red-100 p-1 text-xs text-red-800">
                        <div className="font-medium">Review contract with legal team</div>
                        <div>11:00 AM</div>
                      </div>
                    )}
                    {i + 1 === 8 && (
                      <div className="mt-1 rounded bg-red-100 p-1 text-xs text-red-800">
                        <div className="font-medium">Prepare presentation for TechCorp</div>
                        <div>10:00 AM</div>
                      </div>
                    )}
                    {i + 1 === 9 && (
                      <div className="mt-1 rounded bg-yellow-100 p-1 text-xs text-yellow-800">
                        <div className="font-medium">Prepare quote for IT Support</div>
                        <div>3:00 PM</div>
                      </div>
                    )}
                    {i + 1 === 10 && (
                      <div className="mt-1 rounded bg-yellow-100 p-1 text-xs text-yellow-800">
                        <div className="font-medium">Schedule demo with Michael</div>
                        <div>1:00 PM</div>
                      </div>
                    )}
                    {i + 1 === 12 && (
                      <div className="mt-1 rounded bg-green-100 p-1 text-xs text-green-800">
                        <div className="font-medium">Send follow-up email to Olivia</div>
                        <div>4:00 PM</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
