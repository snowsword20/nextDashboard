"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  console.log(`searchParams=${searchParams}`);
  const pathname = usePathname();
  console.log(`pathname=${pathname}`);
  const { replace } = useRouter();
  console.log(`replace=${replace}`);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    console.log(term);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log(`params=${params}`);
    replace(`${pathname}?${params.toString()}`);
}, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
