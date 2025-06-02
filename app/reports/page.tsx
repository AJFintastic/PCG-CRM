"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, Download, Filter, LineChart, PieChart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SalesReportChart from "@/components/sales-report-chart"
import LeadSourceChart from "@/components/lead-source-chart"
import DealStageChart from "@/components/deal-stage-chart"
import ActivityReportChart from "@/components/activity-report-chart"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("month")

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
          <Link href="/emails" className="text-sm font-medium">
            Emails
          </Link>
          <Link href="/reports" className="text-sm font-medium text-primary">
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
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">New Report</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Reports & Analytics</h1>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {dateRange === "week" && "This Week"}
                    {dateRange === "month" && "This Month"}
                    {dateRange === "quarter" && "This Quarter"}
                    {dateRange === "year" && "This Year"}
                    {dateRange === "custom" && "Custom Range"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setDateRange("week")}>This Week</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateRange("month")}>This Month</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateRange("quarter")}>This Quarter</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDateRange("year")}>This Year</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setDateRange("custom")}>Custom Range</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="sales">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="sales" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span>Sales</span>
              </TabsTrigger>
              <TabsTrigger value="pipeline" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span>Pipeline</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span>Activities</span>
              </TabsTrigger>
            </TabsList>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Team Member" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Team Members</SelectItem>
                <SelectItem value="john">John Smith</SelectItem>
                <SelectItem value="sarah">Sarah Johnson</SelectItem>
                <SelectItem value="michael">Michael Brown</SelectItem>
                <SelectItem value="emily">Emily Davis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="sales" className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$128,430</div>
                  <p className="text-xs text-muted-foreground">+12.5% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Deals Closed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+8.2% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Deal Size</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,058</div>
                  <p className="text-xs text-muted-foreground">+4.1% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32.8%</div>
                  <p className="text-xs text-muted-foreground">+2.4% from previous period</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
                <CardDescription>Monthly revenue and deals closed</CardDescription>
              </CardHeader>
              <CardContent>
                <SalesReportChart />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Lead Sources</CardTitle>
                  <CardDescription>Revenue by lead source</CardDescription>
                </CardHeader>
                <CardContent>
                  <LeadSourceChart />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Products</CardTitle>
                  <CardDescription>Revenue by product category</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Product</th>
                        <th className="pb-2 text-left font-medium">Revenue</th>
                        <th className="pb-2 text-left font-medium">Deals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Enterprise Software</td>
                        <td className="py-2">$42,500</td>
                        <td className="py-2">12</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Cloud Services</td>
                        <td className="py-2">$36,200</td>
                        <td className="py-2">15</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Security Solutions</td>
                        <td className="py-2">$28,400</td>
                        <td className="py-2">8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Data Analytics</td>
                        <td className="py-2">$21,330</td>
                        <td className="py-2">7</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pipeline" className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pipeline Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$245,800</div>
                  <p className="text-xs text-muted-foreground">86 active deals</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5%</div>
                  <p className="text-xs text-muted-foreground">+1.2% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Sales Cycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32 days</div>
                  <p className="text-xs text-muted-foreground">-3 days from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">+15% from previous period</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Deal Stages</CardTitle>
                <CardDescription>Value by pipeline stage</CardDescription>
              </CardHeader>
              <CardContent>
                <DealStageChart />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Deals by Size</CardTitle>
                  <CardDescription>Number of deals by value range</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Deal Size</th>
                        <th className="pb-2 text-left font-medium">Count</th>
                        <th className="pb-2 text-left font-medium">Total Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">$0 - $5,000</td>
                        <td className="py-2">32</td>
                        <td className="py-2">$86,400</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">$5,001 - $15,000</td>
                        <td className="py-2">28</td>
                        <td className="py-2">$92,300</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">$15,001 - $30,000</td>
                        <td className="py-2">18</td>
                        <td className="py-2">$42,100</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">$30,001+</td>
                        <td className="py-2">8</td>
                        <td className="py-2">$25,000</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Deals at Risk</CardTitle>
                  <CardDescription>Deals with low probability or stalled</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Deal Name</th>
                        <th className="pb-2 text-left font-medium">Value</th>
                        <th className="pb-2 text-left font-medium">Probability</th>
                        <th className="pb-2 text-left font-medium">Days Stalled</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Enterprise Software Solution</td>
                        <td className="py-2">$24,500</td>
                        <td className="py-2">20%</td>
                        <td className="py-2">14</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Cloud Migration Project</td>
                        <td className="py-2">$18,200</td>
                        <td className="py-2">30%</td>
                        <td className="py-2">8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Mobile App Development</td>
                        <td className="py-2">$15,600</td>
                        <td className="py-2">25%</td>
                        <td className="py-2">12</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">IT Support Contract</td>
                        <td className="py-2">$28,400</td>
                        <td className="py-2">35%</td>
                        <td className="py-2">6</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">428</div>
                  <p className="text-xs text-muted-foreground">+8.2% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">186</div>
                  <p className="text-xs text-muted-foreground">+12.4% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Meetings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">64</div>
                  <p className="text-xs text-muted-foreground">+5.8% from previous period</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">178</div>
                  <p className="text-xs text-muted-foreground">+6.3% from previous period</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Activity Trends</CardTitle>
                <CardDescription>Activities by type over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityReportChart />
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Team Activity</CardTitle>
                  <CardDescription>Activities by team member</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Team Member</th>
                        <th className="pb-2 text-left font-medium">Emails</th>
                        <th className="pb-2 text-left font-medium">Calls</th>
                        <th className="pb-2 text-left font-medium">Meetings</th>
                        <th className="pb-2 text-left font-medium">Tasks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">John Smith</td>
                        <td className="py-2">42</td>
                        <td className="py-2">28</td>
                        <td className="py-2">15</td>
                        <td className="py-2">36</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Sarah Johnson</td>
                        <td className="py-2">38</td>
                        <td className="py-2">32</td>
                        <td className="py-2">12</td>
                        <td className="py-2">42</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Michael Brown</td>
                        <td className="py-2">45</td>
                        <td className="py-2">24</td>
                        <td className="py-2">18</td>
                        <td className="py-2">32</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Emily Davis</td>
                        <td className="py-2">36</td>
                        <td className="py-2">30</td>
                        <td className="py-2">14</td>
                        <td className="py-2">38</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                  <CardDescription>Average response time to leads and customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-medium">Contact Type</th>
                        <th className="pb-2 text-left font-medium">First Response</th>
                        <th className="pb-2 text-left font-medium">Follow-up</th>
                        <th className="pb-2 text-left font-medium">Resolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">New Leads</td>
                        <td className="py-2">2.4 hours</td>
                        <td className="py-2">1.2 days</td>
                        <td className="py-2">4.5 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Prospects</td>
                        <td className="py-2">3.1 hours</td>
                        <td className="py-2">1.8 days</td>
                        <td className="py-2">5.2 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Customers</td>
                        <td className="py-2">1.5 hours</td>
                        <td className="py-2">0.8 days</td>
                        <td className="py-2">2.3 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Partners</td>
                        <td className="py-2">1.2 hours</td>
                        <td className="py-2">0.6 days</td>
                        <td className="py-2">1.8 days</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
