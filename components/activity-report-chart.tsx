"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    emails: 42,
    calls: 28,
    meetings: 15,
    tasks: 36,
  },
  {
    name: "Feb",
    emails: 38,
    calls: 32,
    meetings: 12,
    tasks: 42,
  },
  {
    name: "Mar",
    emails: 45,
    calls: 24,
    meetings: 18,
    tasks: 32,
  },
  {
    name: "Apr",
    emails: 36,
    calls: 30,
    meetings: 14,
    tasks: 38,
  },
  {
    name: "May",
    emails: 52,
    calls: 36,
    meetings: 22,
    tasks: 44,
  },
  {
    name: "Jun",
    emails: 48,
    calls: 34,
    meetings: 20,
    tasks: 40,
  },
]

export default function ActivityReportChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="emails" name="Emails" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="calls" name="Calls" stroke="#82ca9d" />
        <Line type="monotone" dataKey="meetings" name="Meetings" stroke="#ffc658" />
        <Line type="monotone" dataKey="tasks" name="Tasks" stroke="#ff8042" />
      </LineChart>
    </ResponsiveContainer>
  )
}
