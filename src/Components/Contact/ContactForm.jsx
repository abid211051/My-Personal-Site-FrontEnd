import React from 'react'
import ContactInfo from './ContactInfo'

const ContactForm = () => {
  const handlemessage = async(e)=> {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const feedback = {
      name,
      email,
      subject,
      message
    }
    const res = await fetch(`https://abid-afnan-server.vercel.app/message`, {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(feedback)
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <>
      <div className='w-full flex md:justify-end'>
        <ContactInfo/>
      </div>
      <div className='w-full'>
        <form action="" className='flex flex-col gap-8' onSubmit={handlemessage}>
          <div className='flex sm:flex-row flex-col gap-8'>
            <div className='w-full'>
              <h4 className='font-jost text-sm font-bold'>YOUR NAME <span className='text-red-500'>*</span></h4>
              <input type="text" className='w-full border-[2px] border-black p-4 rounded-full' required name='name'/>
            </div>
            <div className='w-full'>
              <h4 className='font-jost text-sm font-bold'>YOUR EMAIL ADDRESS <span className='text-red-500'>*</span></h4>
              <input type="text" className='w-full border-[2px] border-black p-4 rounded-full' required name='email'/>
            </div>
          </div>
          <div>
            <h4 className='font-jost text-sm font-bold'>YOUR SUBJECT</h4>
            <input type="text" className='w-full border-[2px] border-black p-4 rounded-full' name='subject'/>
          </div>
          <div>
            <h4 className='font-jost text-sm font-bold'>YOUR MESSAGE <span className='text-red-500'>*</span></h4>
            <textarea cols="30" rows="5" className='w-full border-[2px] border-black p-2 rounded-2xl' required name='message'></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='font-jost font-bold border-[2px]
                border-black rounded-full py-4 px-12 shado bg-white
                 hover:bg-secondary hover:text-white duration-200'
              type='submit'
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>

  )
}

export default ContactForm
