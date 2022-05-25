export class SignUpDTO {
    public readonly username!: string;
    public readonly email!: string;
    public readonly firstName!: string;
    public readonly lastName!: string;
    public readonly password!: string;

    public constructor(
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        password: string,
    ) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }
}