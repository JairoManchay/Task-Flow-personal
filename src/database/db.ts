import Dexie, { type Table } from 'dexie';
import type { Activity, ActivityHistory, Course, Note, Project, ResourceLink, Settings, Subtask, TaskStage } from '../types/taskflow';

export class TaskFlowDatabase extends Dexie {
  courses!: Table<Course, string>;
  projects!: Table<Project, string>;
  activities!: Table<Activity, string>;
  taskStages!: Table<TaskStage, string>;
  subtasks!: Table<Subtask, string>;
  notes!: Table<Note, string>;
  activityHistory!: Table<ActivityHistory, string>;
  resourceLinks!: Table<ResourceLink, string>;
  settings!: Table<Settings, string>;

  constructor() {
    super('taskflow-db');
    this.version(1).stores({
      courses: 'id, name, isArchived, createdAt, updatedAt',
      projects: 'id, name, isArchived, createdAt, updatedAt',
      activities: 'id, area, type, status, priority, dueDate, courseId, projectId, createdAt, updatedAt, completedAt, archivedAt',
      taskStages: 'id, activityId, order, createdAt, updatedAt',
      subtasks: 'id, activityId, stageId, isCompleted, order, createdAt, updatedAt, completedAt',
      notes: 'id, activityId, createdAt, updatedAt',
      activityHistory: 'id, activityId, type, createdAt',
      resourceLinks: 'id, activityId, createdAt, updatedAt',
      settings: 'id'
    });
  }
}

export const db = new TaskFlowDatabase();
