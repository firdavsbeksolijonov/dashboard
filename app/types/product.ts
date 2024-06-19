interface IPRoducts {
    _id: string
    username: string
    title: string
    img?: string
    createdAt?: string
    desc: boolean
    price: number
    size: string
    stock: string
    password : string
}


export interface IPRoductPromise {
    count: number,
    products: IPRoducts[]
}

export interface IPRoductAction {
    id? : string
    title : FormDataEntryValue | null
    desc : FormDataEntryValue | null
    price : FormDataEntryValue | null
    color : FormDataEntryValue | null
    size : FormDataEntryValue | null
    cat: FormDataEntryValue | null
    stock : FormDataEntryValue | null
}