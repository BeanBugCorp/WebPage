// Blog posts
export type Blog = {
    id: string;
    thumbnail: string;
    mdEN: string;
    mdES: string;
    url: string;
};

export const BLOGS: Blog[] = [
    { id: "garabatos-by-lily", thumbnail: "/thumbnails/GBLP.png", mdEN: "/src/md/EN_Garabatos_by_Lily.md", mdES: "/src/md/ES_Garabatos_by_Lily.md", url: "/projects/garabatos-by-lily" }
]