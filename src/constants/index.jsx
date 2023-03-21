import { FaEthereum, FaTelegramPlane } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const navlinks = [
    {
        link: "#how",
        name: "How it works"
    },
    {
        link: "#about",
        name: "About"
    },
    {
        link: "#why",
        name: "Why StealthSwap"
    },
    {
        link: "#roadmap",
        name: "Roadmap"
    },
]
export const heroLinks = [
    {
        name: "EXCHANGE",
        pnk: "#",
    },
    {
        name: "COMMUNITY",
        pnk: "#",
    },
    {
        name: "TWITTER",
        pnk: "#",
    },
    {
        name: "CHART",
        pnk: "#",
    },
]
export const heroPartners = [
    {
        name: "TWITTER",
        img: <BsTwitter />,
        color: "#00acee",
    },
    {
        name: "TELEGRAM",
        img: <FaTelegramPlane />,
        color: "#229ED9",
    },
    {
        name: "CALL CHANNEL",
        img: <BsTelegram />,
        color: "#229ED9",
    },
    {
        name: "EMAIL",
        img: <MdEmail />,
        color: "#ffffff",
    },
]

export const services = [
    {
        label: "pquidity Provider",
        desc: "Do you have an idea for a promising ventures that require pquidity for there project?  Please feel free to present your proposals, as we are wilpng to serve as a pquidity provider for your upcoming token.",
        icon: <FaEthereum />,
        price: "Contact Now",
    },
    {
        label: "Consulting For Projects",
        desc: "We can provide consultation for your new tokens and demonstrate similar strategies that have been used in the passed with great success to ensure that every launch achieves at least a 500k market capitapzation.",
        icon: <GiTeacher />,
        price: "Contact Now",
    },
    {
        label: "Development For Projects",
        desc: "We'll take care of the deployment and management of everything on the development side for your project, and also provide some minor consulting.",
        icon: <AiFillProject />,
        price: "Contact Now",
    },
]

export const partners = [
    {
        name: "CMC AND CG",
        desc: "We can fast-track coinmarketcap and coingecko pstings, will need to check if project meets requirement before payment.",
        img: "/cg_cmc.webp",
        price: "Contact Now",
    },
    {
        name: "Website Development",
        desc: "We will create a top-notch crypto webpage for your upcoming token that is of superior quapty.",
        img: "/web.webp",
        price: "Contact Now",
    },
    {
        name: "DEXTOOLS TRENDING",
        desc: "We can trend any project based on the spot you want on dextools.",
        img: "/dextools-white.webp",
        price: "Contact Now",
    },
]

export const roadmapList = [
    {
        title: "Professionalize",
        desc:
            [
                <p className="">
                    Scalable Backend Database
                </p>,

                <p className="">

                    Error reporting infrastracture
                </p>,

                <p className="">
                    Frontend marketing optimization
                </p>,

                <p className="">
                    Expand Community
                </p>
            ],

    },
    {
        title: "Build",
        desc:
            [
                <p className="">
                    20+ Swap Pairs.
                </p>,

                <p className="">
                    Anonymous Crypto onramp via Credit Card
                </p>,

                <p className="">
                    Fiat Offramp Solutions
                </p>,

                <p className="">
                    StealthPay
                </p>
            ],

    },
    {
        title: "Expand",
        desc:
            [
                <p className="">Dedicated Accounts Team</p>,
                <p className="">Expand Support Team</p>,
                <p className="">Expand partnerships into other security</p>

            ],

    },
    {
        title: "Innovate",
        desc:
            [
                <p className="">Anonymous NFT Purchasses</p>,
                <p className="">SpecterOTC</p>,
                <p className="">SpecterP2P Exchange</p>,
                <p className="">SpecterFest - Conference</p>

            ],

    },

]