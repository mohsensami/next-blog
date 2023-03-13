import Header from "@/components/Header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function format({ children }) {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
