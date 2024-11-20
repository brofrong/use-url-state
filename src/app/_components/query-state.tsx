"use client";

import { Button } from "@/components/ui/button";
import { parseAsInteger, useQueryState } from "nuqs";

const QueryState: React.FC<{ queryParamName: string }> = ({ queryParamName }) => {
  const [counter, setCounter] = useQueryState(queryParamName, parseAsInteger.withDefault(0));

  return (
    <div>
      <div className="mb-2">{queryParamName}: {counter}</div>
      <Button onClick={() => setCounter(counter + 1)}>{queryParamName} ++</Button>
    </div>
  );
}


export default QueryState;