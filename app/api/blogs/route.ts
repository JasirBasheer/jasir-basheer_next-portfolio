import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

// Define Blog and Comment interfaces based on Prisma schema
interface Blog {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img?: string | null;
  views: number;
  content: string;
  catSlug: string;
  category: string;
  comments: Comment[];
}

interface Comment {
  id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  blogSlug: string;
}

export const GET = async () => {
  try {
    const articles = await prisma.blog.findMany();

    return NextResponse.json(articles as Blog[], { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
};