import { useState, useEffect } from "react";
import React from 'react'
import logo from "../../assets/spiraleE3.png";
import api from "../../../utils/api.js";
import { Link, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";





const Ticket = () => {

  //********************** state variables **********************//
  const { eventCode } = useParams();
  const [events, setEvents] = useState([]);
  const [eventsName, setEventsName] = useState("");
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);

  //********************** Fetch event details **********************//
  useEffect(() => {
    setIsLoading(true); //set loading state to be true
    api.get(`/events/${eventCode}`)
      .then(response => { setEvents(response.data.data); setEventsName(response.data.data[0].eventName) })
      .catch(error => { console.error('Error fetching events:', error); })
      .finally(() => { setIsLoading(false); });
  }, [eventCode]);

  //***************HandleDownloadPdf */
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",


    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log(imgProperties)


    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('examplepdf.pdf');

  };



  const printRef = React.useRef(null);


  return (
    <div className='main'>
      <section className='bg-[#dad9dd] '>
        <div>
          <img src={logo} alt="" srcset="" className='lg:left-[60px] left-[50px] w-[200px] h-[50px] top-[15px] relative' />

        </div>

        <section ref={printRef} className='contact flex justify-center items-center min-h-[100%]'>

          <div className=' bg-[#fff] max-w-[1200px] w-[100%] pr-[25px] pl-[25px] pt-[30px] pb-[30px] rounded-[5px] shadow-md border-black outline-[20px] outline-[#000] text-[#333]
    m-[25px] justify-between flex  '>
            <div className="left ">
              <h2 className='text-4xl  font-bold text-pink-800 pb-[10px] pt-[18px] lg:pl-[50px]'>{event.eventName}</h2>
              <h2 className='font-bold text-3xl pb-[20px] pt-[10px] lg:pl-[50px]'>General Admission</h2>
              <div className='flex relative justify-content-center'>
                <h2 className='pb-[10px] lg:pr-[10px] font-bold text-[13px] sm:text-[18px] md:text-[18px] lg:pl-[50px]'>December 15, 2023 • 9:00 AM - 5:00 PM</h2>
              </div>
              <div className='relative flex justify-between pt-[30px] pr-[50px]'>
                <p className='pb-[10px] font-medium lg:pl-[50px]'>Yerba Buena Center, San Francisco</p>
                <p className='text-gray-500 font-medium pb-[10px] lg:pl-[50px]'>Ticket Price :  <span className='text-pink-800'>$100.00 </span></p>

              </div>
              <p className='text-gray-500 font-medium lg:pl-[50px] lg:pt-[30px]'>Order Description</p>
              <p className=' text-[8px] lg:pl-[50px] lg:pt-[5px] pt-[6px] pr-[50px]'>Order for h****a j**r** y****  Made on 3rd May 2025 at 15:30 WAT</p>

            </div>
            <div className="right">

              {/**QR code */}
              <div><h2 className='pb-[5px] font-bold'>Ticket ID:</h2></div>
              <div className='w-[180px] bg-black h-[180px]'></div>





            </div>


          </div>



        </section>

        <div className='flex relative items-center pl-[45%] pb-[20px] '>
          <button onClick={handleDownloadPdf} className='bg-pink-800 hover:bg-pink-900 text-[#fff] w-[150px] h-[50px] rounded-[10px] shadow-sm'>Download Ticket</button>
        </div>
        <div className='rights justify-content-center align-items-center flex'>
          <h2 className='text-1xl text-gray-500  pl-[200px] lg:pl-[500px] pb-10'>The Spiral Events Team-All Right Reserved</h2>
        </div>

      </section>

    </div >
  )
}

export default Ticket