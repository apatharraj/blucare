export class doctor {
    public imagePath: string;
    public doctorname: string;
    public hospitalname: string;
    public hospitaladdress: string;
    public hospitaldistance: string;
    public cost: any;

    constructor(imagePath: string, doctorname: string, hospitalname: string, hospitaladdress: string, hospitaldistance: string, cost: any) {
        this.imagePath = imagePath;
        this.doctorname = doctorname;
        this.hospitalname = hospitalname;
        this.hospitaladdress = hospitaladdress;
        this.hospitaldistance = hospitaldistance;
        this.cost = cost;
    }
}