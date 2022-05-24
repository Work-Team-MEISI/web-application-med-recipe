export class UserEntity {
    private readonly _userId: string;
    private readonly _username: string;
    private readonly _firstName: string;
    private readonly _lastName: string;
    private readonly _email: string;
    private readonly _password: string;
    private readonly _updatedAt: Date;
    private readonly _createdAt: Date;

    public constructor(
        userId: string,
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        updatedAt: Date,
        createdAt: Date
    ) {
        this._userId = userId;
        this._username = username;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._password = password;
        this._updatedAt = updatedAt;
        this._createdAt = createdAt;
    }

    public get userId(): string {
        return this._userId;
    }

    public get username(): string {
        return this._username;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get email(): string {
        return this._email;
    }

    public get password(): string {
        return this._password;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }
}