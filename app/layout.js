import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "توییتر چی میگه",
    description: "ساخته شده توسط امید",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
};
