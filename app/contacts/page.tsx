"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Download, Filter, Plus, SlidersHorizontal, Star, StarOff, Trash2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function ContactsPage() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const contacts = [
    {
      id: "1",
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      phone: "+1 (555) 123-4567",
      company: "Acme Inc.",
      status: "Customer",
      favorite: true,
      lastContact: "2 days ago",
    },
    {
      id: "2",
      name: "James Rodriguez",
      email: "james.r@example.com",
      phone: "+1 (555) 234-5678",
      company: "TechCorp",
      status: "Lead",
      favorite: false,
      lastContact: "1 week ago",
    },
    {
      id: "3",
      name: "Sophia Chen",
      email: "sophia.c@example.com",
      phone: "+1 (555) 345-6789",
      company: "Global Solutions",
      status: "Customer",
      favorite: true,
      lastContact: "Yesterday",
    },
    {
      id: "4",
      name: "Michael Johnson",
      email: "michael.j@example.com",
      phone: "+1 (555) 456-7890",
      company: "Innovate LLC",
      status: "Prospect",
      favorite: false,
      lastContact: "3 days ago",
    },
    {
      id: "5",
      name: "Olivia Brown",
      email: "olivia.b@example.com",
      phone: "+1 (555) 567-8901",
      company: "NextGen Systems",
      status: "Lead",
      favorite: false,
      lastContact: "2 weeks ago",
    },
    {
      id: "6",
      name: "William Davis",
      email: "william.d@example.com",
      phone: "+1 (555) 678-9012",
      company: "Acme Inc.",
      status: "Customer",
      favorite: true,
      lastContact: "4 days ago",
    },
    {
      id: "7",
      name: "Ava Martinez",
      email: "ava.m@example.com",
      phone: "+1 (555) 789-0123",
      company: "TechCorp",
      status: "Prospect",
      favorite: false,
      lastContact: "5 days ago",
    },
  ]

  const toggleSelectContact = (contactId: string) => {
    setSelectedContacts((prev) =>
      prev.includes(contactId) ? prev.filter((id) => id !== contactId) : [...prev, contactId],
    )
  }

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map((contact) => contact.id))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Customer":
        return "bg-green-100 text-green-800"
      case "Lead":
        return "bg-blue-100 text-blue-800"
      case "Prospect":
        return "bg-yellow-100 text-yellow-800"
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
          <Link href="/contacts" className="text-sm font-medium text-primary">
            Contacts
          </Link>
          <Link href="/deals" className="text-sm font-medium">
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
            <Users className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Import Contacts</span>
          </Button>
          <Button size="sm" className="h-8">
            <Plus className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Contact</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Contacts</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>
          </div>
        </div>
        <Card>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Input placeholder="Search contacts..." className="h-8 w-[250px] lg:w-[300px]" />
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
                    <DropdownMenuItem>All Contacts</DropdownMenuItem>
                    <DropdownMenuItem>Customers</DropdownMenuItem>
                    <DropdownMenuItem>Leads</DropdownMenuItem>
                    <DropdownMenuItem>Prospects</DropdownMenuItem>
                    <DropdownMenuItem>Favorites</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {selectedContacts.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{selectedContacts.length} selected</span>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Delete</span>
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]">
                    <Checkbox
                      checked={selectedContacts.length === contacts.length && contacts.length > 0}
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-[40px]"></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Contact</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedContacts.includes(contact.id)}
                        onCheckedChange={() => toggleSelectContact(contact.id)}
                      />
                    </TableCell>
                    <TableCell>
                      {contact.favorite ? (
                        <Star className="h-4 w-4 text-yellow-400" />
                      ) : (
                        <StarOff className="h-4 w-4 text-muted-foreground" />
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={contact.name} />
                          <AvatarFallback>
                            {contact.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="font-medium">{contact.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(contact.status)}>
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{contact.lastContact}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1" />
                              <circle cx="12" cy="5" r="1" />
                              <circle cx="12" cy="19" r="1" />
                            </svg>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Contact</DropdownMenuItem>
                          <DropdownMenuItem>Edit Contact</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Add Task</DropdownMenuItem>
                          <DropdownMenuItem>Add Deal</DropdownMenuItem>
                          <DropdownMenuItem>Send Email</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Delete Contact</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t px-4 py-2">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-7</strong> of <strong>100</strong> contacts
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
