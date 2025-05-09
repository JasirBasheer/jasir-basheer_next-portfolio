import { NextRequest, NextResponse } from "next/server";
import prisma from '@/utils/connect'

export const GET = async (req: NextRequest, { params }: { params: { slug: string[] } }) => {
    try {

        const { slug } = params;
        if (!slug || slug.length === 0) {
            return NextResponse.json({
                message: "No category or blog ID provided"
            }, { status: 400 });
        }
        const [category, blogId] = slug
        console.log(category,blogId)
        const article = await prisma.blog.findFirst({
                where: {
                    slug: blogId,
                    category: category,
                }
            })

        return new NextResponse(JSON.stringify(article, { status: 200 }))

    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong!", status: 500 }))

    }
}


