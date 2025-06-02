"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, ChevronDown, Clock, Download, Filter, Plus, SlidersHorizontal } from "lucide-react"

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
import { Progress } from "@/components/ui/progress"

export default function DealsPage() {
  const [view, setView] = useState<"kanban" | "list">("kanban")

  const dealStages = [
    {
      id: "qualification",
      name: "Qualification",
      deals: [
        {
          id: "deal1",
          name: "Enterprise Software Solution",
          company: "Acme Inc.",
          value: 24500,
          probability: 20,
          contact: "Emma Wilson",
          dueDate: "Jun 15, 2025",
          stage: "qualification",
        },
        {
          id: "deal2",
          name: "Cloud Migration Project",
          company: "TechCorp",
          value: 18200,
          probability: 30,
          contact: "James Rodriguez",
          dueDate: "Jun 22, 2025",
          stage: "qualification",
        },
      ],
    },
    {
      id: "meeting",
      name: "Meeting",
      deals: [
        {
          id: "deal3",
          name: "Security Audit Services",
          company: "Global Solutions",
          value: 12800,
          probability: 50,
          contact: "Sophia Chen",
          dueDate: "Jun 10, 2025",
          stage: "meeting",
        },
        {
          id: "deal4",
          name: "Data Analytics Platform",
          company: "Innovate LLC",
          value: 32000,
          probability: 40,
          contact: "Michael Johnson",
          dueDate: "Jun 18, 2025",
          stage: "meeting",
        },
        {
          id: "deal5",
          name: "Mobile App Development",
          company: "NextGen Systems",
          value: 15600,
          probability: 45,
          contact: "Olivia Brown",
          dueDate: "Jun 25, 2025",
          stage: "meeting",
        },
      ],
    },
    {
      id: "proposal",
      name: "Proposal",
      deals: [
        {
          id: "deal6",
          name: "Network Infrastructure Upgrade",
          company: "Acme Inc.",
          value: 42000,
          probability: 60,
          contact: "William Davis",
          dueDate: "Jun 12, 2025",
          stage: "proposal",
        },
        {
          id: "deal7",
          name: "IT Support Contract",
          company: "TechCorp",
          value: 28400,
          probability: 70,
          contact: "Ava Martinez",
          dueDate: "Jun 20, 2025",
          stage: "proposal",
        },
      ],
    },
    {
      id: "negotiation",
      name: "Negotiation",
      deals: [
        {
          id: "deal8",
          name: "CRM Implementation",
          company: "Global Solutions",
          value: 36500,
          probability: 80,
          contact: "Sophia Chen",
          dueDate: "Jun 8, 2025",
          stage: "negotiation",
        },
      ],
    },
    {
      id: "closing",
      name: "Closing",
      deals: [
        {
          id: "deal9",
          name: "Cybersecurity Solution",
          company: "Innovate LLC",
          value: 22800,
          probability: 90,
          contact: "Michael Johnson",
          dueDate: "Jun 5, 2025",
          stage: "closing",
        },
      ],
    },
  ]

  const allDeals = dealStages.flatMap((stage) => stage.deals)

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
          <Link href="/deals" className="text-sm font-medium text-primary">
            Deals
          </Link>
          <Link href="/tasks" className="text-sm font-medium">
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
            <Download className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
          </Button>
          <Button size="sm" className="h-8">
            <Plus className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Deal</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Deals</h1>
          <div className="flex items-center gap-2">
            <Tabs
              defaultValue="kanban"
              className="w-[200px]"
              onValueChange={(value) => setView(value as "kanban" | "list")}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="kanban">Kanban</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search deals..." className="h-8 w-[250px] lg:w-[300px]" />
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
              <DropdownMenuItem>All Deals</DropdownMenuItem>
              <DropdownMenuItem>My Deals</DropdownMenuItem>
              <DropdownMenuItem>High Value ($25k+)</DropdownMenuItem>
              <DropdownMenuItem>Closing This Month</DropdownMenuItem>
              <DropdownMenuItem>High Probability (70%+)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {view === "kanban" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {dealStages.map((stage) => (
              <div key={stage.id} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{stage.name}</h3>
                  <Badge variant="outline">{stage.deals.length}</Badge>
                </div>
                <div className="flex flex-col gap-2">
                  {stage.deals.map((deal) => (
                    <Card key={deal.id} className="cursor-pointer hover:bg-muted/50">
                      <CardHeader className="p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{deal.name}</span>
                          <Badge variant="outline">${deal.value.toLocaleString()}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{deal.company}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1">
                              <Avatar className="h-5 w-5">
                                <AvatarImage src={`/placeholder.svg?height=20&width=20`} alt={deal.contact} />
                                <AvatarFallback>
                                  {deal.contact
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span>{deal.contact}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{deal.dueDate}</span>
                            </div>
                          </div>
                          <div className="mt-1">
                            <div className="flex items-center justify-between text-xs">
                              <span>Probability: {deal.probability}%</span>
                            </div>
                            <Progress value={deal.probability} className="h-1.5" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button variant="ghost" size="sm" className="justify-start gap-1 text-muted-foreground">
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add Deal</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left font-medium">Deal Name</th>
                    <th className="px-4 py-3 text-left font-medium">Company</th>
                    <th className="px-4 py-3 text-left font-medium">Stage</th>
                    <th className="px-4 py-3 text-left font-medium">Value</th>
                    <th className="px-4 py-3 text-left font-medium">Probability</th>
                    <th className="px-4 py-3 text-left font-medium">Contact</th>
                    <th className="px-4 py-3 text-left font-medium">Due Date</th>
                    <th className="px-4 py-3 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allDeals.map((deal) => (
                    <tr key={deal.id} className="border-b hover:bg-muted/50">
                      <td className="px-4 py-3">{deal.name}</td>
                      <td className="px-4 py-3">{deal.company}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{dealStages.find((stage) => stage.id === deal.stage)?.name}</Badge>
                      </td>
                      <td className="px-4 py-3">${deal.value.toLocaleString()}</td>
                      <td className="px-4 py-3">{deal.probability}%</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/placeholder.svg?height=24&width=24`} alt={deal.contact} />
                            <AvatarFallback>
                              {deal.contact
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{deal.contact}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">{deal.dueDate}</td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Deal</DropdownMenuItem>
                            <DropdownMenuItem>Edit Deal</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Move to Next Stage</DropdownMenuItem>
                            <DropdownMenuItem>Add Task</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete Deal</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
