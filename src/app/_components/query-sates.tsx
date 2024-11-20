"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';
import { parseAsInteger, parseAsString, useQueryStates } from "nuqs";

const QueryStates: React.FC = () => {
  const [object, setObject] = useQueryStates(
    {
      counter: parseAsInteger.withDefault(0),
      test: parseAsInteger.withDefault(0),
      text: parseAsString.withDefault(''),
    }
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Object</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <div className="mb-2">counter: {object.counter}</div>
          <Button onClick={() => setObject({ ...object, counter: object.counter + 1 })}>counter ++</Button>
        </div>
        <div>
          <div className="mb-2">test: {object.test}</div>
          <Button onClick={() => setObject({ ...object, test: object.test + 1 })}>test ++</Button>
        </div>
        <div>
          <div className="mb-2">text: {object.text}</div>
          <Button onClick={() => setObject({ ...object, text: object.text + 'a' })}>text + a</Button>
        </div>
      </CardContent>
    </Card>
  );
}


export default QueryStates;