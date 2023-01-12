import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICategoryRequest } from "../interfaces/categories";

const createCategorySchema: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required(),
});

export { createCategorySchema };
