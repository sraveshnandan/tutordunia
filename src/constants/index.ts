import { CreditCardIcon, Tv, User, Video } from "lucide-react";

const NavMenu: { name: string, url: string }[] = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "/about"
    },
    {
        name: "Contact",
        url: "/contact"
    },
    {
        name: "Services",
        url: "/services"
    }
];


const Stats = [
    {
        name: "Verified Tutors",
        number: 75
    },
    {
        name: "Students",
        number: 200
    },
    {
        name: "Reviews",
        number: 150
    }
]

const DummyTutors = [
    {
        name: "Pravin Panday",
        exp: 10,
        is_verified: true,
        hourly_rate: 250,
        phone_number: 9126126126,
        image: "",
        bio: "some random summy bio for the tutor.",
        ratings: 4
    },
    {
        name: "Sravesh Nandan",
        exp: 12,
        is_verified: true,
        hourly_rate: 450,
        phone_number: 9126126126,
        image: "",
        bio: "some random summy bio for the tutor.",
        ratings: 4
    },
    {
        name: "Ramesh Kumar",
        exp: 20,
        is_verified: false,
        hourly_rate: 250,
        phone_number: 9126126126,
        image: "",
        bio: "some random summy bio for the tutor.",
        ratings: 4
    },
    {
        name: "Ramesh Kumar",
        exp: 20,
        is_verified: false,
        hourly_rate: 250,
        phone_number: 9126126126,
        image: "",
        bio: "some random summy bio for the tutor.",
        ratings: 4
    }
]


const HowTOData = [
    {
        title: "Create Your Account",
        desc: "Create your account to continue.",
        Icon: User
    },
    {
        title: "Join a LIVE Demo Class",
        desc: "Enroll in a live class.",
        Icon: Video
    },
    {
        title: "Pay and Start",
        desc: "Pay the class fee and Start.",
        Icon: CreditCardIcon
    }
]

const Reviews = [
    {
        name: "Sagar Jain",
        image: "https://p.urbanpro.com/tv-prod/member/photo/12303442-thumbnail50.jpg",
        message: "His teaching style is excellent, he is like my elder brother. His guidence helped me a lot. "
    },
    {
        name: "Rohit Kumar",
        image: "https://p.urbanpro.com/tv-prod/member/photo/12303442-thumbnail50.jpg",
        message: "Amazing teacher! Had a lot of fun with them. Explain concepts very well. "
    },
    {
        name: "Ayush Kumar",
        image: "https://p.urbanpro.com/tv-prod/member/photo/12303442-thumbnail50.jpg",
        message: "Wonderful teacher fantabulous classes and super interactive sessions doubt solving the handwritten notes were not at all disappointing definitely book a session with sir you'll love it without a doubt."
    }

]


const Images = {
    teacher: "https://res.cloudinary.com/dsyah5ezt/image/upload/v1729840997/woman-teaching-classroom_23-2151696435_n9glrg.jpg",
    student: "https://res.cloudinary.com/dsyah5ezt/image/upload/v1729842874/hjoszrofczrtm68fx2pt.jpg"
}





export { NavMenu, Stats, DummyTutors, HowTOData, Reviews, Images }