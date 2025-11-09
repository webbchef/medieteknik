import { NewsPost } from '../../utils/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';

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
        <Card className="border">
            {props.post.media_url && props.post.permalink_url && (
                <Link href={props.post.permalink_url} target="_blank" rel="noopener noreferrer" className="no-underline">
                    {props.post.media_type === 'video' ? (
                        <video
                            src={props.post.media_url}
                            title="Post media"
                            className="w-full object-cover"
                            controls
                        />
                    ) : (
                        <img
                            src={props.post.media_url}
                            alt="Post media"
                            className="w-full object-cover"
                        />
                    )}
                </Link>
            )}
            <CardContent className="pt-6">
                <p className="text-base">
                    {props.post.message}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    {props.post.permalink_url &&
                        <Link
                            href={props.post.permalink_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-inherit hover:text-[#EC6610]"
                        >
                            {date} | Visa på Facebook
                        </Link>
                    }
                </p>
            </CardContent>
        </Card>
    );
}
