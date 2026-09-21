
import type { SettingsAction } from './actions/settingsActions';
import type { AnalysisActionType } from './actions/analysisActions';
import type { EngineAction } from './actions/engineActions';
import type { BoardEditorActions } from './actions/boardEditorActions';

export type RootAction =
  | SettingsAction
  | AnalysisActionType
  | EngineAction
  | BoardEditorActions;