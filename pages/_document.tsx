import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'
import Script from "next/script"
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	render(): JSX.Element {
		return (
			<Html style={{ scrollBehavior: 'smooth' }} lang="en">
				<Head>
					<Script id="google-tag-manager" strategy='afterInteractive'>
						{`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-5DWMQ3W')
						`}
					</Script>
					<Script
						src="https://apis.google.com/js/api.js"
						strategy='afterInteractive'
					></Script>
					<Script
						strategy='afterInteractive'
						src="https://www.googletagmanager.com/gtag/js?id=G-N6ZS1BMP1J"
					></Script>

					<Script id="google-analitycs" strategy='afterInteractive'>
						{`
							window.dataLayer = window.dataLayer || [] 
							function gtag() {
								dataLayer.push(arguments)
							}
							gtag("js", new Date()) 
							gtag("config", "G-N6ZS1BMP1J")`}
					</Script>

					<Script			
						strategy='afterInteractive'			
						id="ld+json/website"
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify({
								"@context": "https://schema.org/",
								"@type": "WebSite",
								name: "Bookinglane",
								url: "https://bookinglane.com",
								potentialAction: {
									"@type": "SearchAction",
									target: "https://bookinglane.com/search?q={findalimo}",
									"query-input": "required name=findalimo",
								},
							}),
						}}
					/>
					<Script strategy='afterInteractive'>
						{`  
							(
								function(d,s,i) {
									var f,j;
									f=d.getElementsByTagName(s)[0];
									j=d.createElement(s);
									j.async=true;
									j.src='https://mtag.microsoft.com/tags/'+i+'.js';
									f.parentNode.insertBefore(j,f);
								}
							)(document,'script','14156212208030');
						`}
					</Script>
					<Script>
						{`
						 function report_fill_locations() {
							window.mtagq = window.mtagq || [];
   							window.mtagq.push("event", "fill_locations", {"currency":"USD"});
						  }
						`}
					</Script>
					<Script strategy='afterInteractive'>
						{`
						 function report_land_payment_form(revenueValue = "100") {
							window.mtagq = window.mtagq || [];
							window.mtagq.push("event", "land_payment_form", {"revenue_value": revenueValue, "currency": "USD"});
						  }
						`}
					</Script>
					<Script strategy='afterInteractive'>
						{`
						 function report_make_reservation(revenueValue = "100") {
							window.mtagq = window.mtagq || [];
							window.mtagq.push("event", "make_reservation", {"revenue_value": revenueValue, "currency": "USD"});
						  }
						`}
					</Script>

					<Script strategy='afterInteractive'>
						{`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-PZW9LV4');
						`}
					</Script>

					<Script 
						strategy='afterInteractive'
						src="https://www.googletagmanager.com/gtag/js?id=G-N1W5HEMCN2"
					></Script>
					<Script strategy='afterInteractive'>
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
	
							gtag('config', 'G-N1W5HEMCN2');
						`}
					</Script>

					<Script 
						strategy='afterInteractive'
						src="https://www.googletagmanager.com/gtag/js?id=UA-261143036-1"
					></Script>
					<Script strategy='afterInteractive'>
						{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
	
							gtag('config', 'UA-261143036-1');
						`}
					</Script>

					<noscript>
						<iframe
							src="https://www.googletagmanager.com/ns.html?id=GTM-5DWMQ3W"
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						></iframe>
					</noscript>
					{/* <!-- End Google Tag Manager (noscript) --> */}

					<noscript>
						<iframe 
							src="https://www.googletagmanager.com/ns.html?id=GTM-PZW9LV4"
							height="0" 
							width="0" 
							style={{ display: "none", visibility: "hidden" }}
						></iframe>
					</noscript>

					<Script id="google-tag-manager-test-local" strategy="afterInteractive">
						{`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-MM6KVP4');
						`}
					</Script>

					<Script
					 	strategy="afterInteractive"
                        id="ld+json/product"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LocalBusiness",
                                name: "Bookinglane",
                                image:
                                    "https://new-client-website.s3.us-east-2.amazonaws.com/preview-image.jpg",
                                "@id": "https://bookinglane.com",
                                url: "https://bookinglane.com",
                                telephone: "+1 (415) 384-5039",
                                address: {
                                    "@type": "PostalAddress",
                                    streetAddress: "1400 Mission St",
                                    addressLocality: "San Francisco",
                                    addressRegion: "CA",
                                    postalCode: "94103",
                                    addressCountry: "US",
                                },
                                geo: {
                                    "@type": "GeoCoordinates",
                                    latitude: 37.789047,
                                    longitude: -122.4079463,
                                },
                                openingHoursSpecification: {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    opens: "00:00",
                                    closes: "23:59",
                                },
                                sameAs: "https://bookinglane.com",
                            }),
                        }}
                    />

					<noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-MM6KVP4"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        ></iframe>
                    </noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
