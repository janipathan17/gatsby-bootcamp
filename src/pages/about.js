import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Hi, you will see my bio here soon...</p>
            <p>Contact <Link to='/contact'>click here</Link></p>
        </Layout>
    )
}

export default AboutPage