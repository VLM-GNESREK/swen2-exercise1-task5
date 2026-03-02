type LoadingState = { kind: 'loading' };
type LoadedState = { kind: 'loaded'; data: string[] };
type ErrorState = { kind: 'error'; message: string };

type UIState = LoadingState | LoadedState | ErrorState;

function renderUI(state: UIState): string 
{
  switch (state.kind) {
    case 'loading':
      return 'Rendering spinner...';
    case 'loaded':
      return `Rendering items: ${state.data.join(', ')}`;
    case 'error':
      return `Displaying error: ${state.message}`;
    default:
      const _exhaustiveCheck: never = state;
    /*
        If a new state (e.g., 'RetryingState') is added to UIState but missing from this switch,
        TypeScript will flag an error because 'state' won't resolve to type 'never'.
        This improves maintainability by strictly enforcing that all variants are handled at compile time,
        preventing unhandled states from causing runtime bugs as the application grows.
    */
      throw new Error(`Unhandled state: ${_exhaustiveCheck}`);
  }
}