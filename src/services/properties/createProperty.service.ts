import AppDataSource from "../../data-source";
import { IPropertyRequest } from "../../interfaces/properties";
import Properties from "../../entities/properties.entity";
import Addresses from "../../entities/addresses.entity";
import Categories from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";

const createPropertyService = async (
  propertyData: IPropertyRequest
): Promise<Properties> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const addressesRepository = AppDataSource.getRepository(Addresses);
  const propertyRepository = AppDataSource.getRepository(Properties);

  const { value, size, categoryId, address } = propertyData;
  const { zipCode, state } = address;

  if (zipCode.length > 8) {
    throw new AppError("Invalid zip code", 400);
  }

  if (state.length > 2) {
    throw new AppError("Invalid state", 400);
  }

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const addressAlreadyExists = await propertyRepository.findOneBy({
    address: address,
  });

  if (addressAlreadyExists) {
    throw new AppError("Address already exists", 409);
  }

  const newAddress = addressesRepository.create(address);
  await addressesRepository.save(newAddress);

  const newProperty = propertyRepository.create({
    value,
    size,
    category,
    address: newAddress,
  });
  await propertyRepository.save(newProperty);

  return newProperty;
};

export default createPropertyService;
