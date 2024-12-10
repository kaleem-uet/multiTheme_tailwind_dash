import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database } from "lucide-react";
import React from "react";
import Login from "../(auth)/login/page";

export default function Home() {
  return (
    <div className="container mt-2">
      <Login />
    </div>
  );
}
