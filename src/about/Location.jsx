import React from 'react'

const Location = () => {
  return (
    <div className="flex-row">
    <div className="address font-semibold text-[24px] m-5 text-justify">
      National Institute of Geo-Informatics Science and Technology
      <br />
      Survey of India Hyderabad, Telangana 500039
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.159707562858!2d78.5524653147966!3d17.40412158806857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9939e18e801b%3A0xffda9a8bca611295!2sIndian%20Institute%20of%20Surveying%20%26%20Mapping!5e0!3m2!1sen!2sin!4v1677136908918!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
    ></iframe>
  </div>
    )
}

export default Location