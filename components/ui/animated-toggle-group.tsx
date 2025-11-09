"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { type VariantProps } from "class-variance-authority"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const AnimatedToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number
    useAnimatedBackground?: boolean
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  useAnimatedBackground: false,
})

function AnimatedToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    spacing?: number
  }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ "--gap": spacing } as React.CSSProperties}
      className={cn(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <AnimatedToggleGroupContext.Provider value={{ variant, size, spacing }}>
        {children}
      </AnimatedToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function AnimatedToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(AnimatedToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-id={props.value}
      data-variant={context.variant || variant}
      data-size={context.size || size}
      data-spacing={context.spacing}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

type AnimatedToggleGroupWithBackgroundProps = (
  | (Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, "type"> & {
      type: "single"
      value?: string
      defaultValue?: string
      onValueChange?: (value: string) => void
    })
  | (Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, "type"> & {
      type: "multiple"
      value?: string[]
      defaultValue?: string[]
      onValueChange?: (value: string[]) => void
    })
) & {
  animatedBackgroundClassName?: string
}

function AnimatedToggleGroupWithBackground({
  className,
  children,
  animatedBackgroundClassName,
  defaultValue,
  ...props
}: AnimatedToggleGroupWithBackgroundProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "bg-muted inline-flex w-fit items-center justify-center rounded-lg p-1",
        className
      )}
      defaultValue={defaultValue}
      {...(props as any)}
    >
      <AnimatedToggleGroupContext.Provider value={{ useAnimatedBackground: true }}>
        <AnimatedBackground
          defaultValue={typeof defaultValue === 'string' ? defaultValue : defaultValue?.[0]}
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
      </AnimatedToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

export {
  AnimatedToggleGroup,
  AnimatedToggleGroupItem,
  AnimatedToggleGroupWithBackground
}
