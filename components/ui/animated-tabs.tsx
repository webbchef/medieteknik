"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { cn } from "@/lib/utils"

function AnimatedTabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function AnimatedTabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

interface AnimatedTabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  value: string
}

function AnimatedTabsTrigger({
  className,
  value,
  ...props
}: AnimatedTabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      data-id={value}
      className={cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      value={value}
      {...props}
    />
  )
}

function AnimatedTabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

interface AnimatedTabsListWithBackgroundProps extends React.ComponentProps<typeof TabsPrimitive.List> {
  defaultValue?: string
  children: React.ReactNode
}

function AnimatedTabsListWithBackground({
  className,
  defaultValue,
  children,
  ...props
}: AnimatedTabsListWithBackgroundProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    >
      <AnimatedBackground
        defaultValue={defaultValue}
        className="bg-background dark:bg-input/30 rounded-md shadow-sm"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.4,
        }}
        enableHover={false}
      >
        {children as any}
      </AnimatedBackground>
    </TabsPrimitive.List>
  )
}

export {
  AnimatedTabs,
  AnimatedTabsList,
  AnimatedTabsTrigger,
  AnimatedTabsContent,
  AnimatedTabsListWithBackground
}
