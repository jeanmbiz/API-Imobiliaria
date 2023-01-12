import { IUserResponse, IUserUpdate } from "../../interfaces/users";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userResponseSchema } from "../../schemas/createUser.schema";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUserResponse> => {
  if (Object.keys(userData).length === 0) {
    throw new AppError("User doest not exist", 401);
  }

  try {
    const { name, password, email } = userData;

    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ id: userId });

    const updatedUser = userRepository.create({
      ...findUser,
      name: name || findUser.name,
      password: password || findUser.password,
      email: email || findUser.email,
    });

    await userRepository.save(updatedUser);

    const updatedUserWithoutPassowrd = await userResponseSchema.validate(
      updatedUser,
      {
        stripUnknown: true,
      }
    );

    return updatedUserWithoutPassowrd;
  } catch (error) {
    throw new AppError("User doest not exist", 404);
  }
};

export default updateUserService;
