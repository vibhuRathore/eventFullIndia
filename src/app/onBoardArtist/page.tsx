"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/ui/button";
import { Card, CardHeader, CardContent } from "../../components/ui/card";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  category: z.array(z.string()).nonempty("At least one category must be selected"),
  languages: z.array(z.string()).nonempty("At least one language must be selected"),
  feeRange: z.string().min(1, "Fee range is required"),
  location: z.string().min(1, "Location is required"),
});

type FormData = z.infer<typeof schema>;

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Spanish", "French", "German", "Hindi"];

export default function OnboardingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
    alert("Artist onboarded successfully! Check the console for details.");
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Artist Onboarding Form</h1>
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-800 text-white shadow-xl">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Onboard a New Artist</h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-white"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Bio</label>
                <textarea
                  className="w-full p-3 rounded bg-white"
                  rows={4}
                  {...register("bio")}
                />
                {errors.bio && (
                  <p className="text-red-400 text-sm mt-1">{errors.bio.message}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-4 text-white">Category</label>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center space-x-4 text-white">
                      <input
                        type="checkbox"
                        value={cat}
                        className="w-5 h-5 text-blue-500"
                        {...register("category")}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-1">{errors.category.message}</p>
                )}
              </div>

              {/* Languages */}
              <div>
                <label className="block text-sm font-medium mb-4 text-white">Languages Spoken</label>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <label key={lang} className="flex items-center space-x-4 text-white">
                      <input
                        type="checkbox"
                        value={lang}
                        className="w-5 h-5 text-blue-500"
                        {...register("languages")}
                      />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
                {errors.languages && (
                  <p className="text-red-400 text-sm mt-1">{errors.languages.message}</p>
                )}
              </div>

              {/* Fee Range */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Fee Range</label>
                <select
                  className="w-full p-3 rounded bg-white"
                  {...register("feeRange")}
                >
                  <option value="">Select Fee Range</option>
                  <option value="$200-$500">$200-$500</option>
                  <option value="$500-$1000">$500-$1000</option>
                  <option value="$1000-$2000">$1000-$2000</option>
                </select>
                {errors.feeRange && (
                  <p className="text-red-400 text-sm mt-1">{errors.feeRange.message}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Location</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-white"
                  {...register("location")}
                />
                {errors.location && (
                  <p className="text-red-400 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black py-3 rounded font-medium transition-colors"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
