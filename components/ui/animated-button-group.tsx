"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const animatedButtonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

interface AnimatedButtonGroupProps extends
  React.ComponentProps<"div">,
  VariantProps<typeof animatedButtonGroupVariants> {
  useAnimatedBackground?: boolean
  animatedBackgroundClassName?: string
}

function AnimatedButtonGroup({
  className,
  orientation = "horizontal",
  useAnimatedBackground = false,
  animatedBackgroundClassName,
  ...props
}: AnimatedButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(
        animatedButtonGroupVariants({ orientation }),
        useAnimatedBackground && "bg-muted rounded-lg p-1 gap-1",
        className
      )}
      {...props}
    />
  )
}

interface AnimatedButtonGroupItemProps extends React.ComponentProps<"button"> {
  value: string
  asChild?: boolean
}

const AnimatedButtonGroupItem = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonGroupItemProps
>(({ className, value, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-id={value}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
})
AnimatedButtonGroupItem.displayName = "AnimatedButtonGroupItem"

interface AnimatedButtonGroupWithBackgroundProps extends AnimatedButtonGroupProps {
  children: React.ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string | null) => void
}

function AnimatedButtonGroupWithBackground({
  className,
  orientation = "horizontal",
  children,
  defaultValue,
  value,
  onValueChange,
  animatedBackgroundClassName,
  ...props
}: AnimatedButtonGroupWithBackgroundProps) {
  const [activeValue, setActiveValue] = React.useState<string | null>(defaultValue || null)

  React.useEffect(() => {
    if (value !== undefined) {
      setActiveValue(value)
    }
  }, [value])

  const handleValueChange = (newValue: string | null) => {
    if (value === undefined) {
      setActiveValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(
        "bg-muted inline-flex w-fit items-center justify-center rounded-lg p-1",
        orientation === "vertical" && "flex-col",
        className
      )}
      {...props}
    >
      <AnimatedBackground
        defaultValue={value || defaultValue}
        onValueChange={handleValueChange}
        className={cn(
          "bg-background rounded-md shadow-sm",
          animatedBackgroundClassName
        )}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.4,
        }}
        enableHover={false}
      >
        {children as any}
      </AnimatedBackground>
    </div>
  )
}

function AnimatedButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function AnimatedButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative m-0! self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props}
    />
  )
}

export {
  AnimatedButtonGroup,
  AnimatedButtonGroupItem,
  AnimatedButtonGroupWithBackground,
  AnimatedButtonGroupSeparator,
  AnimatedButtonGroupText,
  animatedButtonGroupVariants,
}
