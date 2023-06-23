import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { SectionWrapper } from '../hoc'
import { slideIn, textVariant } from '../utils/motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }

    setLoading(true)

    emailjs
      .send(
        'service_1o1l3g8',
        'template_glsv3dr',
        {
          from_name: form.name,
          to_name: 'Gustas',
          from_email: form.email,
          to_email: 'staugax@gmail.com',
          message: form.message,
        },
        'PCKRypLUDqU6BSpsr'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible')
          setform({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('something went wrong')
        }
      )
  }

  return (
    <>
      <motion.div
        variants={slideIn('left', 'tween', 0.25, 0.75)}
        className="bg-tertiary p-5  xs:max-w-[100%]  rounded-lg "
      >
        <p className={`${styles.sectionSubText}`}>If you're interested</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none font-medium  2xl:max-w-[35%] max-w-[100%]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none font-medium 2xl:max-w-[35%] max-w-[100%]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-3 px-8 w-fit bg-black-100 text-black font-bold rounded-xl"
          >
            {loading ? '...Sending' : 'Send'}
          </button>
        </form>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
