import AppDataSource from "../../data-source";
import Properties from "../../entities/properties.entity";
import { SchedulesUsersProperties } from "../../entities/schdulesUsersProperties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (
  scheduleData: IScheduleRequest,
  userId: string
): Promise<Object> => {
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const propertyRepository = AppDataSource.getRepository(Properties);
  const userRepository = AppDataSource.getRepository(User);

  const { date, hour, propertyId } = scheduleData;

  const checkScheduleDay = new Date(date).getDay();

  if (checkScheduleDay === 0 || checkScheduleDay === 6) {
    throw new AppError("Invalid Date", 400);
  }

  const checkScheduleHour = parseInt(hour.slice(0, 2));

  if (checkScheduleHour < 8 || checkScheduleHour >= 18) {
    throw new AppError("Invalid Hour", 400);
  }

  const property = await propertyRepository.findOneBy({ id: propertyId });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const dateIsAlreadyAgended = await propertyRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "propertySchedules")
    .where("properties.id = :id", { id: propertyId })
    .andWhere("propertySchedules.date = :visitDate", { visitDate: date })
    .getOne();

  if (dateIsAlreadyAgended) {
    throw new AppError("Invalid Date", 409);
  }

  const hourIsAlreadyAgended = await propertyRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "propertySchedules")
    .where("properties.id = :id", { id: propertyId })
    .andWhere("propertySchedules.hour = :visitDate", { visitDate: hour })
    .getOne();

  if (hourIsAlreadyAgended) {
    throw new AppError("Invalid Date", 409);
  }

  const newSchedule = schedulesRepository.create({
    ...scheduleData,
    property,
    user,
  });

  await schedulesRepository.save(newSchedule);

  return { message: "Schedule created" };
};

export default createScheduleService;
