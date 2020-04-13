import React from 'react';
import Link from "next/link";
import NavBar from './NavBar';

export default function Header() {
  return (
    <div className="bg-gray-200">
      <h1>
        <Link href="/">
          <img className="h-24 mx-auto py-4 cursor-pointer" src="/logo.png" alt="Olá FSL!" height="60" />
        </Link>
      </h1>

      <NavBar />
    </div>
  );
}