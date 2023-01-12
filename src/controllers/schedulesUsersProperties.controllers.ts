import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createScheduleService from "../services/schedules/createSchedule.service";
import listCheduleByPropertyService from "../services/schedules/listCheduleByProperty.service";

const createScheduleController = async (req: Request, res: Response) => {
  const userId = req.userDecodedData.id;
  const scheduleData: IScheduleRequest = req.body;
  const newSchedule = await createScheduleService(scheduleData, userId);
  return res.status(201).json(newSchedule);
};

const listCheduleByPropertiesController = async (
  req: Request,
  res: Response
) => {
  const propertyId: string = req.params.id;
  const listChedule = await listCheduleByPropertyService(propertyId);
  return res.json(listChedule);
};

export { createScheduleController, listCheduleByPropertiesController };
