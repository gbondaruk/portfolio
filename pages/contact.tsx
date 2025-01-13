import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">Here's how you can reach me</p>
            <ul className="contact-links">
              <li className="contact-item">Email: some@address@host.com</li>
              <li className="contact-item">Phone: +1234567890</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
