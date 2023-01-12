import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";

const listCheduleByPropertyService = async (propertyId) => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const findProperty = await propertyRepository.findOneBy({ id: propertyId });

  if (!findProperty) {
    throw new AppError("Property not found", 404);
  }

  const schedulesById = await propertyRepository.findOne({
    where: { id: findProperty.id },
    relations: { schedules: true, address: true, category: true },
  });

  if (!schedulesById) {
    throw new AppError("Category not found", 404);
  }

  return schedulesById;
};

export default listCheduleByPropertyService;
