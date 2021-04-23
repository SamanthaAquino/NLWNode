import { Setting } from './../entities/Setting';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Setting)
export class SettingsRepository extends Repository<Setting>{

}