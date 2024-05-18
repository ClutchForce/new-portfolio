import { CONTACT } from "../constants"

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b "> {CONTACT.email} </a>
        </div>
    </div>
  )
}

export default Contact