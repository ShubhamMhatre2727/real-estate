export type Estate_Type = {
    url: string,
    icon: string | null,
    price: number,
    title: string,
    address: string,
    beds: number,
    baths: number,
}

export type Service_Type = {
    url:string,
    text: string,
    description: string
}

export type Propert_Type = {
    id: number,
    url: string,
    count: number,
    place: string
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