import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: string): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: userId });

  if (!findUser) {
    throw new AppError("User doest not exist", 404);
  }

  if (findUser.isActive == false) {
    throw new AppError("User is already inative", 400);
  }

  findUser.isActive = false;
  await userRepository.save(findUser);
  return {};
};

export default deleteUserService;
