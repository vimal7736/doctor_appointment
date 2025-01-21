import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'
import lady_doc from './lady_doc.png'
import appoin from "./appoin.jpg"
import menu from "./menu.png"


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    lady_doc,
    appoin,
    menu
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician,
        description: 'General physicians are your primary care doctors who provide comprehensive medical care, diagnosing and treating common illnesses and providing preventive care.'
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist,
        description: 'Gynecologists specialize in women’s health, particularly in matters related to the female reproductive system, including pregnancy, childbirth, and disorders.'
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist,
        description: 'Dermatologists are experts in diagnosing and treating skin conditions, from acne to skin cancer, as well as performing cosmetic procedures like Botox and laser treatments.'
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians,
        description: 'Pediatricians provide medical care for infants, children, and adolescents, monitoring their growth, development, and offering immunizations and treatment for illnesses.'
    },
    {
        speciality: 'Neurologist',
        image: Neurologist,
        description: 'Neurologists specialize in disorders of the brain, spine, and nervous system, diagnosing conditions such as epilepsy, Parkinson’s disease, and multiple sclerosis.'
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist,
        description: 'Gastroenterologists treat conditions affecting the digestive system, including issues with the stomach, liver, intestines, and rectum, such as IBS, acid reflux, and liver disease.'
    },
];


export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Nathan Scott',
        image: doc1,
        speciality: 'Cardiologist',
        degree: 'MD',
        experience: '7 Years',
        about: 'Dr. Scott specializes in diagnosing and treating cardiovascular diseases, ensuring patients maintain a healthy heart.',
        fees: 70,
        address: {
            line1: '45th Avenue, Green Street',
            line2: 'City Centre, London'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Sophia Bennett',
        image: doc2,
        speciality: 'Orthopedic Surgeon',
        degree: 'MS Orthopedics',
        experience: '10 Years',
        about: 'Dr. Bennett focuses on musculoskeletal disorders, helping patients regain mobility and strength.',
        fees: 80,
        address: {
            line1: '31st Main Road, Richmond',
            line2: 'Circle, East Wing, London'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Liam Watson',
        image: doc3,
        speciality: 'Oncologist',
        degree: 'DM Oncology',
        experience: '8 Years',
        about: 'Dr. Watson provides expert cancer treatment with a focus on personalized care for every patient.',
        fees: 90,
        address: {
            line1: '28th Cross, Central Road',
            line2: 'Hospital Street, London'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Olivia Adams',
        image: doc4,
        speciality: 'Psychiatrist',
        degree: 'MD Psychiatry',
        experience: '5 Years',
        about: 'Dr. Adams focuses on mental health care, providing therapy and medication management for various disorders.',
        fees: 75,
        address: {
            line1: 'Greenfield Boulevard, Richmond',
            line2: 'City Heights, London'
        }
    },
   
    {
        _id: 'doc21',
        name: 'Dr. Mia Green',
        image: doc6,
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS ENT',
        experience: '6 Years',
        about: 'Dr. Green is skilled in treating ear, nose, and throat conditions, ensuring optimal sensory health.',
        fees: 65,
        address: {
            line1: '16th Cross, Westwood Street',
            line2: 'Richmond, London'
        }
    },
    {
        _id: 'doc22',
        name: 'Dr. Lucas Carter',
        image: doc7,
        speciality: 'Pulmonologist',
        degree: 'MD Pulmonology',
        experience: '12 Years',
        about: 'Dr. Carter has extensive experience in treating respiratory disorders, including asthma and chronic bronchitis.',
        fees: 95,
        address: {
            line1: 'Broadway Street, Downtown',
            line2: 'Circle Avenue, London'
        }
    },
    {
        _id: 'doc23',
        name: 'Dr. Ava Martinez',
        image: doc8,
        speciality: 'Nephrologist',
        degree: 'MD Nephrology',
        experience: '7 Years',
        about: 'Dr. Martinez specializes in kidney health, offering treatment for acute and chronic kidney conditions.',
        fees: 70,
        address: {
            line1: '20th Lane, Riverside Street',
            line2: 'Central Square, London'
        }
    },
    {
        _id: 'doc24',
        name: 'Dr. Emma Hill',
        image: doc9,
        speciality: 'Endocrinologist',
        degree: 'DM Endocrinology',
        experience: '6 Years',
        about: 'Dr. Hill helps patients manage hormone-related issues such as diabetes and thyroid disorders.',
        fees: 80,
        address: {
            line1: '5th Avenue, East Side',
            line2: 'Richmond Circle, London'
        }
    },
    {
        _id: 'doc25',
        name: 'Dr. Robert Harris',
        image: doc1,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS',
        experience: '8 Years',
        about: 'Dr. Harris specializes in treating musculoskeletal conditions with a focus on patient recovery and mobility improvement.',
        fees: 100,
        address: {
            line1: '75th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc26',
        name: 'Dr. Sophie Wilson',
        image: doc2,
        speciality: 'Cardiologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Wilson is dedicated to diagnosing and managing heart-related conditions with a patient-first approach.',
        fees: 120,
        address: {
            line1: '85th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc27',
        name: 'Dr. Benjamin Green',
        image: doc3,
        speciality: 'Pulmonologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Green provides care for respiratory diseases with expertise in managing asthma and chronic lung disorders.',
        fees: 90,
        address: {
            line1: '95th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc28',
        name: 'Dr. Hannah Scott',
        image: doc4,
        speciality: 'Endocrinologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Scott specializes in treating hormonal imbalances, diabetes, and thyroid disorders.',
        fees: 110,
        address: {
            line1: '105th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc29',
        name: 'Dr. Liam Morgan',
        image: doc5,
        speciality: 'Oncologist',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. Morgan is passionate about providing compassionate cancer care and advanced treatment options.',
        fees: 150,
        address: {
            line1: '115th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc30',
        name: 'Dr. Isabella Clark',
        image: doc6,
        speciality: 'Ophthalmologist',
        degree: 'MBBS, MS',
        experience: '5 Years',
        about: 'Dr. Clark provides expert care for vision disorders, including cataracts and refractive errors.',
        fees: 80,
        address: {
            line1: '125th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc31',
        name: 'Dr. Ethan Turner',
        image: doc7,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD',
        experience: '9 Years',
        about: 'Dr. Turner helps individuals achieve mental wellness through therapy and evidence-based treatments.',
        fees: 130,
        address: {
            line1: '135th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc32',
        name: 'Dr. Grace Walker',
        image: doc8,
        speciality: 'Rheumatologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Walker provides care for autoimmune and joint-related conditions, improving patients’ quality of life.',
        fees: 110,
        address: {
            line1: '145th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc33',
        name: 'Dr. Alexander Young',
        image: doc9,
        speciality: 'Radiologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Young is skilled in imaging techniques for accurate diagnosis and treatment planning.',
        fees: 95,
        address: {
            line1: '155th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc34',
        name: 'Dr. Lily Perez',
        image: doc2,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Perez specializes in digestive system disorders, providing tailored care for her patients.',
        fees: 125,
        address: {
            line1: '165th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
   
    {
        _id: 'doc36',
        name: 'Dr. Olivia Evans',
        image: doc2,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Evans specializes in skin, hair, and nail disorders, focusing on improving skin health.',
        fees: 100,
        address: {
            line1: '185th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc37',
        name: 'Dr. James White',
        image: doc3,
        speciality: 'Neurologist',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. White provides care for neurological conditions, focusing on accurate diagnosis and treatment.',
        fees: 140,
        address: {
            line1: '195th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc38',
        name: 'Dr. Emily Carter',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Carter is dedicated to providing expert care to children, ensuring their healthy development.',
        fees: 110,
        address: {
            line1: '205th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc39',
        name: 'Dr. William Scott',
        image: doc5,
        speciality: 'Hematologist',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Scott is experienced in treating blood-related disorders with compassionate care.',
        fees: 135,
        address: {
            line1: '215th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc40',
        name: 'Dr. Charlotte Bennett',
        image: doc6,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '5 Years',
        about: 'Dr. Bennett provides comprehensive general medical care for patients of all ages.',
        fees: 80,
        address: {
            line1: '225th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc41',
        name: 'Dr. Henry Foster',
        image: doc7,
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS',
        experience: '9 Years',
        about: 'Dr. Foster specializes in treating conditions related to the ear, nose, and throat.',
        fees: 90,
        address: {
            line1: '235th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc42',
        name: 'Dr. Amelia Morris',
        image: doc8,
        speciality: 'Nephrologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Morris provides care for kidney disorders and offers advanced treatment options.',
        fees: 125,
        address: {
            line1: '245th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc43',
        name: 'Dr. Daniel Walker',
        image: doc9,
        speciality: 'Psychologist',
        degree: 'Ph.D. Psychology',
        experience: '6 Years',
        about: 'Dr. Walker helps patients address mental health challenges through therapy and counseling.',
        fees: 100,
        address: {
            line1: '255th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc44',
        name: 'Dr. Mia Robinson',
        image: doc1,
        speciality: 'Gynecologist',
        degree: 'MBBS, MS',
        experience: '10 Years',
        about: 'Dr. Robinson is dedicated to women’s health and provides expert gynecological care.',
        fees: 120,
        address: {
            line1: '265th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc45',
        name: 'Dr. Logan Brooks',
        image: doc2,
        speciality: 'Immunologist',
        degree: 'MBBS, MD',
        experience: '7 Years',
        about: 'Dr. Brooks focuses on diagnosing and treating immune system disorders.',
        fees: 115,
        address: {
            line1: '275th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc46',
        name: 'Dr. Sophia Lewis',
        image: doc3,
        speciality: 'Pathologist',
        degree: 'MBBS, MD',
        experience: '6 Years',
        about: 'Dr. Lewis specializes in studying disease through laboratory tests and pathology reports.',
        fees: 95,
        address: {
            line1: '285th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc47',
        name: 'Dr. Elijah Cooper',
        image: doc4,
        speciality: 'Orthodontist',
        degree: 'BDS, MDS',
        experience: '5 Years',
        about: 'Dr. Cooper provides expert care in aligning teeth and improving oral aesthetics.',
        fees: 90,
        address: {
            line1: '295th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc48',
        name: 'Dr. Harper Rivera',
        image: doc5,
        speciality: 'Surgeon',
        degree: 'MBBS, MS',
        experience: '11 Years',
        about: 'Dr. Rivera specializes in general and advanced surgical procedures.',
        fees: 150,
        address: {
            line1: '305th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc49',
        name: 'Dr. Owen Mitchell',
        image: doc6,
        speciality: 'Anesthesiologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Mitchell provides expert care in managing anesthesia for surgeries and procedures.',
        fees: 110,
        address: {
            line1: '315th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc50',
        name: 'Dr. Ella Hughes',
        image: doc7,
        speciality: 'Nutritionist',
        degree: 'M.Sc. Nutrition',
        experience: '6 Years',
        about: 'Dr. Hughes helps patients achieve better health through personalized nutrition plans.',
        fees: 85,
        address: {
            line1: '325th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
    
    
]