import Link from "next/link"
import { ArrowUpRight, BarChart3, Calendar, CheckCircle, Clock, Mail, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardChart from "@/components/dashboard-chart"
import RecentActivities from "@/components/recent-activities"
import TasksList from "@/components/tasks-list"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="h-6 w-6" />
          <span>CRM Pro</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-primary">
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
            <Mail className="mr-2 h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Check Email</span>
          </Button>
          <Button size="sm" className="h-8">
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Contact</span>
            <Users className="ml-2 h-3.5 w-3.5 sm:hidden" />
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,563</div>
              <p className="text-xs text-muted-foreground">86 opportunities in pipeline</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Closed Deals (MTD)</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$18,402</div>
              <p className="text-xs text-muted-foreground">32 deals closed this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tasks Due Today</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">4 high priority tasks</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
              <CardDescription>Monthly revenue and deals closed</CardDescription>
            </CardHeader>
            <CardContent>
              <DashboardChart />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Tasks due soon</CardDescription>
              </div>
              <Button size="sm" className="ml-auto gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>View Calendar</span>
              </Button>
            </CardHeader>
            <CardContent>
              <TasksList />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Deal Pipeline</CardTitle>
              <CardDescription>Current opportunities by stage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Qualification</div>
                    <div className="text-sm text-muted-foreground">$12,500</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[15%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Meeting</div>
                    <div className="text-sm text-muted-foreground">$18,200</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[22%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Proposal</div>
                    <div className="text-sm text-muted-foreground">$32,800</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[40%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Negotiation</div>
                    <div className="text-sm text-muted-foreground">$24,600</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[30%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Closing</div>
                    <div className="text-sm text-muted-foreground">$8,400</div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[10%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivities />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
