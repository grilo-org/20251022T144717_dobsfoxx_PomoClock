import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycleType: number): TaskModel["type"]{
    if(currentCycleType % 8 === 0 ) return 'longBreakTime';
    if(currentCycleType % 2 === 0 ) return 'shortBreakTime';
    return 'workTime';
}