<<<<<<< HEAD:src/recucers/cycles.ts
<<<<<<< HEAD:src/recucers/cycles/reducer.ts
import { produce } from 'immer'
=======
import { ActionTypes } from "./actions";
>>>>>>> parent of a5340b3 (Salvando dados no LocalStorage e corrigindo exibição da tabela no histórico):src/recucers/cycles/reducer.ts

import { ActionTypes } from './actions'
=======
interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

<<<<<<< HEAD:src/recucers/cycles.ts
export enum ActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}
>>>>>>> parent of 81f2c4e (Separando Actions):src/recucers/cycles.ts
=======
>>>>>>> parent of a5340b3 (Salvando dados no LocalStorage e corrigindo exibição da tabela no histórico):src/recucers/cycles/reducer.ts

export interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
<<<<<<< HEAD:src/recucers/cycles.ts
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    // return {
    //   ...state,
    //   cycles: state.cycles.map((cycle) => {
    //     if (cycle.id === state.activeCycleId) {
    //       return { ...cycle, finishedDate: new Date() };
    //     }
    //     return cycle;
    //   }),
    // };
=======
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() };
          }
          return cycle;
        }),
        activeCycleId: null,
      };

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() };
          }
          return cycle;
        }),
      };
>>>>>>> parent of a5340b3 (Salvando dados no LocalStorage e corrigindo exibição da tabela no histórico):src/recucers/cycles/reducer.ts

    default:
      return state
  }
}
