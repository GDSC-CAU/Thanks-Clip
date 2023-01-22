import Script from "next/script"

const GoogleAnalytics = ({ googleAnalyticsID }) => (
    <>
        {process.env.NODE_ENV === "production" && (
            <>
                <Script
                    strategy="worker"
                    src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsID}`}
                />
                <script
                    data-partytown-config
                    dangerouslySetInnerHTML={{
                        __html: `
                            partytown = {
                                lib: "/_next/static/~partytown/",
                                forward: ["dataLayer.push", "gtag"],
                            };
                        `,
                    }}
                />
                <script
                    type="text/partytown"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            window.gtag = function gtag(){window.dataLayer.push(arguments);};
                            gtag('js', new Date());
                            gtag(
                                'config', 
                                '${googleAnalyticsID}',
                                {
                                    page_path: window.location.pathname,
                                }
                            );
                        `,
                    }}
                />
            </>
        )}
    </>
)

export { GoogleAnalytics }
