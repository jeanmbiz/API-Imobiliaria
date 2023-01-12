import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const listUserService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    select: [
      "id",
      "name",
      "createdAt",
      "email",
      "isActive",
      "isAdm",
      "updatedAt",
    ],
  });

  return users;
};

export default listUserService;
