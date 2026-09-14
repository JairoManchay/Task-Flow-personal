import type { ActivityProgress, Subtask } from '../types/taskflow';

export function calculateProgress(subtasks: Subtask[]): ActivityProgress {
  const totalSubtasks = subtasks.length;
  const completedSubtasks = subtasks.filter((subtask) => subtask.isCompleted).length;
  const percentage = totalSubtasks === 0 ? 0 : Math.round((completedSubtasks / totalSubtasks) * 100);

  return { totalSubtasks, completedSubtasks, percentage, label: `${completedSubtasks}/${totalSubtasks}` };
}
