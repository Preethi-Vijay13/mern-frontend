import teethCleaningImg from "../assets/images/teeth-cleaning.jpg";
import cosmeticDentistryImg from "../assets/images/cosmetic-dentistry.jpg";
import rootCanalImg from "../assets/images/root-canal.jpg";
import bracesImg from "../assets/images/braces-aligners.jpg";
import extractionImg from "../assets/images/tooth-extraction.jpg";
import implantImg from "../assets/images/dental-implant.jpg";

const services = [
  {
    id: "cleaning",
    icon: "🦷",
    title: "Teeth Cleaning",
    detail: "Professional cleaning to remove plaque and tartar, helping prevent cavities and gum disease. Done with ultrasonic scaling and polishing for a fresh, clean feel.",
    image: teethCleaningImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Preethi R.",
      specialization: "Preventive Dentistry",
      experience: "10+ years",
      qualifications: "BDS, MDS",
    },
    feedback: [
      "My teeth feel so clean and fresh!",
      "Very gentle and thorough cleaning process.",
      "Great experience, highly recommend!",
      "The cleaning was fast, and I left feeling great.",
    ],
    rating: 4.7,
  },
  {
    id: "cosmetic",
    icon: "😁",
    title: "Cosmetic Dentistry",
    detail: "Smile makeovers with whitening, veneers, bonding, and contouring. Tailored treatments to enhance your smile with natural-looking results.",
    image: cosmeticDentistryImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Anjali M.",
      specialization: "Cosmetic Dentistry",
      experience: "8+ years",
      qualifications: "BDS, MDS in Cosmetic Dentistry",
      
    },
    feedback: [
      "Transformed my smile beautifully!",
      "Whitening results were amazing!",
      "Confident with my new look.",
      "My veneers look natural and flawless.",
    ],
    rating: 4.8,
  },
  {
    id: "root-canal",
    icon: "🦷💉",
    title: "Root Canal Treatment",
    detail: "Pain-free root canal treatments using advanced tech to save infected teeth. Quick healing and minimal discomfort guaranteed.",
    image: rootCanalImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Karthik V.",
      specialization: "Endodontics",
      experience: "12+ years",
      qualifications: "BDS, MDS in Endodontics",
      
    },
    feedback: [
      "Didn’t feel a thing during the procedure.",
      "Very skilled and patient doctor.",
      "Tooth saved and pain gone!",
      "The procedure was smooth and much less stressful than expected.",
    ],
    rating: 4.6,
  },
  {
    id: "braces",
    icon: "🦷🔧",
    title: "Braces & Aligners",
    detail: "We offer metal braces, ceramic options, and invisible aligners like Invisalign. Personalized plans to give you a perfect smile.",
    image: bracesImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Ramesh S.",
      specialization: "Orthodontics",
      experience: "15+ years",
      qualifications: "BDS, MDS in Orthodontics",
      
    },
    feedback: [
      "Love my invisible aligners!",
      "Friendly and professional staff.",
      "Seeing results quickly!",
      "The braces treatment has been life-changing for my smile.",
    ],
    rating: 4.9,
  },
  {
    id: "extraction",
    icon: "🦷🧩",
    title: "Tooth Extraction",
    detail: "Safe and painless tooth extractions with sedation options. Ideal for wisdom teeth, damaged, or overcrowded teeth.",
    image: extractionImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Meena R.",
      specialization: "Oral Surgery",
      experience: "9+ years",
      qualifications: "BDS, MDS in Oral Surgery",
      
    },
    feedback: [
      "Quick and painless extraction.",
      "Doctor explained everything clearly.",
      "Healing was super smooth.",
      "The procedure was smooth and much less painful than expected.",
    ],
    rating: 4.5,
  },
  {
    id: "implants",
    icon: "🦷🛠",
    title: "Dental Implants",
    detail: "Permanent tooth replacement using high-quality titanium implants. Natural feel, strong bite, and lifelong durability.",
    image: implantImg,
    imageClass: "service-image",
    doctor: {
      name: "Dr. Arun M.",
      specialization: "Implantology",
      experience: "11+ years",
      qualifications: "BDS, MDS in Implantology",
     
    },
    feedback: [
      "Feels like a real tooth!",
      "Excellent aftercare and support.",
      "Best decision I made for my smile.",
      "The implants feel very natural, I’m so happy with them.",
    ],
    rating: 4.9,
  },
 
];

export default services;
