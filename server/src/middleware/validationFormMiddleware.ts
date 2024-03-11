import { RequestHandler } from "express";
import { plainToClass } from "class-transformer";
import { ValidationError, validate } from "class-validator";

function validationFDMiddleware<T>(
  type: any,
  skipMissingProperties = false
): RequestHandler {
  return (req, res, next) => {
    const ptc = plainToClass(type, req.body);
    validate(ptc, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          let feilds = null;
          const detailMsg = errors.map((error: ValidationError) => {
            feilds += error.property + ", ";
            const errorMessage = Object.values(error.constraints).join(". ");
            return `${error.property}: ${errorMessage}`;
          });
          let message = `Please fill ${feilds}fields properly:\n${detailMsg.join(
            "\n"
          )}`;
          return res.status(400).json(message);
        } else {
          next();
        }
      }
    );
  };
}

export default validationFDMiddleware;
