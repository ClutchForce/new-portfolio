import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import Spline from '@splinetool/react-spline';
import SplineWrapper from './Test1/SplineWrapper';


const Contact = () => {
  return (
    <div className="relative">
      {/* <SplineWrapper scene="https://prod.spline.design/a0WlUCbntITjst14/scene.splinecode" /> */}
      {/* Fail attempt at making interactive overlay under contact form div. Time wasted: 1h */}
      <div className="relative z-10 bg-black bg-opacity-0 p-8">
        <div className="border-b border-neutral-900 pb-20">
          <motion.h1
            className="my-10 text-center text-4xl text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h1>

          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.h3
                className="text-2xl font-bold mb-4 text-white"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                Get in touch
              </motion.h3>

              <motion.address
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="mb-4 text-white"
              >
                <strong>Address:</strong> {CONTACT.address}
                <br />
                <br />
                <strong>Phone:</strong> {CONTACT.phoneNo}
                <br />
                <br />
                <strong>Email:</strong>{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-blue-500">
                  {CONTACT.email}
                </a>
              </motion.address>
            </div>

            <div>
              <motion.form
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="contact__form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <input
                      className="form-input w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="form-input w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-textarea w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    className="mt-4 rounded bg-neutral-900 px-4 py-2 text-lg font-medium text-purple-500 hover:bg-neutral-700"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Spline scene="https://prod.spline.design/a0WlUCbntITjst14/scene.splinecode" />

    </div>
    
  );
};

export default Contact;