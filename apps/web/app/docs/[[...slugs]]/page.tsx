export default async function DocsPage({params}: {params: Promise<{ slugs: string[]}>}) {

    const { slugs } = await params;


    if(slugs?.length === 2) {
        return <h1>Viweing docs feature {slugs[0]} and concept {slugs[1]}</h1>
    } else if(slugs?.length === 1) {
        return <h1>Viewing docs feature {slugs[0]}</h1>
    }

    return <h1>Viewing Docs Page</h1>
}