"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

type Artist = {
  name: string;
  category: string;
  priceRange: string;
  location: string;
  description: string;
};

const dummyArtists: Artist[] = [
  {
    name: "John Doe",
    category: "Singer",
    priceRange: "$200-$500",
    location: "New York",
    description: "An experienced vocalist who has performed at over 100 live shows worldwide.",
  },
  {
    name: "Jane Smith",
    category: "Dancer",
    priceRange: "$300-$700",
    location: "Los Angeles",
    description: "A professional dancer specializing in contemporary and classical styles.",
  },
  {
    name: "Mike Johnson",
    category: "Speaker",
    priceRange: "$500-$1000",
    location: "Chicago",
    description: "A motivational speaker known for engaging and impactful keynotes.",
  },
  {
    name: "Emily Davis",
    category: "DJ",
    priceRange: "$400-$800",
    location: "Miami",
    description: "A versatile DJ who brings energy and creativity to every event.",
  },
  {
    name: "Alex Brown",
    category: "Singer",
    priceRange: "$250-$600",
    location: "Seattle",
    description: "A soulful singer known for captivating live performances.",
  },
  {
    name: "Sophia Green",
    category: "Dancer",
    priceRange: "$350-$750",
    location: "Houston",
    description: "An award-winning dancer with expertise in Latin and ballroom styles.",
  },
  {
    name: "Liam Wilson",
    category: "Speaker",
    priceRange: "$600-$1200",
    location: "Denver",
    description: "A tech evangelist and engaging keynote speaker.",
  },
  {
    name: "Olivia Taylor",
    category: "DJ",
    priceRange: "$450-$850",
    location: "San Francisco",
    description: "An innovative DJ who keeps the crowd on their feet all night long.",
  },
  {
    name: "Ethan Martinez",
    category: "Singer",
    priceRange: "$300-$700",
    location: "Boston",
    description: "A charismatic singer with a diverse repertoire of songs.",
  },
  {
    name: "Isabella Moore",
    category: "Dancer",
    priceRange: "$400-$900",
    location: "Las Vegas",
    description: "A dynamic performer who combines artistry with athleticism.",
  },
];

export default function ArtistsPage() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    priceRange: "",
  });

  const filteredArtists = dummyArtists.filter((artist) => {
    return (
      (filters.category ? artist.category === filters.category : true) &&
      (filters.location ? artist.location === filters.location : true) &&
      (filters.priceRange ? artist.priceRange === filters.priceRange : true)
    );
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center ">Artists Listing</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <select
            className="bg-gray-100 text-gray-900 border p-2 rounded"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="Singer">Singer</option>
            <option value="Dancer">Dancer</option>
            <option value="Speaker">Speaker</option>
            <option value="DJ">DJ</option>
          </select>

          <select
            className="bg-gray-100 text-gray-900 border p-2 rounded"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Miami">Miami</option>
            <option value="Seattle">Seattle</option>
            <option value="Houston">Houston</option>
            <option value="Denver">Denver</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Boston">Boston</option>
            <option value="Las Vegas">Las Vegas</option>
          </select>

          <select
            className="bg-gray-100 text-gray-900 border p-2 rounded"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          >
            <option value="">All Price Ranges</option>
            <option value="$200-$500">$200-$500</option>
            <option value="$250-$600">$250-$600</option>
            <option value="$300-$700">$300-$700</option>
            <option value="$350-$750">$350-$750</option>
            <option value="$400-$800">$400-$800</option>
            <option value="$450-$850">$450-$850</option>
            <option value="$500-$1000">$500-$1000</option>
            <option value="$600-$1200">$600-$1200</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtists.map((artist, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-emerald-500 to-emerald-800 text-white hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <h2 className="text-2xl font-bold">{artist.name}</h2>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-white">Category: {artist.category}</p>
                <p className="font-medium  text-white">Location: {artist.location}</p>
                <p className="font-medium  text-white">Price Range: {artist.priceRange}</p>
                <p className="mt-2 text-sm  text-white">{artist.description}</p>
                <Button variant="secondary" size="sm" className="mt-4">
                  Ask for Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
