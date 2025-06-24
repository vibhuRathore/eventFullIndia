import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

type ArtistCardProps = {
  name: string;
  description: string;
};

export function ArtistCard({ name, description }: ArtistCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
