"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

interface SearchBarProps {
  routeType: string;
}

export default function SearchBar({ routeType }: SearchBarProps) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const delayFunc = setTimeout(() => {
      if (searchText) {
        router.push(`/${routeType}?q=` + searchText);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);
    return () => clearTimeout(delayFunc);
  }, [searchText, routeType]);

  return (
    <div className="searchbar">
      <Image
        src="/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <Input
        id="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder={`${
          routeType !== "/search" ? "Search communities" : "Search User"
        }`}
        className="no-focus searchbar_input"
      />
    </div>
  );
}
