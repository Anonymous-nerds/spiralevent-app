import React from 'react'

const Ticket = () => {
  return (
    <div className='Ticket'>
      <svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- Background --> */}
        <rect width="800" height="300" fill="white" />

        {/* <!-- Left Pattern --> */}
        <path d="M0 0 L200 0 L180 300 L0 300 Z" fill="#fce7f3" />

        {/* <!-- Ticket Border --> */}
        <rect x="10" y="10" width="780" height="280" stroke="#111" fill="none" strokeWidth="2" />

        {/* <!-- Dotted Line --> */}
        <line x1="600" y1="10" x2="600" y2="290" stroke="#111" strokeWidth="2" strokeDasharray="8" />

        {/* <!-- Event Title --> */}
        <text x="230" y="60" fontSize="28" fontWeight="bold">GitHub Universe 2023</text>

        {/* <!-- Event Details --> */}
        <text x="230" y="100" fontSize="16">December 15, 2023 • 9:00 AM - 5:00 PM</text>
        <text x="230" y="130" fontSize="16">Yerba Buena Center, San Francisco</text>

        {/* <!-- Ticket Details --> */}
        <text x="230" y="180" fontSize="14" fill="#666">Ticket No:</text>
        <text x="230" y="200" fontSize="16">657855772eb6b44a</text>

        <text x="230" y="240" fontSize="14" fill="#666">Attendee:</text>
        <text x="230" y="260" fontSize="16">John Smith</text>

        {/* <!-- QR Code Placeholder --> */}
        <rect x="640" y="70" width="120" height="120" fill="#111" />
        <text x="650" y="220" fontSize="12" fill="#666" textAnchor="start">SCAN TO VERIFY</text>

        {/* <!-- Decorative Elements --> */}
        <circle cx="40" cy="40" r="15" fill="#111" />
        <circle cx="40" cy="260" r="15" fill="#111" />

        {/* <!-- Price Tag --> */}
        <rect x="640" y="240" width="120" height="40" fill="#fce7f3" />
        <text x="700" y="265" fontSize="18" textAnchor="middle" fontWeight="bold">$100.00</text>
      </svg>
    </div>
  )
}

export default Ticket