import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignupDto {
  @IsString({ message: "Username should be of type string!" })
  @IsNotEmpty({ message: "username is required!" })
  username!: string;

  @IsString({ message: "Email should be of type string!" })
  @IsNotEmpty({ message: "Email is required!" })
  @IsEmail()
  email!: string;

  @IsString({ message: "Password should be of type string!" })
  @IsNotEmpty({ message: "Password is required!" })
  password!: string;
}
