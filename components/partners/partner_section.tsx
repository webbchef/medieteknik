'use client';

import Image from "next/image";

export type Partner = {
  name: string;
  logo: string;
  url?: string;
  description?: string;
};

type Props = {
  partners?: Partner[];
  title?: string;
  variant?: "light" | "dark";
};

export default function PartnerSection({
  partners = [],
  title = "Samarbeten",
  variant = "light",
}: Props) {
  if (partners.length === 0) return null;

  const textColor = variant === "dark" ? "text-white" : "text-black";

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h2
          className={`${textColor} text-center font-['Barlow',sans-serif] font-bold text-[32px] md:text-[48px]`}
        >
          {title}
        </h2>

        <p
          className={`${textColor} text-center mt-6 font-['Lato',sans-serif] max-w-[900px] mx-auto`}
        >
          Vi i Sektionen samarbetar med fantastiska partners som stödjer medieteknik och våra studenter.
        </p>

        <div className="flex justify-center mt-10 pb-8">
          <div className="flex flex-wrap justify-center gap-10 w-full">
            {partners.map((p, idx) => (
              <div className="flex justify-center mt-10">
                <div className="flex flex-wrap justify-center gap-10 w-full">
                  {partners.map((p, idx) => (
                    <div key={p.name ?? idx} className="flex flex-col items-center">
                      <a href={p.url || "#"} target="_blank" rel="noreferrer">
                        <div
                          className="bg-white rounded-2xl border border-black/10 px-10 py-8 flex items-center justify-center hover:shadow-md transition
                                    w-[320px] h-[170px] sm:w-[420px] sm:h-[220px] md:w-[560px] md:h-[280px]"
                        >
                          <div className="relative w-full h-full">
                            <Image src={p.logo} alt={p.name} fill className="object-contain" priority={idx === 0} />
                          </div>
                        </div>
                      </a>

                      {p.description && (
                        <p className="mt-6 text-center font-['Lato',sans-serif] text-white max-w-[900px] whitespace-pre-line">
                          {p.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}