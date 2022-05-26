export class UpdateCitizenDTO {
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly dateOfBirth: string;

    public constructor(
        firstName: string,
        lastName: string,
        dateOfBirth: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
}