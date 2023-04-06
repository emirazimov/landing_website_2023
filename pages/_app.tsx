import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-responsive-modal/styles.css';
import 'rc-tabs/assets/index.css';

export default function App({ Component, pageProps }) {
	const [queryClient] = useState(() => new QueryClient());
    const [links, setLinks] = useState<JSX.Element | null>(null);
    const site = "https://www.bookinglane.com";
    const canonicalURL = site + useRouter()?.pathname;

    useEffect(() => {
        if (!links) {
            setLinks(
                <>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                </>
            )
        }
    }, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
                <title>
                    Book Reliable Executive Car and Limo Services with Bookinglane
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="facebook-domain-verification"
                    content="ezyvtf65id5zk3ndcmxa0sar41b2xk"
                />
                <link
                    rel="icon"
                    href="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png"
                />
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
                <meta
                    name="google-site-verification"
                    content="sXoQ0wujmmEqIdYfFi3cG_IzxzjqABXKgDAVMKMXObI"
                />

                <meta
                    name="keywords"
                    content="Limo Service, Ground Transportation, Quote for Limo, Black Car Service Near me, Wine Tour, Local Transportation services, Limousine Service, Executive Car Service, Chauffeur Service, Hourly Limo, SUV+Sedan+Limo service, Worldwide transportation service, nationwide transportation service, Book a limo, Book a black car, find a limo, Limousine, black car, Corporate charter bus-limo-car services, Limo service in San Francisco, Napa Tour, Wine Tour, Airport Transfer, Limo Now, limo near me, limo around me, black car around me, black car near me"
                ></meta>
                <link
                    rel="apple-touch-icon"
                    href="https://landing-page-nextjs.s3.us-east-2.amazonaws.com/logo.png"
                />
                <link rel="canonical" href="https://www.bookinglane.com" />
                <link rel="canonical" href={canonicalURL} />
                <meta
                    name="description"
                    content="Book executive car service with Bookinglane. Instantly connect with providers locally and nationwide for a hassle-free luxurious travel. Limo, black car, chauffeur service and more."
                ></meta>

                <meta name="robots" content="all"></meta>
                <meta name="robots" content="max-snippet:-1"></meta>
                <meta name="robots" content="max-image-preview:large"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="robots" content="max-video-preview:-1"></meta>
                <meta
                    name="googlebot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                ></meta>
                <meta
                    name="bingbot"
                    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                ></meta>

                {/* OG  */}
                <meta property="og:locale" content="en_US"></meta>
                <meta
                    property="og:title"
                    content="Book Reliable Executive Car and Limo Services with Bookinglane"
                />
                <meta property="og:url" content="https://bookinglane.com/"></meta>
                <meta property="og:type" content="website"></meta>
                <meta
                    property="og:site_name"
                    content="Book Reliable Executive Car and Limo Services with Bookinglane"
                ></meta>
                <meta
                    property="og:description"
                    content="Book executive car service with Bookinglane. Instantly connect with providers locally and nationwide for a hassle-free luxurious travel. Limo, black car, chauffeur service and more."
                ></meta>
                <meta
                    property="og:image"
                    content="https://new-client-website.s3.us-east-2.amazonaws.com/preview-image.jpg"
                ></meta>

                {/*TWITTER*/}
                <meta
                    property="twitter:title"
                    content="Book Reliable Executive Car and Limo Services with Bookinglane"
                ></meta>
                <meta
                    property="twitter:description"
                    content="Book executive car service with Bookinglane. Instantly connect with providers locally and nationwide for a hassle-free luxurious travel. Limo, black car, chauffeur service and more."
                ></meta>
                <meta
                    property="twitter:image"
                    content="https://new-client-website.s3.us-east-2.amazonaws.com/preview-image.jpg"
                ></meta>
                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta
                    name="viewport"
                    // content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                    // content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="lang" content="ru" />

                {links}
            </Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}
