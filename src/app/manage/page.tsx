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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Manager Dashboard</h1>
      <Card className="shadow-xl bg-gradient-to-r from-emerald-500 to-emerald-800">
        <CardHeader>
          <h2 className="text-2 font-bold text-white">Artist Submissions</h2>
        </CardHeader>
        <CardContent>
          <table className="table-auto w-full text-left border-collapse border border-gray-300 text-white">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Location</th>
                <th className="border border-gray-300 p-2">Fee</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="">
                  <td className="border border-gray-300 p-2">{submission.name}</td>
                  <td className="border border-gray-300 p-2">{submission.category}</td>
                  <td className="border border-gray-300 p-2">{submission.location}</td>
                  <td className="border border-gray-300 p-2">{submission.fee}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => handleAction(index)}
                      className=" bg-white text-emerald-800 hover:bg-emerald-200"
                    >
                      OnBoard
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
