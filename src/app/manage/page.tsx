"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent } from "../../components/ui/card";

type ArtistSubmission = {
  name: string;
  category: string;
  location: string;
  fee: string;
};

const mockSubmissions: ArtistSubmission[] = [
  { name: "John Doe", category: "Singer", location: "New York", fee: "$500" },
  { name: "Jane Smith", category: "Dancer", location: "Los Angeles", fee: "$700" },
  { name: "Mike Johnson", category: "Speaker", location: "Chicago", fee: "$1000" },
  { name: "Emily Davis", category: "DJ", location: "Miami", fee: "$800" },
  { name: "Chris Lee", category: "Singer", location: "San Francisco", fee: "$400" },
];

export default function ManagerDashboard() {
  const [submissions] = useState<ArtistSubmission[]>(mockSubmissions);

  const handleAction = (index: number) => {
    alert(`Action triggered for: ${submissions[index].name}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Manager Dashboard
      </h1>
      <Card className="shadow-xl bg-gradient-to-r from-emerald-500 to-emerald-800">
        <CardHeader>
          <h2 className="text-lg md:text-2xl font-bold text-white">
            Artist Submissions
          </h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse border border-gray-300 text-white">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 text-sm md:text-base">
                    Name
                  </th>
                  <th className="border border-gray-300 p-2 text-sm md:text-base">
                    Category
                  </th>
                  <th className="border border-gray-300 p-2 text-sm md:text-base">
                    Location
                  </th>
                  <th className="border border-gray-300 p-2 text-sm md:text-base">
                    Fee
                  </th>
                  <th className="border border-gray-300 p-2 text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr
                    key={index}
                    className="odd:bg-emerald-600 even:bg-emerald-700"
                  >
                    <td className="border border-gray-300 p-2 text-sm md:text-base">
                      {submission.name}
                    </td>
                    <td className="border border-gray-300 p-2 text-sm md:text-base">
                      {submission.category}
                    </td>
                    <td className="border border-gray-300 p-2 text-sm md:text-base">
                      {submission.location}
                    </td>
                    <td className="border border-gray-300 p-2 text-sm md:text-base">
                      {submission.fee}
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleAction(index)}
                        className="bg-white text-emerald-800 hover:bg-emerald-200 text-sm md:text-base"
                      >
                        OnBoard
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
