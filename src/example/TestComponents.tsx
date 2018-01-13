import * as React from "react";

export interface TestComponentProps {
  name: string;
  count: number;
}

export const TestComponent = ({ name, count }: TestComponentProps) => (
  <div>
    Hey {name}, you passed {count} as a number
  </div>
);
