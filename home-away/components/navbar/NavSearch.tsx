"use client";
import { Input } from "../ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  console.log(searchParams);
  return (
    <Input
      type="text"
      placeholder="find a property..."
      className="max-w-xs dark:bg-muted"
    />
  );
}

export default NavSearch;
