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
      style={{ overflow: "hidden", background: "white" }}
    >
      <BackgroundImage pageName="NYHETER" imgSrc="/images/hus2.png" />

      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h3>
            Här läggs nyheter för Medietekniksektionen upp. Vill du marknadsföra här? Kontakta{' '}
            <a
              href="mailto:naringsliv@medieteknik.nu"
              style={{ color: "#EC6610", textDecoration: "underline" }}>
              vår näringslivsansvarig!
            </a>
          </h3>
        </div>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "2rem" }}>
            <NewsCard post={post} />
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h3>
            Vill du se fler nyheter? Kolla in{' '}
            <a
              href="https://www.facebook.com/mtsektionen"
              style={{ color: "#EC6610", textDecoration: "underline" }}>
              vår Facebook-sida!
            </a>
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
