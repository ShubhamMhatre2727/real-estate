export type Estate_Type = {
    url: String,
    icon: String | null,
    price: Number,
    title: String,
    address: String,
    beds: Number,
    baths: Number,
}

export type Service_Type = {
    url:String,
    text: String,
    description: String
}

export type Propert_Type = {
    url: string,
    count: number,
    place: String
}

export type Team_type = {
    url: string,
    name: string,
    designation: string
}

export type Blog_Type={
    url:string,
    date:string,
    day: string,
    title: string, 
    description: string,
}