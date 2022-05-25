export class PatientEntity {
    private readonly _patientId: string;
    private readonly _socialSecurityId: number;
    private readonly _nationalHealthSecurityId: number;
    private readonly _fullName: string
    private readonly _dateOfBirth: Date;

    public constructor(
        patientId: string,
        socialSecurityId: number,
        nationalHealthSecurityId: number,
        fullName: string,
        dateOfBirth: Date,
    ) {
        this._patientId = patientId;
        this._socialSecurityId = socialSecurityId;
        this._nationalHealthSecurityId = nationalHealthSecurityId;
        this._fullName = fullName;
        this._dateOfBirth = dateOfBirth;
    }

    public get patientId(): string {
        return this._patientId;
    }

    public get socialSecurityId(): number {
        return this._socialSecurityId;
    }

    public get nationalHealthSecurityId(): number {
        return this._nationalHealthSecurityId;
    }

    public get fullName(): string {
        return this._fullName;
    }

    public get dateOfBirth(): Date {
        return this._dateOfBirth;
    }
}