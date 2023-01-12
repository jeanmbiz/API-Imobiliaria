import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const listPropertiesByCategoryService = async (
  categoryId
): Promise<Categories> => {
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const propertiesById = await categoriesRepository.findOne({
    where: { id: categoryId },
    relations: { properties: true },
  });

  if (!propertiesById) {
    throw new AppError("Category not found", 404);
  }

  return propertiesById;
};

export default listPropertiesByCategoryService;
