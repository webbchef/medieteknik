'use client';

import { motion } from "framer-motion";
import BackgroundImage from "../../components/general/BackgroundImage";
import NewsCard from "../../components/news/NewsCard";
import useFacebookPosts from "../../components/news/useFacebookPosts";

export default function NewsPage() {
  const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGEID ?? "";
  const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN ?? "";
  const posts = useFacebookPosts(pageId, accessToken);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      className="overflow-hidden bg-white"
    >
      <BackgroundImage pageName="NYHETER" imgSrc="/images/hus2.png" />

      <div className="flex justify-center w-full">
        <div className="w-full max-w-4xl px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl">
              Här läggs nyheter för Medietekniksektionen upp. Vill du marknadsföra här? Kontakta{' '}
              <a
                href="mailto:naringsliv@medieteknik.nu"
                className="text-[#EC6610] underline"
              >
                vår näringslivsansvarig!
              </a>
            </h3>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="mb-4">
              <NewsCard post={post} />
            </div>
          ))}

          <div className="text-center mt-8">
            <h3 className="text-xl md:text-2xl">
              Vill du se fler nyheter? Kolla in{' '}
              <a
                href="https://www.facebook.com/mtsektionen"
                className="text-[#EC6610] underline"
              >
                medieteknik på Facebook!
              </a>
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
