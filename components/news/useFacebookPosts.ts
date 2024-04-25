import { useState, useEffect } from 'react';

interface FacebookPost {
    id: string;
    message: string;
    created_time: string;
    media_type: string;
    media_url: string;
    permalink_url: string;
}

const useFacebookPosts = (
    pageId: string,
    accessToken: string,
    count: number = 25,
    refreshInterval: number = 3600000
): FacebookPost[] => {
    const [posts, setPosts] = useState<FacebookPost[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = `https://graph.facebook.com/v19.0/${pageId}/feed?access_token=${accessToken}`;
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error ? data.error.message : 'Failed to fetch');
                }

                const detailedPosts = await Promise.all(data.data.map(async (post: any) => {
                    const detailsUrl = `https://graph.facebook.com/v19.0/${post.id}?fields=message,created_time,attachments,permalink_url&access_token=${accessToken}`;
                    const detailsResponse = await fetch(detailsUrl);
                    const detailsData = await detailsResponse.json();

                    return {
                        id: detailsData.id,
                        message: detailsData.message,
                        created_time: detailsData.created_time,
                        permalink_url: detailsData.permalink_url,
                        media_type: detailsData.attachments?.data[0]?.type,
                        media_url: detailsData.attachments?.data[0]?.media?.image?.src,
                    };
                }));

                setPosts(detailedPosts);
                setError(null);
            } catch (error: any) {
                console.error('Error fetching Facebook posts:', error);
                setError(error.message);
            }
        };

        fetchPosts();
        const intervalId = setInterval(fetchPosts, refreshInterval);
        
        return () => clearInterval(intervalId);
    }, [pageId, accessToken, count, refreshInterval]);
    return posts;
};

export default useFacebookPosts;
