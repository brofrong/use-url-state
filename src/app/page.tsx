"use client";

import { Suspense } from "react";
import QueryStates from "./_components/query-sates";
import QueryState from "./_components/query-state";

export default function Home() {
  return (
    <Suspense>
      <div className="flex flex-col m-auto items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <QueryState queryParamName="counter" />
        <QueryState queryParamName="counter" />
        <QueryState queryParamName="test" />
        <QueryStates />
      </div>
    </Suspense>
  );
}
