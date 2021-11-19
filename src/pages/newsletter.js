import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I wrote to my friends every few weeks</h4>
          <form className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
