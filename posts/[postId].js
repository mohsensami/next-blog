import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Ralated from "@/components/_child/related";
import getPost from "@/lib/helper";
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/_child/spinner";
import ErrorComponent from "@/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";

export default function Page({ fallback }) {
    const router = useRouter();
    const { postId } = router.query;
    const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <ErrorComponent></ErrorComponent>;

    return (
        <Article {...data}></Article>
        // <SWRConfig value={{ fallback }}>
        // </SWRConfig>
    );
}

function Article({ title, img, subtitle, description, author }) {
    return (
        <Format>
            <Head>
                <title>{title} - Blog</title>
            </Head>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">{author ? <Author {...author}></Author> : <></>}</div>

                <div className="post py-10">
                    <h1 className="font-bold text-2xl text-center pb-5">{title || "No Title"}</h1>

                    <p className="text-gray-500 text-lg text-center">{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-md flex flex-col gap-4 text-justify leading-9">{description || "No Description"}</div>
                </div>

                <Ralated></Ralated>
            </section>
        </Format>
    );
}

export async function getStaticProps({ params }) {
    const posts = await getPost(params.postId);

    return {
        props: {
            fallback: {
                "/api/posts": posts,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPost();
    const paths = posts.map((value) => {
        return {
            params: {
                postId: value.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}
