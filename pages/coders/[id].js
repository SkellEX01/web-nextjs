import React from 'react';
import Head from "next/head";

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();
    const paths = data.map(coder => ({ params: { id: coder.id.toString() }}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: { coder: data }
    }
}

const Detail = ({ coder }) => {
    return (
        <div>
            <Head>
                <title>Coder Wikipedia | {coder.name}</title>
                <meta name={'keywords'} content={'coders'} />
            </Head>
            <h1>Detail Page</h1>
            <p>Email: {coder.email}</p>
            <p>Website: {coder.website}</p>
            <p>Address: {coder.address.street}, {coder.address.city}</p>
            <p>Company: {coder.company.name}</p>
        </div>
    )
}

export default Detail