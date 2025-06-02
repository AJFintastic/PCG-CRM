"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Archive,
  BarChart3,
  ChevronDown,
  Clock,
  Filter,
  Inbox,
  Mail,
  MailPlus,
  MessageSquare,
  Paperclip,
  SlidersHorizontal,
  Star,
  StarOff,
  Trash2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EmailsPage() {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("inbox")

  const emails = [
    {
      id: "email1",
      from: {
        name: "Emma Wilson",
        email: "emma.wilson@acmeinc.com",
        company: "Acme Inc.",
      },
      subject: "Enterprise Software Solution Proposal",
      preview:
        "Hi there, I've attached the proposal for the Enterprise Software Solution we discussed in our meeting last week. Please review and let me know if you have any questions or if you'd like to schedule a follow-up call to discuss further.",
      date: "10:23 AM",
      read: false,
      starred: true,
      hasAttachment: true,
      folder: "inbox",
    },
    {
      id: "email2",
      from: {
        name: "James Rodriguez",
        email: "james.r@techcorp.com",
        company: "TechCorp",
      },
      subject: "Re: Cloud Migration Project Timeline",
      preview:
        "Thanks for sending over the timeline. Our team has reviewed it and we have a few questions about the migration phases. Could we schedule a call tomorrow to discuss the details? I'm available between 2-4pm.",
      date: "Yesterday",
      read: true,
      starred: false,
      hasAttachment: false,
      folder: "inbox",
    },
    {
      id: "email3",
      from: {
        name: "Sophia Chen",
        email: "sophia.c@globalsolutions.com",
        company: "Global Solutions",
      },
      subject: "Security Audit Services - Questions",
      preview:
        "Hello, We've reviewed your security audit proposal and have a few questions about the scope and methodology. Specifically, we're wondering about how you handle cloud infrastructure assessment and compliance with GDPR requirements.",
      date: "May 21",
      read: true,
      starred: false,
      hasAttachment: false,
      folder: "inbox",
    },
    {
      id: "email4",
      from: {
        name: "Michael Johnson",
        email: "michael.j@innovatellc.com",
        company: "Innovate LLC",
      },
      subject: "Data Analytics Platform Demo Request",
      preview:
        "I'd like to schedule a demo of your data analytics platform for our team next week. We're particularly interested in the reporting features and integration capabilities with our existing systems. Would you have availability on Tuesday or Wednesday?",
      date: "May 20",
      read: false,
      starred: true,
      hasAttachment: false,
      folder: "inbox",
    },
    {
      id: "email5",
      from: {
        name: "Olivia Brown",
        email: "olivia.b@nextgensystems.com",
        company: "NextGen Systems",
      },
      subject: "Mobile App Development Proposal",
      preview:
        "Thank you for sending the proposal for our mobile app development project. I've shared it with our team and we're impressed with your approach. We'd like to discuss a few aspects of the technical implementation before moving forward.",
      date: "May 19",
      read: true,
      starred: false,
      hasAttachment: true,
      folder: "inbox",
    },
    {
      id: "email6",
      from: {
        name: "William Davis",
        email: "william.d@acmeinc.com",
        company: "Acme Inc.",
      },
      subject: "Network Infrastructure Upgrade Contract",
      preview:
        "I've attached the revised contract for the network infrastructure upgrade project. Our legal team has made a few minor adjustments to the terms. Please review and let me know if these changes are acceptable or if you'd like to discuss further.",
      date: "May 18",
      read: true,
      starred: false,
      hasAttachment: true,
      folder: "inbox",
    },
    {
      id: "email7",
      from: {
        name: "Ava Martinez",
        email: "ava.m@techcorp.com",
        company: "TechCorp",
      },
      subject: "IT Support Contract Renewal",
      preview:
        "As our current IT support contract is coming up for renewal next month, I wanted to reach out to discuss potential adjustments to the service level agreement. We've been very satisfied with your services but would like to explore adding 24/7 support.",
      date: "May 17",
      read: true,
      starred: false,
      hasAttachment: false,
      folder: "inbox",
    },
  ]

  const filteredEmails = emails.filter((email) => email.folder === activeTab)

  const toggleSelectEmail = (emailId: string) => {
    setSelectedEmails((prev) => (prev.includes(emailId) ? prev.filter((id) => id !== emailId) : [...prev, emailId]))
  }

  const toggleSelectAll = () => {
    if (selectedEmails.length === filteredEmails.length) {
      setSelectedEmails([])
    } else {
      setSelectedEmails(filteredEmails.map((email) => email.id))
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
          <Link href="/tasks" className="text-sm font-medium">
            Tasks
          </Link>
          <Link href="/emails" className="text-sm font-medium text-primary">
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
            <MessageSquare className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Templates</span>
          </Button>
          <Button size="sm" className="h-8">
            <MailPlus className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Compose</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Emails</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Search emails..." className="h-8 w-[250px] lg:w-[300px]" />
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
              <DropdownMenuItem>All Emails</DropdownMenuItem>
              <DropdownMenuItem>Unread</DropdownMenuItem>
              <DropdownMenuItem>Starred</DropdownMenuItem>
              <DropdownMenuItem>With Attachments</DropdownMenuItem>
              <DropdownMenuItem>Sent</DropdownMenuItem>
              <DropdownMenuItem>Drafts</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="space-y-4">
            <Button className="w-full justify-start gap-2" size="sm">
              <MailPlus className="h-4 w-4" />
              <span>Compose</span>
            </Button>
            <Tabs defaultValue="inbox" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="inbox" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Inbox className="h-4 w-4" />
                    <span>Inbox</span>
                    <Badge className="ml-auto">7</Badge>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="starred" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    <span>Starred</span>
                    <Badge className="ml-auto">2</Badge>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="sent" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Sent</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="drafts" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>Drafts</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="archive" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Archive className="h-4 w-4" />
                    <span>Archive</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="trash" className="justify-start">
                  <div className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    <span>Trash</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-0">
                <div className="flex items-center justify-between border-b p-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedEmails.length === filteredEmails.length && filteredEmails.length > 0}
                      onCheckedChange={toggleSelectAll}
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 gap-1">
                          <ChevronDown className="h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>All</DropdownMenuItem>
                        <DropdownMenuItem>None</DropdownMenuItem>
                        <DropdownMenuItem>Read</DropdownMenuItem>
                        <DropdownMenuItem>Unread</DropdownMenuItem>
                        <DropdownMenuItem>Starred</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {selectedEmails.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Archive className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{filteredEmails.length} emails</div>
                </div>
                <div className="divide-y">
                  {filteredEmails.map((email) => (
                    <div
                      key={email.id}
                      className={`flex cursor-pointer items-center gap-2 p-3 hover:bg-muted/50 ${!email.read ? "bg-muted/30 font-medium" : ""}`}
                    >
                      <Checkbox
                        checked={selectedEmails.includes(email.id)}
                        onCheckedChange={() => toggleSelectEmail(email.id)}
                      />
                      <div className="flex w-full items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={email.from.name} />
                          <AvatarFallback>
                            {email.from.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 truncate">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{email.from.name}</span>
                            <div className="flex items-center gap-2">
                              {email.hasAttachment && <Paperclip className="h-3.5 w-3.5 text-muted-foreground" />}
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{email.date}</span>
                              </div>
                              {email.starred ? (
                                <Star className="h-4 w-4 text-yellow-400" />
                              ) : (
                                <StarOff className="h-4 w-4 text-muted-foreground" />
                              )}
                            </div>
                          </div>
                          <div className="text-sm">{email.subject}</div>
                          <div className="truncate text-sm text-muted-foreground">{email.preview}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
