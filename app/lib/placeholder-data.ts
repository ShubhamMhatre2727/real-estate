import { url } from "inspector"
import { title } from "process"
import { text } from "stream/consumers"

export const estates=[
    {
        url:"/listings/estate1.jpg",
        icon: "/listings/icons/popular.svg",
        price: 5970,
        title: "Tranquil Haven in the Woods",
        address: "103 Wright CourtBurien, WA 98168",
        beds: 4,
        baths:3
    },
    {
        url:"/listings/estate2.jpg",
        icon: "/listings/icons/new-listing.svg",
        price: 1970,
        title: "Serene Retreat by the Lake",
        address: "1964 Jehovah Drive, VA 22408",
        beds: 3,
        baths:2
    },
    {
        url:"/listings/estate3.jpg",
        icon: "/listings/icons/discounted-price.svg",
        price: 3450,
        title: "Charming Cottage in the Meadow",
        address: "1508 Centennial Farm RoadHarlan, 51537",
        beds: 4,
        baths:4
    },
    {
        url:"/listings/estate4.jpg",
        icon: null,
        price: 2389,
        title: "Grand Estate on the Hilltop",
        address: "103 Wright CourtBurien, WA 98168",
        beds: 4,
        baths:3
    },
]

export const services = [
    {
        url:"/services/search.svg",
        text:"Buy a New Home",
        description:"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ",
    },
    {
        url:"/services/home.svg",
        text:"Sell a House",
        description:"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ",
    },
    {
        url:"/services/bed.svg",
        text:"Rent a House",
        description:"Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. ",
    },
]

export const properties = [
    {
        url:"/services/properties/property1.jpg",
        count: 216,
        place: "New York City, NY"
    },
    {
        url:"/services/properties/property2.jpg",
        count: 141,
        place: "Houston, TX"
    },
    {
        url:"/services/properties/property3.jpg",
        count: 212,
        place: "San Diego, CA"
    },
    {
        url:"/services/properties/property4.jpg",
        count: 183,
        place: "Philadelphie, PA"
    },
    {
        url:"/services/properties/property5.jpg",
        count: 112,
        place: "San Fransisco, CA"
    },
]

export const team = [
    {
        url:"/services/team/person1.jpg",
        name:"Brendon M",
        designation: "CEO & Founder"
    },
    {
        url:"/services/team/person2.jpg",
        name:"Jodi J. Appleby",
        designation: "Real Estate Developer"
    },
    {
        url:"/services/team/person3.jpg",
        name:"Justin S. Meza",
        designation: "Listing Agent"
    },
    {
        url:"/services/team/person4.jpg",
        name:"Susan T. Smith",
        designation: "Buyer's Agent"
    },
]

export const blogs = [
    {
        url:"/trending/trend1.jpg",
        date: "28",
        day: "Tue",
        title: "Top 10 Home Buying Mistakes to Avoid",
        description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
    },
    {
        url:"/trending/trend2.jpg",
        date: "08",
        day: "Mon",
        title: "How to Stage Your Home for a Quick Sale",
        description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
    },
    {
        url:"/trending/trend3.jpg",
        date: "26",
        day: "Wed",
        title: "5 Tips for First-Time Home Sellers",
        description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
    },
]