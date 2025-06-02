"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

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

export default function SalesReportChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDeals" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip content={<ChartTooltip />} />
        <Legend />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="revenue"
          name="Revenue ($)"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="deals"
          name="Deals Closed"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorDeals)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
