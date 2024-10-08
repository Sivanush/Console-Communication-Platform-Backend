export class User {
    constructor(

        public username: string | undefined,
        public email?: string,
        public password?: string,
        public isVerified?: boolean,
        public isBlocked?: boolean,
        public image?: string | undefined,
        public _id?: string,
        public photoURL?: string,
        public displayName?: string, 
        public uid?: string |Buffer,
        public resetToken?:string|undefined,
        public resetTokenExpire?:number|undefined,
        public isGoogle?:boolean,
        public bio?:string,
        public status?:string,
        public banner?:string


    ) { }
}

export interface DecodedData {
    email: string;
    otp: string
}

export interface SearchUser {
    _id: string;
    username: string;
    image: string;
    friendshipStatus?: string;
  }
  