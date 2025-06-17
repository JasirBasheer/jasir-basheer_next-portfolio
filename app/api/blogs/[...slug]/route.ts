import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/utils/connect';

// interface Blog {
//     id: string;
//     createdAt: Date;
//     slug: string;
//     title: string;
//     desc: string;
//     img?: string | null; // Optional, can be string or null
//     views: number;
//     content: string;
//     catSlug: string;
//     category: string;
//     comments: Comment[];
//   }
  
//   interface Comment {
//     id: string;
//     createdAt: Date;
//     desc: string;
//     userEmail: string;
//     blogSlug: string;
//     // Optionally include user and blog if needed, but avoid circular references
//     // user?: User; // Define User interface if needed
//     // blog?: Blog; // Avoid including to prevent deep nesting
//   }

export const GET = async (
  req: NextRequest,
  { params }: { params: any }
) => {
  try {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
      return NextResponse.json(
        { message: 'No category or blog ID provided' },
        { status: 400 }
      );
    }

    const [category, blogId] = slug;

    // const article = await prisma.blog.findFirst({
    //   where: {
    //     slug: blogId,
    //     category: category,
    //   },
    // });
    const article = {}

    if (!article) {
      return NextResponse.json(
        { message: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article , { status: 200 });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
};