import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties";

const createAddressesSchema: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().required(),
  number: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().notRequired(),
});

export { createAddressesSchema };
