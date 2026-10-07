import type { IconName } from "@/data/services";

const paths: Record<IconName, React.ReactNode> = {
  drop: <><path d="M32 6C32 6 14 28 14 40a18 18 0 0 0 36 0C50 28 32 6 32 6z" /><path d="M24 42a8 8 0 0 0 8 8" /></>,
  drain: <><circle cx="32" cy="32" r="22" /><circle cx="32" cy="32" r="5" /><path d="M32 10v12M32 42v12M10 32h12M42 32h12M16 16l9 9M39 39l9 9M48 16l-9 9M25 39l-9 9" /></>,
  tap: <><path d="M10 24h30a8 8 0 0 1 8 8v4" /><path d="M24 24V12h-8M24 12h16" /><path d="M48 44c0 0-4 5-4 8a4 4 0 0 0 8 0c0-3-4-8-4-8z" /><path d="M10 24v8h10" /></>,
  toilet: <><path d="M16 8h32v14H16z" /><path d="M12 26h40c0 12-6 20-14 22v8H26v-8C18 46 12 38 12 26z" /><path d="M42 15h4" /></>,
  pipe: <><path d="M6 20h22a6 6 0 0 1 6 6v12a6 6 0 0 0 6 6h18" /><path d="M6 14v12M58 38v12M28 14v12M34 38v12" /></>,
  pump: <><rect x="8" y="22" width="30" height="24" rx="4" /><circle cx="23" cy="34" r="7" /><path d="M38 30h14a4 4 0 0 1 4 4v12M14 22V12h18v10M8 52h30" /></>,
  shower: <><path d="M12 54V20a10 10 0 0 1 10-10h14" /><path d="M36 10l16 10H30z" /><path d="M34 28v4M42 28v4M50 28v4M38 38v4M46 38v4M34 48v4M50 48v4" /></>,
  valve: <><path d="M8 40h16M40 40h16" /><rect x="24" y="30" width="16" height="22" rx="3" /><path d="M32 30V16M20 16h24" /></>,
};

export function Icon({ name, className = "", size = 64 }: { name: IconName; className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}
