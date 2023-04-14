import React from 'react';
import useInstagramPosts from '../studentliv/useInstagramPosts';

const InstagramGallery = () => {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN ?? '';
    const posts = useInstagramPosts(accessToken);

    if (!posts) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {posts.map((post) => (
                <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" style={{ margin: '0.5rem' }}>
                    <img
                        src={post.thumbnail_url || post.media_url}
                        alt={post.caption || ''}
                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                </a>
            ))}
        </div>
    );
};

export default InstagramGallery;
