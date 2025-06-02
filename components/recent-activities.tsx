import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "added a new contact",
    target: "Emma Wilson",
    time: "10 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "closed a deal with",
    target: "TechCorp",
    time: "1 hour ago",
  },
  {
    id: 3,
    user: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "scheduled a meeting with",
    target: "Global Solutions",
    time: "2 hours ago",
  },
  {
    id: 4,
    user: {
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "created a new task for",
    target: "Network Infrastructure Upgrade",
    time: "3 hours ago",
  },
  {
    id: 5,
    user: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "sent a proposal to",
    target: "Innovate LLC",
    time: "5 hours ago",
  },
]

export default function RecentActivities() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 text-sm">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p>
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
