import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { NewsPost } from '../../utils/types';

interface InputProps {
    post: NewsPost;
}

export default function NewsCard(props: InputProps) {
    const date = new Date(props.post.created_time).toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    return (
        <Card variant="outlined">
            {props.post.media_url && (
                <Link href={props.post.permalink_url} target="_blank" rel="noopener noreferrer" underline="none">
                    <CardMedia
                        component={props.post.media_type === 'video' ? 'video' : 'img'}
                        src={props.post.media_url}
                        title="Post media"
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                        }}
                        controls={props.post.media_type === 'video'}
                    />
                </Link>
            )}
            <CardContent>
                <Typography variant="body1">
                    {props.post.message}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.post.permalink_url &&
                        <Link href={props.post.permalink_url} target="_blank" rel="noopener noreferrer" underline="none" color="inherit">
                            {date} | Visa på Facebook
                        </Link>                    
                    }
                </Typography>
            </CardContent>
        </Card>
    );
};