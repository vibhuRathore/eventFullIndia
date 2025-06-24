import { HeroSection } from '../components/HeroSection';
import { ArtistCard } from '../components/ArtistCard';

export default function Home() {
  const categories = [
    { name: 'Singers', description: 'Vocal artists for events and shows.' },
    { name: 'Dancers', description: 'Performers for weddings and stage shows.' },
    { name: 'Speakers', description: 'Engaging speakers for conferences.' },
    { name: 'DJs', description: 'Professional DJs for parties and events.' },
  ];

  return (
    <div className="bg-background">
      <main className="container mx-auto p-6">
        <HeroSection />
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Explore Artist Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <ArtistCard key={index} {...category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
