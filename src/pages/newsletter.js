import React, { useEffect, useState } from "react"
// import { Link, graphql } from "gatsby"
// import styled from "styled-components"

import SEO from "../components/seo"

const Newsletter = () => {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  return (
    <main>
      <SEO title="Samay Shamdasani" />
      <div className="sm:flex sm:items-center sm:h-screen p-4">
        <div className="font-sans mx-auto">
          <h2 className="text-gray-700 mt-0 mb-0 text-base tracking-wide uppercase mb-0 pb-0">
            Weekly Newsletter
          </h2>
          <h1 className="text-gray-900 tracking-tighter mb-1 text-5xl mt-0">
            <span className="text-gradient bg-gradient-to-r from-pink-400 via-indigo-400 to-blue-500 pr-2">
              Thoughts
            </span>{" "}
          </h1>

          <h2 className="text-gray-800 mt-0 mb-0 text-2xl tracking-tight">
            Interesting thoughts on technology, philosophy, the future, and
            everything in between.
          </h2>

          <div className="sm:flex py-2">
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                First name
              </label>
              <input
                name="first"
                type="text"
                required
                class="ios shadow w-full outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs mr-2"
                placeholder="Samay"
                onChange={handleInputChange}
                value={form.first}
                required
              />
            </div>
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                Last name
              </label>
              <input
                name="last"
                type="text"
                required
                class="ios w-full shadow outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs mr-2"
                placeholder="Shamdasani"
                onChange={handleInputChange}
                value={form.last}
                required
              />
            </div>
            <div className="sm:w-1/3 mr-6">
              <label className="block text-base mb-2 mt-4 text-gray-700">
                Email
              </label>
              <input
                name="email"
                aria-label="Email address"
                type="email"
                required
                class="ios w-full shadow outline-none appearance-none px-2 py-3 border-none text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
                placeholder="samay@shamdasani.org"
                onChange={handleInputChange}
                value={form.email}
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className={`w-1/3 rounded shadow flex items-center justify-center py-3 px-2 border border-transparent text-base leading-6 font-medium rounded-md text-white ${
                submitted ? `bg-green-500` : `bg-blue-500 hover:bg-blue-400`
              }  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer`}
              onClick={() => {
                setSubmitted(true)
                const data = new FormData()
                for (const [key, value] of Object.entries(form)) {
                  data.append(key, value)
                }

                fetch(
                  "https://script.google.com/macros/s/AKfycbz8nQ6sofKTSkh47k-jUzvQHLQs30j-AvxChyLCpETv2uPkgd4W/exec",
                  { method: "POST", body: data }
                ).then(() => {
                  setForm({
                    first: "",
                    last: "",
                    email: "",
                  })
                })
              }}
            >
              {submitted ? "Subscribed ✔" : "Subscribe"}
            </button>
          </div>
          <div className="mt-6">
            by{" "}
            <a
              href="/"
              target="_blank"
              className="text-blue-500 no-underline hover:opacity-75"
            >
              shamdasani.org
            </a>
          </div>
          {/* <div>
              <input placeholder="First Name" />
              <input placeholder="Email" />
              <button>Subscribe</button>
            </div> */}
        </div>
      </div>
    </main>
  )
}

export default Newsletter
