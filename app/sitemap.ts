import { MetadataRoute } from 'next';
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://bshop.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/cart`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        },
    ];

    const productSnapshot = await getDocs(collection(db, "products"));
    const productPages = productSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            url: `${baseUrl}/products/${data.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        };
    });

    return [...staticPages, ...productPages];
}