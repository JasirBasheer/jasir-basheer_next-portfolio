import LatestArticlesClient from "./LatestArticlesClient";

const fetchCategories = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
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
    const res = await fetch("http://localhost:3000/api/blogs", {
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
