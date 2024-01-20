import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsFloat(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isFloat',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'number' && !Number.isInteger(value);
        },
      },
    });
  };
}
