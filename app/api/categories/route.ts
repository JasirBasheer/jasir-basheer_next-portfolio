import { NextResponse } from "next/server";
import prisma from '@/utils/connect'

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany() || []
        return NextResponse.json(categories, { status: 200 });
        
    } catch (error) {
        console.error("Categories error:", error);
        return NextResponse.json([], { status: 500 });
    }
}