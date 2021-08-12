import { Admin } from "./admin";

export class Retailer {
    retailerId !: number;
    retailerName!: string;
    retailerPassword!: string;
    retailerEmail!: string;
    retailerPhone!: string;
    userType!: string;
    verificationStatus ! : boolean;
    adminId ! :number;
    admin!:Admin;

}
