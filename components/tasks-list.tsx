import { Check, Clock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const tasks = [
  {
    id: "task1",
    title: "Follow up with Emma Wilson",
    dueDate: "Today, 2:00 PM",
    priority: "High",
    assignee: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "task2",
    title: "Prepare presentation for TechCorp meeting",
    dueDate: "Today, 4:00 PM",
    priority: "High",
    assignee: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "task3",
    title: "Send security audit questionnaire",
    dueDate: "Tomorrow, 10:00 AM",
    priority: "Medium",
    assignee: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: "task4",
    title: "Schedule demo with Michael Johnson",
    dueDate: "Tomorrow, 1:00 PM",
    priority: "Medium",
    assignee: {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
]

export default function TasksList() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <Checkbox id={task.id} className="mt-1" />
            <div>
              <label htmlFor={task.id} className="font-medium cursor-pointer">
                {task.title}
              </label>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{task.dueDate}</span>
                <Badge
                  variant="outline"
                  className={
                    task.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : task.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
              <AvatarFallback>
                {task.assignee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Check className="h-4 w-4" />
              <span className="sr-only">Mark as complete</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
