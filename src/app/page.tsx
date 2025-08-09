import Image from "next/image";
import MostBookedSection from "../components/sections/MostBookedSection";
import SalonForWomenSection from "../components/sections/SalonForWomenSection";
import CleaningPestSection from "../components/sections/CleaningPestSection";
import ApplianceSection from "../components/sections/ApplianceSection";
import RepairSection from "../components/sections/RepairSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/image.png" alt="Urban Replicate" width={48} height={48} className="rounded-md" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[0.95rem] text-black/70">
            <a href="#services" className="hover:text-black hover:underline underline-offset-4">Services</a>
            <a href="#salon" className="hover:text-black hover:underline underline-offset-4">Salon</a>
            <a href="#appliance" className="hover:text-black hover:underline underline-offset-4">Appliances</a>
            <a href="#repair" className="hover:text-black hover:underline underline-offset-4">Repairs</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border px-4 py-1.5 text-sm bg-white hover:bg-black hover:text-white transition">Log in</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 grid md:grid-cols-[1.2fr_.8fr] gap-4 pt-6" id="hero">
        <div className="grid gap-4">
          <div className="rounded-2xl border bg-[#f7f7f7] p-6 h-[26rem] md:h-[32rem] flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">Home services at your doorstep</h1>
            <div className="grid grid-cols-1 gap-3">
              {[{ t: "Salon for Women", i: "/womensalon" }].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-xl border bg-white p-3 hover:shadow-sm transition">
                  <Image src="/image.png" alt="icon" width={56} height={56} className="rounded-lg" />
                  <span className="text-sm">{x.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto" />
          </div>

          {/* Promo area: single image */}
          <div className="hidden md:block">
            {/* <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
                alt="Promo"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover"
              />
            </div> */}
          </div>
        </div>
        <div className="grid gap-4">
          {/* Right-side: single image that looks like a collage (the provided image) */}
          <div className="relative h-[26rem] md:h-[32rem] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg"
              alt="Hero collage"
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sections temporarily hidden; we'll add more later */}
      {/* <MostBookedSection /> */}
      {/* <SalonForWomenSection /> */}
      {/* <CleaningPestSection /> */}
      {/* <ApplianceSection /> */}
      {/* <RepairSection /> */}
    </div>
  );
}
