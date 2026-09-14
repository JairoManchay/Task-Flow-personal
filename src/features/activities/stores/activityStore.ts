import { create } from 'zustand';
import { taskFlowRepository, type TaskFlowData } from '../../../repositories/taskFlowRepository';
import { calculateProgress } from '../../../services/progressService';
import type { Activity, ActivityDraft, ActivityProgress, AreaType, Subtask } from '../../../types/taskflow';

interface ActivityFilters { text: string; area: 'all' | AreaType; status: 'all' | Activity['status']; }
interface ActivityStore extends TaskFlowData { filters: ActivityFilters; isLoading: boolean; error?: string; load: () => Promise<void>; createActivity: (draft: ActivityDraft) => Promise<string>; setFilters: (filters: Partial<ActivityFilters>) => void; toggleSubtask: (subtask: Subtask) => Promise<void>; addSubtask: (activityId: string, stageId: string, title: string) => Promise<void>; addNote: (activityId: string, content: string) => Promise<void>; setStatus: (activityId: string, status: Activity['status']) => Promise<void>; setReviewCheck: (activityId: string, key: 'reviewedSteps' | 'confirmedNoPending', value: boolean) => Promise<void>; deleteActivity: (activityId: string) => Promise<void>; getProgress: (activityId: string) => ActivityProgress; }

const emptyData: TaskFlowData = { courses: [], projects: [], activities: [], taskStages: [], subtasks: [], notes: [], activityHistory: [] };

export const useActivityStore = create<ActivityStore>((set, get) => ({
  ...emptyData,
  filters: { text: '', area: 'all', status: 'all' },
  isLoading: false,
  async load() {
    set({ isLoading: true, error: undefined });
    try {
      await taskFlowRepository.seedIfEmpty();
      const data = await taskFlowRepository.getAll();
      set({ ...data, isLoading: false });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'No se pudo cargar TaskFlow', isLoading: false });
    }
  },
  async createActivity(draft) { const id = await taskFlowRepository.createActivity(draft); await get().load(); return id; },
  setFilters(filters) { set({ filters: { ...get().filters, ...filters } }); },
  async toggleSubtask(subtask) { await taskFlowRepository.toggleSubtask(subtask); await get().load(); },
  async addSubtask(activityId, stageId, title) { if (!title.trim()) return; await taskFlowRepository.addSubtask(activityId, stageId, title); await get().load(); },
  async addNote(activityId, content) { if (!content.trim()) return; await taskFlowRepository.addNote(activityId, content); await get().load(); },
  async setStatus(activityId, status) { await taskFlowRepository.updateStatus(activityId, status); await get().load(); },
  async setReviewCheck(activityId, key, value) { await taskFlowRepository.setReviewCheck(activityId, key, value); await get().load(); },
  async deleteActivity(activityId) { await taskFlowRepository.deleteActivity(activityId); await get().load(); },
  getProgress(activityId) { return calculateProgress(get().subtasks.filter((subtask) => subtask.activityId === activityId)); }
}));
