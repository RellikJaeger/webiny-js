import React from "react";
import Head from "next/head";

export async function getServerSideProps({ params }) {
    const [tenantId, localeCode, pageUrl] = params.args;

    // Pass data to the page via props
    return { props: { tenantId, localeCode, pageUrl } };
}

function HomePage(props) {
    return (
        <>
            <Head>
                <title>SSR test - {props.pageUrl}</title>
            </Head>
            <div>
                <img src="/images/snip.png" alt="Snip" className="logo" />
                Welcome to Next.js! {props.tenantId} {props.localeCode} {props.pageUrl}
            </div>
        </>
    );
}

export default HomePage;
