import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";
import Categories from "../../entities/categories.entity";

const createCategoryService = async (
  categoryData: ICategoryRequest
): Promise<Categories> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryAreadyExists = await categoryRepository.findOneBy({
    name: categoryData.name,
  });

  if (categoryAreadyExists) {
    throw new AppError("Category already exists", 409);
  }

  const newCategory = categoryRepository.create(categoryData);

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
