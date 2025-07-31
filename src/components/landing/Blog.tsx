import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GradientText } from '@/components/ui/gradient-text';

const blogPosts = [
  {
    title: 'The Future of AI in Marketing',
    description: 'Discover how artificial intelligence is reshaping the marketing landscape.',
    date: 'July 30, 2024',
    author: 'Jane Doe',
    image: '/blog/Gemini_Generated_Image_xqoxmpxqoxmpxqox.png',
  },
  {
    title: '5 Tips for Effective Content Automation',
    description: 'Learn how to automate your content strategy without losing the human touch.',
    date: 'July 28, 2024',
    author: 'John Smith',
    image: '/blog/Gemini_Generated_Image_drfarmdrfarmdrfa.png',
  },
  {
    title: 'Data-Driven Decisions with AI Analytics',
    description: 'Unlock the power of your data with our advanced AI analytics tools.',
    date: 'July 25, 2024',
    author: 'Emily White',
    image: '/blog/Gemini_Generated_Image_ac4lytac4lytac4l.png',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GradientText className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold">
            From the Blog
          </GradientText>
          <p className="text-lg text-muted-foreground mt-4">
            Insights, trends, and news from the world of AI-powered marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.description}</p>
                <div className="text-sm text-muted-foreground">
                  <span>{post.date}</span> &bull; <span>By {post.author}</span>
                </div>
                <Button variant="link" className="p-0 mt-4">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
