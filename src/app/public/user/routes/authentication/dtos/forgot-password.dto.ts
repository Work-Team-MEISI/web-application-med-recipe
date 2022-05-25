export class ForgotPasswordDTO {
    public readonly email: string;

    public constructor(email: string) {
        this.email = email;
    }
}