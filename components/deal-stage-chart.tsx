"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartTooltip } from "@/components/ui/chart"

const data = [
  {
    name: "Qualification",
    value: 12500,
    count: 18,
  },
  {
    name: "Meeting",
    value: 18200,
    count: 22,
  },
  {
    name: "Proposal",
    value: 32800,
    count: 28,
  },
  {
    name: "Negotiation",
    value: 24600,
    count: 14,
  },
  {
    name: "Closing",
    value: 8400,
    count: 4,
  },
]

export default function DealStageChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip content={<ChartTooltip />} />
        <Legend />
        <Bar yAxisId="left" dataKey="value" name="Value ($)" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="count" name="Number of Deals" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
