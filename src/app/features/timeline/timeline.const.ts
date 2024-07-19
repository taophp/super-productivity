export enum TimelineViewEntryType {
  Task = 'Task',
  TaskPlannedForDay = 'TaskPlannedForDay',
  ScheduledTask = 'ScheduledTask',
  ScheduledRepeatTaskProjection = 'ScheduledRepeatTaskProjection',
  SplitTask = 'SplitTask',
  SplitTaskContinued = 'SplitTaskContinued',
  SplitTaskContinuedLast = 'SplitTaskContinuedLast',
  CustomEvent = 'CustomEvent',
  CalendarEvent = 'CalendarEvent',
  WorkdayStart = 'WorkdayStart',
  WorkdayEnd = 'WorkdayEnd',
  DayCrossing = 'DayCrossing',
  LunchBreak = 'LunchBreak',
}

export const TIMELINE_VIEW_TYPE_ORDER: {
  [key: string]: number;
} = {
  [TimelineViewEntryType.WorkdayStart]: 1,
  [TimelineViewEntryType.WorkdayEnd]: 2,
  [TimelineViewEntryType.ScheduledTask]: 3,
  [TimelineViewEntryType.ScheduledRepeatTaskProjection]: 3,
  [TimelineViewEntryType.CustomEvent]: 3,
  [TimelineViewEntryType.CalendarEvent]: 3,
  [TimelineViewEntryType.Task]: 4,
  [TimelineViewEntryType.TaskPlannedForDay]: 5,
  [TimelineViewEntryType.SplitTask]: 6,
  [TimelineViewEntryType.SplitTaskContinued]: 7,
  [TimelineViewEntryType.SplitTaskContinuedLast]: 8,
  [TimelineViewEntryType.LunchBreak]: 9,
};

export const TIMELINE_MOVEABLE_TYPES: TimelineViewEntryType[] = [
  TimelineViewEntryType.Task,
  TimelineViewEntryType.SplitTask,
  TimelineViewEntryType.SplitTaskContinued,
  TimelineViewEntryType.SplitTaskContinuedLast,
  // TODO check if this is correct
  TimelineViewEntryType.TaskPlannedForDay,
];
