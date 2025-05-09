import { useState } from "react";

export function Sheet({ children }) {
  return <div>{children}</div>;
}

export function SheetTrigger({ children, asChild }) {
  return children;
}

export function SheetContent({ side, children }) {
  return (
    <div className="fixed top-0 left-0 w-[220px] h-full bg-white dark:bg-zinc-900 p-6 shadow-lg z-50">
      {children}
    </div>
  );
}

export function SheetHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function SheetTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
