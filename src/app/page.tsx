"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Loading from "@/components/Loading";

const DynamicWidgetEvents = dynamic(
  () => import('../components/WidgetEvents').then((module) => module.WidgetEvents) as any,
  {
    ssr: false,
  },
);

const DynamicWidget = dynamic(
  () => import('../components/Widget').then((module) => module.Widget) as any,
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  return (
    <main className="relative">
      <Header />
      {
        mounted && (
          <div className="mt-10 flex min-h-screen flex-col items-center justify-between">
            <DynamicWidgetEvents />
            <DynamicWidget />
          </div>
        )
      }
    </main>
  );
}
