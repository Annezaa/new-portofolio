const achievements = [
  { icon: '🏆', text: '1st Place National Scientific Writing Competition' },
  { icon: '🥈', text: 'Silver Medal & Favorite Video – Essay Idea Fest Yogyakarta' },
  { icon: '📚', text: 'Penulis “Antologi Esai: Bandung Sejuta Cerita”' },
  { icon: '🎓', text: 'Finalis / Mawapres FKIP UNSRI 2025' },
];

export default function About() {
  return (
    <section id="tentang-saya" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12 text-foreground">Tentang Saya</h2>
        <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-3">
              <p className="text-foreground/90 md:text-xl/relaxed">
                Saya adalah mahasiswa Pendidikan Matematika FKIP Universitas Sriwijaya yang aktif dalam dunia pendidikan, kepenulisan, dan inovasi pembelajaran.
              </p>
              <p className="text-foreground/90 md:text-xl/relaxed">
                Berpengalaman sebagai SEA Teacher di Lampang, Thailand, saya memiliki pengalaman mengajar lintas budaya dan merancang pembelajaran bermakna berbasis konteks nyata.
              </p>
              <p className="text-foreground/70">
                Saya percaya bahwa kreativitas matematika tidak memiliki batas.
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground">Saya juga merupakan:</h3>
              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary-foreground">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span className="flex-1 pt-1 text-foreground/90">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
