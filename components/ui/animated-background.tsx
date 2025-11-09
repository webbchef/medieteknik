'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, Transition, motion } from 'motion/react';
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
  useRef,
} from 'react';

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetActiveId = (id: string | null) => {
    // Clear any pending timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }

    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }

    // Set a delay before returning to default
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveId(defaultValue || null);
      if (onValueChange) {
        onValueChange(defaultValue || null);
      }
    }, 150); // 150ms delay
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id'];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: handleMouseLeave,
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <div className='z-10'>{child.props.children}</div>
      </>
    );
  });
}
