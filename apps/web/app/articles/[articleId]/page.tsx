import Link from "next/link";

export default async function ArticlePage({params, searchParams} : {
    params: Promise<{ articleId: string}>,
    searchParams: Promise<{lang?: "en" | "bn"}>
}) {
    const articleId = (await params).articleId;
    const language = (await searchParams).lang;

    return <div>
        <h1>Article id - {articleId}</h1>
        <p>Search Params - language - {language}</p>

        <Link href = {`/articles/${articleId}?lang=en`}>EN</Link>
        <Link href = {`/articles/${articleId}?lang=bn`}>BN</Link>
    </div>
}