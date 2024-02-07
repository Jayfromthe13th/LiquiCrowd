import { useEffect } from "react";
import Hero from "./Hero";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}
