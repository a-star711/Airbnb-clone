import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  heading = "No items in the list",
  message = "Keep exploring our properties",
  btnText = "backhome",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">
        {heading}
        <p className="text-xl">{message}</p>
        <Button asChild className="mt-4 capitalize" size="lg">
          <Link href="/">{btnText}</Link>
        </Button>
      </h2>
    </div>
  );
}

export default EmptyList;
