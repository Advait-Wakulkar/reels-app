"use client"; // Ensure it's a client-side component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUser = async () => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Failed to register");

      const data = await response.json();
      console.log("Registration successful:", data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="grid gap-2 w-full max-w-xs">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)
        }
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={RegisterUser}>Register</Button>
    </div>
  );
}
