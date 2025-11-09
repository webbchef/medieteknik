import Head from "next/head";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
import BackgroundImage from "../../components/general/BackgroundImage";
import NewsCard from "../../components/news/NewsCard";
import useFacebookPosts from "../../components/news/useFacebookPosts";

const NewsPage: NextPage = () => {
    const pageId = process.env.FACEBOOK_PAGEID ?? "";
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN ?? "";
    const posts = useFacebookPosts(pageId, accessToken);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate"
            style={{ overflow: "hidden", background: "white" }}
        >
            <Head>
                <title>Medieteknik | Nyheter</title>
                <meta name="description" content="Nyheter för civilingenjör i medieteknik på Linköpings universitet" />
                <link rel="icon" href="/images/logotyp_svart_text.png" />
            </Head>

            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <BackgroundImage pageName="NYHETER" imgSrc="/images/hus2.png" />

                <Grid item xs={12} sm={8} md={5}>
                <Grid sx={[ { textAlign: "center"}, ]} >
                    <Typography variant='h3'>
                        Här läggs nyheter för Medietekniksektionen upp. Vill du marknadsföra här? Kontakta{' '}
                        <a
                            href="mailto:naringsliv@medieteknik.nu"
                            style={{ color: "#EC6610", textDecoration: "underline" }}>
                            vår näringslivsansvarig!
                        </a>
                    </Typography>
                </Grid>
                    {posts.map((post) => (
                        <Grid item key={post.id} sx={{ marginBottom: 2 }}>
                            <NewsCard post={post} />
                        </Grid>
                    ))}
                <Grid sx={[ { textAlign: "center"}, ]} >
                    <Typography variant='h3'>
                        Vill du se fler nyheter? Kolla in{' '}
                        <a
                            href="https://www.facebook.com/mtsektionen"
                            style={{ color: "#EC6610", textDecoration: "underline" }}>
                            medieteknik på Facebook!
                        </a>
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </motion.div>
    );

}

export default NewsPage;