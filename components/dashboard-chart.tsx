"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    revenue: 18500,
    deals: 12,
  },
  {
    name: "Feb",
    revenue: 22300,
    deals: 15,
  },
  {
    name: "Mar",
    revenue: 19800,
    deals: 13,
  },
  {
    name: "Apr",
    revenue: 27600,
    deals: 18,
  },
  {
    name: "May",
    revenue: 24800,
    deals: 16,
  },
  {
    name: "Jun",
    revenue: 28400,
    deals: 19,
  },
]

export default function DashboardChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip content={<ChartTooltip />} />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" name="Revenue ($)" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="deals" name="Deals Closed" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
