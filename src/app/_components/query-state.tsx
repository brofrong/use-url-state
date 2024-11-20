"use client";

import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";

const QueryState: React.FC<{ queryParamName: string }> = ({ queryParamName }) => {
  const [counter, setCounter] = useQueryState(queryParamName, { defaultValue: '0' });

  return (
    <div>
      <div className="mb-2">{queryParamName}: {counter}</div>
      <Button onClick={() => setCounter((parseInt(counter) + 1).toString())}>{queryParamName} ++</Button>
    </div>
  );
}


export default QueryState;