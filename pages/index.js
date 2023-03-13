import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Format from "@/layout/format";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <Format>
            <h1>Main content</h1>
        </Format>
    );
}
