
import type { SettingsAction } from '../../features/settings/redux/settingsActions';
import type { AnalysisActionType } from '../../features/analysis/redux/analysisActions';
import type { EngineAction } from '../../features/engine/redux/engineActions';
import type { BoardEditorActions } from '../../features/chessboard/redux/chessboardSlice';

export type RootAction =
  | SettingsAction
  | AnalysisActionType
  | EngineAction
  | BoardEditorActions;