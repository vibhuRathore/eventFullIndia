import { Typography } from "../components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto text-center">
        <Typography className="text-sm">
          © 2025 Artistly. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
