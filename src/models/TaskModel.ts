export type TaskModel = {
    id: string;
    name: string;
    duration: number;
    startDate: number; 
    completedDate: number | null;
    interruptedDate: number | null;
    task: string;
    type: 'workTime'| 'shortBreakTime' | 'longBreakTime';
}