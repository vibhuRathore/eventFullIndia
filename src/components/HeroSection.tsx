"use client";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardContent } from "../components/ui/card";

export function HeroSection() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/artists");
  };
  const handleOnBoardClick = () => {
    router.push("/onBoardArtist");
  };

  return (
    <Card className="bg-gradient-to-r from-emerald-500 to-emerald-800 text-white py-16 rounded-lg shadow-lg text-center">
      <CardHeader>
        <h2 className="text-4xl font-extrabold mb-4">Connect with the Best Artists</h2>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-8 text-white">
          Artistly.com is designed for Event Planners and Artist Managers to connect. Event planners
          can browse through artist profiles, shortlist their preferences, and raise booking/availability
          requests. Artist Managers can onboard artists, receive booking leads, and manage responses
          via a dashboard.
        </p>
        <Button variant="secondary" size="lg" onClick={handleExploreClick}>
          Explore Artists
        </Button>
        <Button variant="secondary" size="lg" className="m-2" onClick={handleOnBoardClick}>
          Onboard Artist
        </Button>
      </CardContent>
    </Card>
  );
}