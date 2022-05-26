export class CitizenEntity {
    private readonly _citizenId: string;
    private readonly _socialSecurityId: string;
    private readonly _healthSecurityId: string;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _dateOfBirth: string;

    public constructor(
        citizenId: string,
        socialSecurityId: string,
        healthSecurityId: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
    ) {
        this._citizenId = citizenId;
        this._socialSecurityId = socialSecurityId;
        this._healthSecurityId = healthSecurityId;
        this._firstName = firstName;
        this._lastName = lastName;
        this._dateOfBirth = dateOfBirth;
    }

    public get citizenId(): string {
        return this._citizenId;
    }

    public get socialSecurityId(): string {
        return this._socialSecurityId;
    }

    public get healthSecurityId(): string {
        return this._healthSecurityId;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get dateOfBirth(): string {
        return this._dateOfBirth;
    }
}