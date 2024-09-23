
import {BsPenFill, BsCameraReelsFill, BsFillPeopleFill, BsFillPlayBtnFill, BsFileZipFill, BsGearFill} from "react-icons/bs"
const dummyData = {
  vission: [
    {
      title: "High-Quality Teaching Videos",
      desc: "Deliver crystal-clear video lectures up to 4K resolution. Choose between H.264 and HEVC codecs for compatibility and smaller file sizes. Capture up to 60 FPS with customizable bitrates for smooth playback.",
    },
    {
      title: "High-Fidelity Audio for Clear Learning",
      desc: "Ensure clear audio in your lectures with dual-channel support and advanced noise cancellation. Experience audio quality up to 320 kbps and 96 kHz, with an option to mute for focused learning.",
    },
    {
      title: "Effortless Lecture Management",
      desc: "Simplify lecture preparation and sharing by importing and exporting lectures as cslide files. Customize content effortlessly to suit your teaching style and enhance student engagement.",
    },
  ],
  mission: [
    {
      title: "Drawing and Annotation Tools",
      desc: "Enhance your lecture videos with versatile drawing and annotation tools in Cloudemy Studio. Highlight key concepts, annotate diagrams, and draw attention to important details, ensuring clarity and engagement for your students.",
    },
    {
      title: "Export Lecture Notes as PDF",
      desc: "Easily share comprehensive lecture notes with your students by exporting them as PDF files directly from Cloudemy Studio. Provide structured content and supplementary materials that complement your video lectures, fostering a more effective learning experience.",
    },
  ],
  blog:[
    {
      thumb: <BsFillPlayBtnFill size={"lg"} />,
      title: "Seamlessly Record Video Lectures",
      desc:[
        {
          list:"Effortlessly record your lectures using images, PDFs, and PowerPoint presentations."
        },
        {
          list:"Import images, PDFs with custom settings like importing page range, and even import PPTs."
        },
        {
          list:"Everything is saved in a single .cslide file for easy sharing and importing."
        }
      ]
    },
    {
      thumb: <BsFillPeopleFill/>,
      title: "Enhance Student Engagement",
      desc:[
        {
          list:"Create dynamic content that enhances student engagement and comprehension."
        },
        {
          list:"Customize each slide with options to modify images, including crop, rotate, and invert colors."
        },
        {
          list:"Choose a custom background color for each slide to match your lesson theme."
        }
      ]
    },
    {
      thumb: <BsPenFill />,
      title: "Powerful Drawing and Annotation Tools",
      desc:[
        {
          list:"Write and draw directly on slides using your finger or stylus."
        },
        {
          list:"Draw shapes like triangles, circles, squares, rectangles, lines, arrows, pentagons, and hexagons."
        },
        {
          list:"Use the arrow pointer tool to highlight specific elements on the current slide."
        }
      ]
    },
    {
      thumb:<BsCameraReelsFill/>,
      title: "Convenient Recording Features",
      desc: [
        {
          list:"Easily rearrange slides using the grid view feature."
        },
        {
          list:"Pick any color from the color spectrum palette for pens, shapes, and backgrounds."
        },
        {
          list:"Download drawn slides as images or PDFs for easy sharing and distribution."
        }
      ],
    },
    {
      thumb: <BsFileZipFill />,
      title: "Sharing Whole Presentation as One File",
      desc:[
        {
          list:"Create a lecture file using images, PDFs, PPTs, and make all needed modifications."
        },
        {
          list:"Export the entire file as a .cslide file and share it with others."
        },
        {
          list:"Simply import the .cslide file on another device to start recording without any hassle."
        }
      ]
    },
    {
      thumb: <BsGearFill />,
      title: "Advanced Video Settings:",
      desc:[
        {
          list:"Record videos in resolutions up to 4K for stunning clarity."
        },
        {
          list:"Enjoy dual-channel audio recording support with noise cancellation for crisp, clear sound"
        },
        {
          list:"Customize audio quality settings with options for bitrate and frequency up to 96kHz."
        },
        {
          list:"Choose from a range of video quality settings, from 480p to 4K, with custom frame rate settings up to 60 fps."
        },
        {
          list:"Select between AVC and HEVC encoder options for optimal video compression."
        }
      ]
    },
  ],
  faq:[
    {
      question: "Hello cloudemy",
      solution: "This is the third item's accordion body.You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      image : "https://fastly.picsum.photos/id/791/300/200.jpg",
      steps: [
          {
          image: "https://fastly.picsum.photos/id/791/200/200.jpg",
          description: "description" 
         },
      ]
    },
    {
      question: "Question text2",
      solution: "This is the third item's accordion body.You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      image : "https://fastly.picsum.photos/id/791/300/200.jpg",
      steps: [
          {
          image: "https://fastly.picsum.photos/id/791/200/200.jpg",
          description: "description" 
         },
      ]
    },
    {
      question: "Question text3",
      solution: "This is the third item's accordion body.You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      image : "https://fastly.picsum.photos/id/791/300/200.jpg",
      steps: [
          {
          image: "https://fastly.picsum.photos/id/791/200/200.jpg",
          description: "description" 
         },
      ]
    },
    {
      question: "Question text4",
      solution: "This is the third item's accordion body.You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
      image : "https://fastly.picsum.photos/id/791/300/200.jpg",
      steps: [
          {
          image: "https://fastly.picsum.photos/id/791/200/200.jpg",
          description: "description" 
         },
      ]
    }
  ]
};
export default dummyData;
