import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { backyardPhoto, roomPhotos } from "@/data/room-gallery";

export default function RoomGallery() {
  return (
    <section className="bg-cream-100 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Take a Peek"
            title="A Look Inside Little Bubz"
            description="Real spaces where your child will learn, nap, and play every day."
          />
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <div className="group relative overflow-hidden rounded-[2rem] shadow-soft-lg">
            <Image
              src={backyardPhoto.src}
              alt={backyardPhoto.alt}
              width={backyardPhoto.width}
              height={backyardPhoto.height}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-ink-900 uppercase shadow-soft backdrop-blur-sm">
              {backyardPhoto.caption}
            </span>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roomPhotos.map((photo, index) => (
            <Reveal key={photo.src} delay={120 + index * 80}>
              <div className="group relative overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wide text-ink-900 uppercase shadow-soft backdrop-blur-sm">
                  {photo.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
