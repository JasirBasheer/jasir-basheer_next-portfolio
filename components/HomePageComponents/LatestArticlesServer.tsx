import LatestArticlesClient from "./LatestArticlesClient";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const fetchCategories = async () => {
    const res = await fetch(`${apiUrl}/api/categories`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return []
        // throw new Error("Failed to fetch articles"); 
    }
    const data = await res.json();
    return data.map((item: any) => item.title);
};

const fetchArticles = async () => {
    const res = await fetch(`${apiUrl}/api/blogs`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        return []
        // throw new Error("Failed to fetch articles"); 
    }

    return res.json();
};

const LatestArticles = async () => {
    const categories = await fetchCategories() || []
    const articles = await fetchArticles()|| []


    return <LatestArticlesClient categories={categories} articles={articles} />;
};

export default LatestArticles;
