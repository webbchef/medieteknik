import { useState, useEffect } from 'react';

interface InstagramPost {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
}

const useInstagramPosts = (
    accessToken: string,
    count: number = 600, 
    refreshInterval: number = 3600000
): InstagramPost[] => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);

    // Function to shuffle the array
    const shuffleArray = (array: InstagramPost[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchPosts = async () => {
            if (!accessToken) {
                console.error('Access token is missing.');
                return;
            }

            try {
                // As an access token is only valid for 60 days without a refresh, refresh it when Instagram posts are fetched
                await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`);
                const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}&limit=${count}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (data.data) {
                    setPosts(shuffleArray(data.data));
                }
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        };

        fetchPosts();

        const intervalId = setInterval(fetchPosts, refreshInterval);
        return () => clearInterval(intervalId);
    }, [accessToken, count, refreshInterval]);

    return posts;
};

export default useInstagramPosts;
