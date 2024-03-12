import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString({ message: "Username should be of type string!" })
  @IsNotEmpty({ message: "username is required!" })
  username!: string;

  @IsString({ message: "Password should be of type string!" })
  @IsNotEmpty({ message: "Password is required!" })
  password!: string;
}
