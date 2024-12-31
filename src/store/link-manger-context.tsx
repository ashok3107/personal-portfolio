import { createContext, ReactElement, useContext, useReducer } from "react";
import { getCurrRoute } from "../utils/UtilHelper";

type LinkManagerContextProviderType = {
  children: ReactElement;
};

type LinkManagerState = {
  currPathKey: string;
}

type ActionType = {
  type: string;
  data: string;  
};

type LinkManagerContextType = LinkManagerState & {
  updateCurrPath: (currPath: string) => void;
}

const LinkManagerContext = createContext<LinkManagerContextType | null>(null);

export const useLinkManagerContext = () => {
  const linkManagerCtx = useContext(LinkManagerContext);
  return linkManagerCtx;
};

const initialValue: LinkManagerState = {
  currPathKey: getCurrRoute() || '/about',
};

const linkMangagerReducer = (state: LinkManagerState, action: ActionType): LinkManagerState => {
  switch (action.type) {
    case 'UPDATE_CURR_PATH':
      return { ...state, currPathKey: action.data };
  }
  return state;
};

const LinkManagerContextProvider = (props: LinkManagerContextProviderType) => {
  const { children } = props;
  const [linkManagerState, dispatch] = useReducer(linkMangagerReducer, initialValue);
  const ctx: LinkManagerContextType = {
    currPathKey: linkManagerState.currPathKey,
    updateCurrPath: (currPath) => {
      dispatch({
        type: 'UPDATE_CURR_PATH',
        data: currPath
      });
    }
  };
  return (
    <LinkManagerContext.Provider value={ctx}>{children}</LinkManagerContext.Provider>
  );
};

export default LinkManagerContextProvider;