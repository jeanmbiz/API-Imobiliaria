import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listPropertiesByCategoryService from "../services/categories/listPropertiesByCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const categoryData: ICategoryRequest = req.body;
  const newCategory = await createCategoryService(categoryData);
  return res.status(201).json(newCategory);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesService();
  return res.json(categories);
};

const listPropertiesByCategoryController = async (
  req: Request,
  res: Response
) => {
  const categoryId: string = req.params.id;
  const propertiesByCategory = await listPropertiesByCategoryService(
    categoryId
  );
  return res.json(propertiesByCategory);
};

export {
  createCategoryController,
  listCategoriesController,
  listPropertiesByCategoryController,
};
