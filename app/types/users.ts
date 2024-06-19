interface IUsers {
    _id: string
    username: string
    email: string
    img?: string
    createdAt?: string
    isAdmin: boolean
    isActive: boolean
    address: string
    phone: string
    password : string
}


export interface IUserPromise {
    count: number,
    users: IUsers[]
}

export interface IUserAction {
    id? : string
    username : FormDataEntryValue | null
    email : FormDataEntryValue | null
    password : FormDataEntryValue | null
    phone : FormDataEntryValue | null
    isAdmin : boolean
    isActive : boolean
    address? : FormDataEntryValue | null
}