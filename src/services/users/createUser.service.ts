import AppDataSource from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/createUser.schema";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const userAreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (userAreadyExists) {
    throw new AppError("This email address is already being used", 409);
  }

  const createdUser = userRepository.create(userData);

  await userRepository.save(createdUser);

  const userWithoutPassword = await userResponseSchema.validate(createdUser, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};

export default createUserService;
